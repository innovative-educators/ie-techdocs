---
sidebar_position: 5
sidebar_label: 'with PortalGuard'
---

import { Grid } from '../../../src/components/Grid'

# SAML with PortalGuard

:::info This is a Supplementry Guide
This supplements the [Configuring your IdP server](./saml2#configuring-the-idp) portion of the [Configuring SAML 2.0](./saml2) docs using PortalGuard as your identity provider (IdP). Please ensure you've already read and understand the concepts in the [Configuring SAML 2.0](./saml2) documentation before continuing.
:::

PortalGuard has support for SAML 2 integrations. Integrating PortalGuard with IE's applications requires configuration in PortalGuard and also in the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application.

## Configure the SAML IdP

PortalGuard will be acting as the SAML identity provider (IdP). To configure a PortalGuard Relying Party Trust, some information from the IE application is needed.

### Create the Relying Party Trust

To complete the IdP configuration in PortalGuard, we need to create a Relying Party with the following settings:

1. On the `General` tab:
    - **Name:** Enter a desired name. This is a free form field, but it is recommended to enter the Innovative Educator's application name.
    - **Identifiers:** Copy and paste the value of the `entityId` from the `SP metadata file` provided by IE.
    - **Binding:** POST.
    - **Assertion Consumer URL:** From the `SP metadata file` provided by IE, find the element:
        `<AssertionConsumerService binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" location="..."`
        and copy the value of the location attribute to here.
    - **State:** checked

2. On the `Response` tab:
    - **Default RelayState:** (blank)
    - **SAML Version:** 2.0
    - **Digest Algorithm:** SHA-1
    - **Signing Algorithm:** SHA-1
    - **Sign SAML Response:** unchecked
    - **Sign SAML Assertion:** checked
    - **Override Token Timeout:** unchecked
    - **NotBefore Clock Skew:** 0
    - **Override IdP Issuer:** (blank)
    - **Override Cannonicalization:** (blank)

PortalGuard now knows about the Innovative Educator's application.

### Releasing user attributes

We need to instruct PortalGuard to send some information about the user to the SP:

1. In the Relying Party window, select the `Identity Claims` tab.
2. Select the appropriate `Attribute Store`.
3. For each of the attributes, click `Create` and then populate the settings:

:::info Important
Please refer to the SAML 2.0 documentation for requirements and recommendations regarding
[NameID](./saml2#external-customer-id) and [attributes and claims.](./saml2#configure-attributes)
:::

| Attribute | Send As NameID? | Schema Type | Value Type | Direct Field -> Field Name | Direct Field -> Value Index | Required |
| --------- | --------------- | ----------- | ---------- | ------------------------- | -------------------------- | -------- |
| NameId    | checked         | (blank)     | String Field | (uid, sAMAaccountName or other identifying attribute) | 0 | Required  |
| studentLicenseIds| unchecked       | studentLicenseIds  | Formatted String | studentLicenseIds             | 0                          | Required*   |
| firstname | unchecked       | firstname     | String Field | givenName                  | 0                          | Recommended |
| lastname  | unchecked       | lastname    | String Field | sn                         | 0                          | Recommended |
| email     | unchecked       | email       | String Field | email                      | 0                          | Recommended |
| ref1      | unchecked       | ref1        | String Field | ref1                       | 0                          | Optional    |
| ref2      | unchecked       | ref2        | String Field | ref2                       | 0                          | Optional    |
| ref3      | unchecked       | ref3        | String Field | ref3                       | 0                          | Optional    |

4. Lastly click `Save`. PortalGuard is now ready to authenticate users to the IE application.

## Example - One Version of PortalGuard
<Grid>
    ![](/img/saml_portalguard_1.png)
    The populated NameID attribute definition

    ![](/img/saml_portalguard_2.png)
    The populated studentLicenseIds attribute

    ![](/img/saml_portalguard_3.png)
    The IdP-Initiated tab

    ![](/img/saml_portalguard_4.png)
    The Response tab
</Grid>

## Example - Another Version of PortalGuard

<Grid>
![](/img/saml_portalguard_5.png)

![](/img/saml_portalguard_6.png)

![](/img/saml_portalguard_7.png)

![](/img/saml_portalguard_8.png)

![](/img/saml_portalguard_9.png)

![](/img/saml_portalguard_10.png)

![](/img/saml_portalguard_11.png)

![](/img/saml_portalguard_12.png)

![](/img/saml_portalguard_13.png)

![](/img/saml_portalguard_14.png)

![](/img/saml_portalguard_15.png)
</Grid>