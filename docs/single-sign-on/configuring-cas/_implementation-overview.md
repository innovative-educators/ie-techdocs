1. **Have a running Identity Provider (IdP)** that supports CAS SSO protocols to integrate with IE as the Service Provider (SP). [See docs for some specific IDPs here](../introduction#sso-support).

2. **[Configure your IdP server](#configuring-the-idp)**

3. **[Share your IdP Details](#configuring-the-sp)** with your IE representative so they can configure your client. For CAS this typically means the IE validation endpoint (aka CAS server url / serviceValidate endpoint).

4. **[Construct a Learner Login URL](#authentication)** to your instance for students to use for authentication. You'll need a service URL provided by IE and potentially more depending on your circumstances.

5. **[Test Authentication](#testing)** making configuration adjustments as needed. This entails you attempt logging in via SSO (Login URL provided by IE as needed) and your IE rep will consult the SP logs and make / suggest changes if required.

6. **[Share your SP Redirect URLs](#redirects)** for a better user experience. With SSO enabled and accounts controlled by the IDP, learners have no need for the SP `Logout` or `Account` pages anymore. These pages will require redirection to equivalent pages in your system, so share redirect URLs with IE to configure.

:::caution Please Note
Changing your SSO configuration for a client with **existing learners** comes with some additional challenges. [See details here](../existing-learners).
:::
