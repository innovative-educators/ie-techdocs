---
sidebar_position: 1
---

# Introduction

Make authentication seamless for learners and maintain data accuracy by automating learner account creation

## What is SSO?

SSO is a process that allows users to sign in once and access multiple applications or websites. The applications or sites can utilizing SSO can co-exist as one network or system (ie school’s LMS, SIS, and portal), or they can exist as multiple networks or systems distinctly separate from one another.

This is similar to how you can use one set of credentials, like a Facebook username and password, to log into multiple 3rd party websites; and if you are already authenticated in facebook, then you're already authenticated in those 3rd party websites and vice versa.

In addition, SSO can automate the passing of user profile data from the identity provider (your end) to a service provider like IE. This side steps the issues of having learners input profile details manually, such as wrong or typo-ed emails / names.

## What type of SSO do we support?

- [SAML 2.0](/docs/single-sign-on/saml2)
- [SAML with Azure](/docs/single-sign-on/azure)
- [SAML with ADFS](/docs/single-sign-on/adfs)
- [SAML with Shibboleth](/docs/single-sign-on/shibboleth)
- [SAML with PortalGuard](/docs/single-sign-on/portalguard)
- [CAS protocol 2.0 and 3.0](/docs/single-sign-on/cas)

:::info
We can’t use LDAP as our primary protocol but it does work with the SSO solutions we support.
:::