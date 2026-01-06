---
sidebar_position: 6
sidebar_label: "with Shibboleth"
---

# SAML with Shibboleth

:::info This is a Supplementry Guide
This supplements the [Configuring your IdP server](./saml2#configuring-the-idp) portion of the [Configuring SAML 2.0](./saml2) docs using Shibboleth as your identity provider (IdP). Please ensure you've already read and understand the concepts in the [Configuring SAML 2.0](./saml2) documentation before continuing.
:::

Shibboleth IdP is an open source software (OSS) SAML 2 identity provider (IdP) commonly used in higher education. Integrating Shibboleth IdP with IE's applications requires configuration of Shibboleth IdP's xml files and also configuration of the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application.


## Configure the SAML IdP
Shibboleth will be acting as the SAML identity provider (IdP). To configure a Shibboleth IdP, some information from the IE application is needed. This typically means the SP metadata which will be provided by IE.

### IdP Metadata Provider Configuration

The Shibboleth IdP needs to know about the service provider(s). To complete the IdP-side of the trust:

1. Copy the metadata file received from IE to `<IDP_HOME>/metadata/<somename>.xml`

:::note
If using an XLM file like this (instead of a live hosted URL), we recommend removing the validUntil property and value to avoid any potential issues that may arise from an IdP acting on the expiration date of the metadata file.
:::

2. Navigate to and edit `<IDP_HOME>/conf/metadata-providers.xml`.
3. Using the filename from step #2, add a new element:

```xml title="<IDP_HOME>/conf/metadata-providers.xml"
<MetadataProvider id="IEApp" xsi:type="FilesystemMetadataProvider" metadataFile="%{idp.home}/metadata/<somename>.xml"/>
```

4. Save the file.

Shibboleth IdP now knows about the Innovative Educators application.

### Resolving User Attributes

:::info Important
Please refer to the [SAML 2.0 documentation for requirements and recommendations regarding attributes and claims.](./saml2#configure-attributes)
:::

Attributes from the authentication source, usually an ldap-based directory, need to be mapped to an IdP attribute with a SAML attribute encoding. To do this, we need to:

1. Confirm that the givenName, surname, and mail attributes are configured similar to the following in the `<IDP_HOME>/conf/attribute-resolver.xml` file:

```xml title="<IDP_HOME>/conf/attribute-resolver.xml"
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

2. These attributes are provided in the default Shibboleth IdP install. They maybe different if previously customized. If the SAML2 `AttributeEncoder` name values are different than above, then the attribute mappings below need to be adjusted accordingly.

3. There is also a need to import an attribute for the user id. The following attribute definition is the first step in defining the "uid_nameid":

```xml title="<IDP_HOME>/conf/attribute-resolver.xml"
<AttributeDefinition xsi:type="Simple" id="uid_nameid" sourceAttributeID="uid">
  <resolver:Dependency ref="staticAttributes" />
</AttributeDefinition>
```

4. Adjust the `sourceAttributeID` value to whatever source attribute contains the user id that should be used by the service provider/application. Common examples are uid, sAMAccountName, employeeId, employeeNumber, etc.

5. If a `studentLicenseId` value is provided by IE, a custom attribute named "studentLicenseIds" needs to be configured:

```xml title="<IDP_HOME>/conf/attribute-resolver.xml"
<AttributeDefinition xsi:type="Simple" id="studentLicenseIds" sourceAttributeID="studentLicenseIds">
  <resolver:Dependency ref="staticAttributes" />
  <resolver:AttributeEncoder xsi:type="SAML2String" name="studentLicenseIds" friendlyName="studentLicenseIds" encodeType="false" />
</AttributeDefinition>
```

6. The studentLicenseIds attribute relies on a static value being defined in a static DataConnector. This data connector should be declared near the bottom of the file next to the other data connector(s).

```xml title="<IDP_HOME>/conf/attribute-resolver.xml"
<DataConnector id="staticAttributes" xsi:type="Static">
  <Attribute id="studentLicenseIds">
    <Value><licId></Value>
  </Attribute>
</DataConnector>
```

7. Update the `<licId>` to the value that was provided.

:::note
This connector may already exists. If so, just add the studentLicenseIds **Attribute** element to the existing **staticAttributes** **DataConnector** element.
:::

8. Save the file.


### Setting up the Subject NameId

:::info Important
[Please refer to the SAML 2.0 documentation for requirements and recommendations regarding the NameID](./saml2#external-customer-id).
:::

In the attribute-resolver.xml file, we defined an attribute named, "uid_nameid". To finish defining the "user id", the Shibboleth IdP needs to be instructed on how to process that attribute and release the data as a subject nameId with a nameid format:

1. Navigate to and edit `<IDP_HOME>/conf/saml-nameid.xml` file.
2. Inside the section starting with `<util:list id="shibboleth.SAML2NameIDGenerators">`, add the following bean definition:

```xml title="<IDP_HOME>/conf/saml-nameid.xml"
<bean parent="shibboleth.SAML2AttributeSourcedGenerator"
p:format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
p:attributeSourceIds="#{ {'uid_nameid'} }" />
```

This will send the "uid_nameid" idp attribute to the SP as an `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` name-id formatted value.

#### Set the NameId and Assertion Signing for the SP

The Shibboleth IdP ignores the use of the `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` name-id type unless explicitly instructed to use it:
1. Navigate to and edit `<IDP_HOME>/conf/relying-party.xml` file.
2. Inside the section `<util:list id="shibboleth.RelyingPartyOverrides">` add the following bean definition:

```xml title="<IDP_HOME>/conf/relying-party.xml"
<bean parent="RelyingPartyByName" c:relyingPartyIds="<spentityId>">
  <property name="profileConfigurations">
    <list>
      <bean parent="SAML2.SSO"
    p:signAssertions="true"
    p:nameIDFormatPrecedence="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified" />
    </list>
  </property>
</bean>
```

3. Replace the value `<spentityId>` with the entity Id of the service provider. You can find the entity Id in the metadata file provided by IE.


### Releasing User Attributes

:::info Important
Please refer to the [SAML 2.0 documentation for requirements and recommendations regarding attributes and claims.](./saml2#configure-attributes)
:::

We need to instruct Shibboleth IdP to release attributes about the user:

1. Navigate to and edit `<IDP_HOME>/conf/attribute-filter.xml` file.
2. Add the following bean definition to the body of the file:

```xml title="<IDP_HOME>/conf/attribute-filter.xml"
<AttributeFilterPolicy id="example1">
  <PolicyRequirementRule xsi:type="Requester" value="<spentityId>" />
  <AttributeRule attributeID="uid_nameid">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="givenName">
    <PermitValueRule xsi:type="ANY" />
  </AttributeRule>
  <AttributeRule attributeID="studentLicenseIds">
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

3. Replace the value `<spentityId>` with the entity Id of the service provider. You can find the entity Id in the metadata file provided by IE.

Shibboleth IdP is now ready to authenticate users to the Innovative Educators application.
