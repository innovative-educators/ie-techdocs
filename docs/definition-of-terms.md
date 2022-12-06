---
pagination_prev: null
pagination_next: null
---

# Definition of Terms

## SSO
- **Single Sign-On (SSO) -** a process that allows users to sign in once and access multiple applications or sites. The applications or sites can be part of one network or system - a school's LMS, SIS, and portal; or they can be outside the network or system. It is similar to, but not quite the same as, using Facebook to log into multiple websites. You use one set of credentials - Facebook username and password- to log in, but you have to go to the log-in page and log into each site individually.
- **Identity Provider (IdP)** -The system of record for users and their attributes. Some examples of systems and services that can operate as an IdP are Shibboleth, Okta, OneLogin, Salesforce and ADFS.
- **Service Provider (SP)** - A system that provides a service which requires authentication and/or authorization. In this case, TI is the Service Provider.

### JWT SSO
- **JWT (JSON Web Token)** - More information on JWT, including libraries in variety of languages, can be found at [http://jwt.io/](http://www.google.com/url?q=http%3A%2F%2Fjwt.io%2F&sa=D&sntz=1&usg=AOvVaw1choA5laEfIGH_TKF-Ag10)

### SAML SSO
- **Metadata** - A standards-based XML document that describes a SAML-enabled system. Metadata is typically provided for both SPs and IdPs. TI provides metadata for your instance in the administration interface. The TI SP metadata can be imported directly by your provider if supported, or individual components can be entered manually.
- **Signed Responses** - Allows the SP to verify a response actually came from the IdP by validating the response signature with the IdP certificate. This is not enabled by default in TI. If your IdP supports this option, you will need to ensure the X.509 certificates are exchanged between the SP and IdP, and IE will need to turn on "Sign Requests" under SAML Advanced Settings in TI's SSO Settings interface.
- **Encrypted Assertions** - The SAML format supports end-to-end encryption of responses to ensure that the SP is the only partly capable of reading user information. **This is enabled by default in TI**. If your IdP supports this option, you will need to ensure the X.509 certificates are exchanged between the SP and IdP. If your IdP does **not** support this option, IE will need to turn on "Allow Unencrypted Assertions" under SAML Advanced Settings in TI's SSO Settings interface.

## Product Domains {#product-domain}
  - www.go2orientation.com
  - www.go2knowledge.org
  - www.college2success.com
  - www.tutorlingo.org
  - www.studentlingo.com
  - www.parentlingo.com
  - www.go2ie.com

## Thought Industries
- **Thought industries (TI)** - Platform utilized by IE for content delivery
- **Client** - A subdivided part of an instance (see below) designated as school portals
- **Instance** - A global portal used for single (global usage) or multiple (client usage) school portals
