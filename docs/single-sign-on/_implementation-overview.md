1. Have a **SAML Identity Provider** (IdP), or one that supports SAML protocols. [See docs for some specific IDPs here](/docs/single-sign-on/intro)

2. Provide **SP SSO configuration settings** to your IE representative to configure your client.

- IDP Single Sign-On URL
- IDP Single Sign-Out URL (optional)
- IdP X.509 Certificate

3. Configure your **IdP** **SAML 2.0 settings**. From IE you'll need:

- licenseIds (this is a static attribute that IE will provide that needs to be passed for each user)
- TI SP metadata XML file

4. IE will provide you with you Login Link
