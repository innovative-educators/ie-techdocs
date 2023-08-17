# Single Sign On (SSO)

Make authentication seamless for learners and maintain data accuracy by automating learner account creation

## What is SSO?

SSO is a process that allows users to sign in once and access multiple applications or websites. The applications or sites utilizing SSO can co-exist as one network or system (ie school’s LMS, SIS, and portal), or they can exist as multiple networks or systems distinctly separate from one another.

This is similar to how you can use one set of credentials, like a Facebook username and password, to log into multiple 3rd party websites; and if you are already authenticated in facebook, then you're already authenticated in those 3rd party websites and vice versa.

In addition, SSO automates the passing of user profile data from the identity provider (your end) to a service provider like IE for account creation. This side steps data integrity issues that can occur when learners input details manually (wrong or typo-ed emails/names).

## What type of SSO do we support? {#sso-support}

- [SAML 2.0](./configuring-saml/saml2)
  - [with Azure](./configuring-saml/azure)
  - [with ADFS](./configuring-saml/adfs)
  - [with Shibboleth](./configuring-saml/shibboleth)
  - [with PortalGuard](./configuring-saml/portalguard)
- [CAS protocol 2.0 and 3.0](./configuring-cas/cas)

:::note
We can’t use LDAP as our primary protocol but it does work with the SSO solutions we support.
:::
