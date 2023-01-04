:::caution
Changing your SSO configuration for a client with existing learners in the IE system comes with some additional challenges. [Please see details here](./existing-learners).
:::

1. **You need a running Identity Provider (IdP)** that supports SAML SSO protocols to integrate with IE as the Service Provider (SP). [See docs for some specific IDPs here](./introduction#sso-support).

2. **[Configuring your SP client](#configuring-the-sp)** Share your IdP SAML configuration details with your IE representative so they can configure your client. Typically these are shared via the `IdP metadata XML file`.

3. **[Configure your IdP server](#configuring-the-idp)** with your SP SAML configuration details.

4. **[Testing Authentication](#testing)** and making configuration adjustments as needed. This entails you attempt logging in via SSO (Login URL provided by IE) and your IE rep will consult the SP logs and make / suggest changes if required.

5. **[Configuring your SP Redirects](#redirects)** Share URL redirects with IE. With SSO enabled, learners have no need for our `Login`, `Register` or `Account` pages anymore. These pages will require redirection to equivalent pages in your system.

