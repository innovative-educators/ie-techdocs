---
sidebar_position: 5
sidebar_label: 'with PortalGuard'
draft: true
---

# SAML with PortalGuard

## Overview

PortalGuard has support for SAML 2 integrations. Integrating PortalGuard with IE's applications requires configuration in PortalGuard and also in the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application.

:::note
Local adaption of these instructions maybe needed.
:::

## Configuring the SAML IdP (PortalGuard)

PortalGuard will be acting as the SAML identity provider (IdP). To configure a PortalGuard Relying Party Trust, some information from the IE application is needed.

### Retrieving the SP Metadata

1.  If a client configuration is being used, browse to the Panorama section, and click Manage on the appropriate client.
2.  If a client configuration is not being used, click the Settings link
3.  Then click the Single Sign On link.
4.  On the Single Sign On page, scroll down to the SAML 2.0 Settings section.
5.  Right click on the Download SAML Metadata button and click Save Link As...
6.  Save the file to disk.

![](https://lh4.googleusercontent.com/FiPMg_0gGkv_amgrKEDEy9YTdCwsgHB9gylmznsCmwxazf0zk7oewHHTF5s7pr7d32NpQijeUqa50Ugfr5wSm6jfke_H9AZy0tsP4kuAQdm-hh-y=w1280)

The SAML 2.0 Settings section and Download SP Metadata button

### Create the Relying Party Trust

To complete the IdP configuration in PortalGuard, we need to create a Relying Party with the following settings:

1.  On the General tab:
    1.  Name: Enter a desired name. This is a free form field, but it is recommended to enter the Innovative Educator's application name.
    2.  Identifiers: Copy and paste the value of the entityId from the Innovative Educators application's metadata file.
    3.  Binding: Set to POST.
    4.  Assertion Consumer URL: From the Innovative Educators application's metadata file, find the element named AssertionConsumerService with a Binding attribute value of urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST, copy the value of the Location attribute and pasted it into PortalGuard.
    5.  State: Ensure that it is checked.

2.  On the Response tab:
    1.  Default RelayState: (blank)
    2.  SAML Version: 2.0
    3.  Digest Algorithm: SHA-1
    4.  Signing Algorithm: SHA-1
    5.  Sign SAML Response?: unchecked
    6.  Sign SAML Assertion?: checked
    7.  Override Token Timeout?: unchecked
    8.  NotBefore Clock Skew: 0
    9.  Override IdP Issuer: (blank)
    10. Override Cannonicalization: (blank)

PortalGuard now knows about the Innovative Educator's application.

### Releasing user attributes

We need to instruct PortalGuard to send some information about the user to the SP:

1.  In the Relying Party window, select the Identity Claims tab.
2.  Select the appropriate Attribute Store.
3.  For each of the attributes, click Create and then populate the settings:
    1.  First Name (required):
        - Name: firstname
        - Send As NameID?: unchecked
        - Schema Type: firstname
        - Value Type: String Field
        - Convert Case: (No Change)
        - Direct Field\->Field Name: givenName
        - Direct Field\->Value Index: 0

    2.  Last Name (required):
        - Name: firstname
        - Send As NameID?: unchecked
        - Schema Type: lastname
        - Value Type: String Field
        - Convert Case: (No Change)
        - Direct Field\->Field Name: sn
        - Direct Field\->Value Index: 0

    3.  Email Address (required):
        - Name: email
        - Send As NameID?: unchecked
        - Schema Type: email
        - Value Type: String Field
        - Convert Case: (No Change)
        - Direct Field\->Field Name: email
        - Direct Field\->Value Index: 0

    4.  NameId/Username (required):
        - Name: NameID
        - Send As NameID?: checked
        - Schema Type: (blank)
        - Value Type: String Field
        - Convert Case: (No Change)
        - Direct Field\->Field Name: (uid, sAMAaccountName or other identifying attribute)
        - Direct Field\->Value Index: 0

    5.  licenseIds (if provided by IE):
        - Name: firstname
        - Send As NameID?: unchecked
        - Schema Type: licenseIds
        - Value Type: Formatted String
        - Convert Case: (No Change)
        - Formatted\->Composite Value Format: (enter the licenseId provided by Innovative Educators)

    6.  If passing additional attributes (Ref1, Ref2, Ref3), repeat the steps for each using Email as an example.

    7.  Click Save.

PortalGuard is now ready to authenticate users to the IE application.

## Configuring the NameId (Name Identifier)

The Name Identifier is the unique ID that will identify SAML users coming from the IdP (identity provider).

### Requirements

- Must be unique across the instance: This value of the NameId must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners. Some good options include:

  - Email Addresses

  - Appending the school domain name to a name or ID

  - Or utilizing an ID random enough to sufficiently collision resistant

### Recommendations

- Use an ID that doesn't change: Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress.

  - Email Address as NameId will suffice : Sending an email as the NameId can cause the problem mentioned above when a learner's email changes due to a name change. That said, email addresses are used by many clients without much headache. Though it isn't the "perfect" option, we considered it "good enough".

  - Unique IDs are a better option: If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID, has the benefits of being both unique and unchanging.


## Example - One Version of PortalGuard

![](https://lh4.googleusercontent.com/Xop0Hmi6yvvxqP-tgasG2MiG6cCRdagOtzpobpFsTp5MrIy0kE_4KtEpmG8MBYf3kGb3DupCIjkKdLnYG-SCba0-vSzbvf10z5yx05b8Gx04eLfI=w1280)
The populated NameID attribute definition

![](https://lh4.googleusercontent.com/eV5loE-qifF3a5RsRMgCJxgIS_UewrgOc_aeXE_w9-gCrI-U12DUKwQDnzjEgrOXkhH4gBBybl80WTHO1EJSKE9mt5I8TJoFdykB6_sEcXOmKAeq=w1280)
The populated LicenseIds attribute

![](https://lh5.googleusercontent.com/ob1y4wppG2xswJx9gJpOJD7JY4a9VMX0-O3dQNI-hzI6ZhlldgDQ9czIj27xV4HZ04WnGQ=w1280)
The IdP-Initiated tab

![](https://lh5.googleusercontent.com/1md1mnA8jfQaN-Lyl22vvs8e7VZLKSHpJp9OtB_SaqOCX8FtTWVgOQ-O5DtG0y9UC5xSUoqktoqnQgzEvIcgRX5R5oOMJm1EdeN3L_2aKJZbKIXD=w1280)
The Response tab


## Example - Another Version of PortalGuard

![](https://lh5.googleusercontent.com/1IN2a5jrW4yxhHMRSZQUzsRuIBpYbyGOcouL4tayLiKLsuxGcWKicCQ5jMyKl9GVkRhS1GjP9ke3vyCf0MrE61S5suOJeMIrYyjf6HoFqpdhkIfU6Q35wBeKfXVyZPY07g=w1280)

![](https://lh6.googleusercontent.com/jMSlAbyIChGgOkDu8rl8dkW-jcRgFfT8BVE2xBk_2-AIL1f4IpDKeMI0VMuDlOJJsUyBFB9HYBTezQIuAbjO_xbORY1ZWi1pmZqtsvjAyJtFQB8_dbEaIM7p0iT_vpRxFA=w1280)

![](https://lh5.googleusercontent.com/SXKwNAgzKwOdxMPmU9hbZC-bnOpgqS3oKk-wH1SB78_Nqullzm3gXDleLmW1zM9oI2QtOcIM-94aJ1D4WSLOBzYdW58P_S0aj6OuXw8s3eZtA78HMvPEALcat8XfecFbOw=w1280)

![](https://lh5.googleusercontent.com/o7pwZ3MwCjBEzyCYZ2Z97y7YxHpaIFO3mayK87LlSlFODZSEwTY5i2aU-5v0MBHWhGbulmyVJeqsLdiN6D6R2xy6oUWyVOFf-33LiIsgLEBindn08OWmb_0fO2ywIxD6nA=w1280)

![](https://lh5.googleusercontent.com/W8gUKxXIofQSP81yrFxENS0O1wqfamjHxPMHlO9dRuhwjS4N9IjVAw_yoQVbYsC_l8sx-hUiEIMFXMklf8ZwjGRB4rph5SeyDqgTz2YZ8RJXH6mDuXHyQ_AlNBED1SPepQ=w1280)

![](https://lh4.googleusercontent.com/8Q3mUWtQtrYquGvc97Pf3A7BotlsW7EI0mqWU7zWdvBi-g4ERx99zsX0IfTsHPFwVI_xFB6fLgYay1hNIYl7wXzgR8qrXa-CS2HMpPec7ijsaZ0lT_Snqt14xvjjQxQp5w=w1280)

![](https://lh3.googleusercontent.com/K_Sg-UbtXNvBMOjVPZP3CHf22Ux3ZnfzgDLtSnfXmzaADAc5rds0xR4xQegcFZaTnCZ4bhJWQn3KhgXbxbfPbWz8ci1QD_vi1jTaHb6tS3ZY72SVO5_oGltc_wJ-srqvsQ=w1280)

![](https://lh3.googleusercontent.com/vYkFET3TpSP81CAjEAE_MwJ5cMCspGYWx3Uj8kOaCoFtJwI-w8eI-4jXrsxXXpETrycsKJ4CzP_rok3svoCdn8CCl2WV05tPO_znVJg3XirftsPvDmlUqVHAu-ws8Np94g=w1280)

![](https://lh4.googleusercontent.com/ufX_h_hgm9HGWGMT37My4b-CuzVN7Z0g4hYmB7Tv6UkX127fM8vWu3RxtGKhrtY1Ug1d7Cbnl_bEyLbG_gBEMeFtpdURDLY604MhGe5dvTstG52IEqQlyoEtRvg0KnLsKw=w1280)

![](https://lh5.googleusercontent.com/TKlIVqIbs-KRr4_34jxAeq-hFQU5Z4Iz29_CAwlLdO2aW4KaGXx28m-Z6UDXyefLFEvKvOFE2cUhk16Bofw4JjgGoJHGKXuOijxygBDR9BFTLL5x4b8187yyQxLy65isww=w1280)

![](https://lh3.googleusercontent.com/JKYYlaVGC0L1qAfID09D4BvavkXY_NZugfNI50-THfzSOb12Nc1Eku29iTsKlxjfxLJY9tZIhyQ5Hm5hpOjD4f8i_pRF_0UxDq7m5jx8UZ0-nQnOR2_2vQQXCPlVRPXz=w1280)

## Logging In

Users can login by accessing the URL `<https://www.go2knowledge.org/access/saml/login/><client-slug>` or `https://<school domain>/access/saml/login`.
