1. **Have a running Identity Provider (IdP)** that supports SAML SSO protocols to integrate with IE as the Service Provider (SP). [See docs for some specific IDPs here](../introduction#sso-support).

2. **[Share your IdP Details](#configuring-the-sp)** with your IE representative so they can configure your client. Typically these are shared via the <span style={{ whiteSpace: 'nowrap' }}>`IdP metadata XML file`</span>.

3. **[Configure your IdP server](#configuring-the-idp)** with the SP SAML configuration details provided by IE. Typically these are shared via the <span style={{ whiteSpace: 'nowrap' }}>`SP metadata XML file`</span>.

4. **[Test Authentication](#testing)** making configuration adjustments as needed. This entails you attempt logging in via SSO (Login URL provided by IE as needed) and your IE rep will consult the SP logs and make / suggest changes if required.

5. **[Share your SP Redirect URLs](#redirect-urls)** for a better user experience. With SSO enabled and accounts controlled by the IDP, learners have no need for the SP `Logout` or `Account` pages anymore. These pages will require redirection to equivalent pages in your system, so share redirect URLs with IE to configure.

:::caution Have Existing Learners?
Changing your SSO configuration for a client with **existing learners** comes with some additional challenges. [See details here](../existing-learners).
:::

:::caution Using a Federated IdP?
Using a federated Identity Provider (district level, 3rd party etc) comes with some additional considerations. [See details here](../federated-idp).
:::
