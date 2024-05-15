---
sidebar_position: 6
sidebar_label: "with Shibboleth"
draft: true
---

# SAML with Shibboleth

## Overview

Shibboleth IdP is an open source software (OSS) SAML 2 identity provider (IdP) commonly used in higher education. Integrating Shibboleth IdP with IE's applications requires configuration of Shibboleth IdP's xml files and also configuration of the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application.


## Configuring the Shibboleth IdP
Shibboleth will be acting as the SAML identity provider (IdP). To configure a Shibboleth IdP, some information from the IE application is needed.

### Retrieving the SP Metadata

1. Login into the application.
2. If a client configuration is being used, browse to the Panorama section, and click Manage on the appropriate client.
3. If a client configuration is not being used, click the *Settings* link
4. Then click the *Single Sign On* link.
5. On the Single Sign On page, scroll down to the *SAML 2.0 Settings* section.
6. Right click on the *Download SAML Metadata* button and click *Save Link As...*
7. Save the file to disk.

![](https://lh3.googleusercontent.com/lZHNBwZpYFSLVmGS67XJxdbrsChCu3NK5VTIBrw8gr0eKLzEEsEU9M3fTLZq_1t_HAZnJzFA8s-zrz61eAgkq1TpUo9cTMShiTy6RlRKYJhyBc5Z=w1280)

The *SAML 2.0 Settings* section and *Download SP Metadata* button


## IdP Metadata Provider Configuration

The Shibboleth IdP needs to know about the service provider(s). To complete the IdP-side of the trust:

1. Copy the downloaded metadata file to `<IDP\_HOME>/metadata/<somename>.xml`

2. Navigate to and edit `<IDP\_HOME>/conf/metadata-providers.xml`.

3. Using the filename from step #2, add a new element: `**<MetadataProvider id="IEApp" xsi:type="FilesystemMetadataProvider" metadataFile="%{idp.home}/metadata/<somename>.xml"/>**`

4. Save the file.

Shibboleth IdP now knows about the Innovative Educators application.


## Resolving User Attributes

Attributes from the authentication source, usually an ldap-based directory, need to be mapped to an IdP attribute with a SAML attribute encoding. To do this, we need to confirm that the givenName, surname, and mail attributes are configured similar to the following in the `<IDP\_HOME>/conf/attribute-resolver.xml` file:

```xml
<AttributeDefinition xsi:type="Simple" id="mail" sourceAttributeID="mail">
    <Dependency ref="myLDAP" />
    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:mail" encodeType="false" />
    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:0.9.2342.19200300.100.1.3" friendlyName="mail" encodeType="false" />
</AttributeDefinition>
<AttributeDefinition xsi:type="Simple" id="surname" sourceAttributeID="sn">
    <Dependency ref="myLDAP" />
    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:sn" encodeType="false" />
    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:2.5.4.4" friendlyName="sn" encodeType="false" />
</AttributeDefinition>
<AttributeDefinition xsi:type="Simple" id="givenName" sourceAttributeID="givenName">
    <Dependency ref="myLDAP" />
    <AttributeEncoder xsi:type="SAML1String" name="urn:mace:dir:attribute-def:givenName" encodeType="false" />
    <AttributeEncoder xsi:type="SAML2String" name="urn:oid:2.5.4.42" friendlyName="givenName" encodeType="false" />
</AttributeDefinition>
```

These attributes are provided in the default Shibboleth IdP install. They maybe different if previously customized by the organization. If the SAML2 **AttributeEncoder** **name** values are different than above, then the **Attribute Mappings** below need to be adjusted accordingly.

There is also a need to import an attribute for the \`user id\`. The following attribute definition is the first step in defining the "uid\_nameid":

```xml
<AttributeDefinition xsi:type="Simple" id="uid\_nameid" sourceAttributeID="**uid**">
  <resolver:Dependency ref="staticAttributes" />
</AttributeDefinition>
```

Adjust the **sourceAttributeID** value to whatever source attribute contains the user id that should be used by the service provider/application. Common examples are uid, sAMAccountName, employeeId, employeeNumber, etc.

If a licenseId value is provided by Innovative Educators, a custom attribute named **licenseIds** needs to be configured:

```xml
<AttributeDefinition xsi:type="Simple" id="licenseIds" sourceAttributeID="licenseIds">
  <resolver:Dependency ref="staticAttributes" />
  <resolver:AttributeEncoder xsi:type="SAML2String" name="licenseIds" friendlyName="licenseIds" encodeType="false" />
</AttributeDefinition>
```

The licenseIds attribute relies on a static value being defined in a static DataConnector. This data connector should be declared near the bottom of the file next to the other data connector(s).

```xml
<DataConnector id="staticAttributes" xsi:type="Static">
  <Attribute id="licenseIds">
    <Value>**<licId />**</Value>
  </Attribute>
</DataConnector>
```

Update the `<licId>` to the value that was provided.

:::note
This connector may already exists. If so, just add the licenseIds **Attribute** element to the existing **staticAttributes** **DataConnector** element.
:::

Save the file.


## Setting up the Subject NameId

In the attribute-resolver.xml file, we defined an attribute named, "uid\_nameid". To finish defining the "user id", the Shibboleth IdP needs to be instructed on how to process that attribute and release the data as a subject nameId with a nameid format:

1. Navigate to and edit `<IDP\_HOME>``/conf/saml-nameid.xml` file.
2. Inside the section starting with `**<util:list id="shibboleth.SAML2NameIDGenerators">**`, add the following bean definition:

```xml
<bean parent="shibboleth.SAML2AttributeSourcedGenerator"
p:format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
p:attributeSourceIds="#{ {'uid\_nameid'} }" />
```

This will send the "uid\_nameid" idp attribute to the SP as an **urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified** name-id formatted value.


### Set the NameId and Assertion Signing for the SP

The Shibboleth IdP ignores the use of the **urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified** name-id type unless explicitly instructed to use it:
1. Navigate to and edit `<IDP\_HOME>/conf/relying-party.xml` file.
2. Inside the section `<util:list id="shibboleth.RelyingPartyOverrides">` add the following bean definition:

```xml
<bean parent="RelyingPartyByName" c:relyingPartyIds="**<spentityId>**">
  <property name="profileConfigurations">
    <list>
      <bean parent="SAML2.SSO"
    p:signAssertions="true"
    p:nameIDFormatPrecedence="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified" />
    </list>
  </property>
</bean>
```

Note: Replace the value `<spentityId>` with the entity Id of the service provider. (See the downloaded metadata for the exact value.)


## Releasing User Attributes

We need to instruct Shibboleth IdP to release attributes about the user:

1. Navigate to and edit `<IDP\_HOME>/conf/attribute-filter.xml` file.
2. Add the following bean definition to the body of the file:

```xml
<AttributeFilterPolicy id="example1">
  <PolicyRequirementRule xsi:type="Requester" value="**<spentityId>**" />
  <AttributeRule attributeID="uid\_nameid">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="givenName">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="licenseIds">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="mail">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="surname">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
</AttributeFilterPolicy>
```

:::note
Replace the value `<spentityId>` with the entity Id of the service provider. (See the downloaded metadata for the exact value.)
:::

Shibboleth IdP is now ready to authenticate users to the Innovative Educators application.


## Configuring the NameId (Name Identifier)

The Name Identifier is the unique ID that will identify SAML users coming from the IdP (identity provider).

### Requirements

- **Must be unique across the instance:** This value of the NameId must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners. Some good options include:

    - Email Addresses

    - Appending the school domain name to a name or ID

    - Or utilizing an ID random enough to sufficiently collision resistant

### Recommendations

- **Use an ID that doesn't change:** Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress.

    - **Email Address as NameId will suffice :** Sending an email as the NameId can cause the problem mentioned above when a learner's email changes due to a name change. That said, email addresses are used by many clients without much headache. Though it isn't the "perfect" option, we considered it "good enough".

    - **Unique IDs are a better option:** If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID, has the benefits of being both unique and unchanging.

## Logging In

Users can login by accessing the URL `https://www.go2knowledge.org/access/saml/login/<client-slug>` or `https://<school domain>/access/saml/login`.