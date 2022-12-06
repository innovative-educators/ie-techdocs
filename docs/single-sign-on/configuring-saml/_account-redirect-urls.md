<details className={'alert alert--secondary'}>
  <summary>Account Redirect URL details</summary>

Here you'll find a reference for the redirects that need to be implemented after SSO is complete.

### What are these redirects?

With SSO enabled for your client, learners have no need for the Login, Register or Account pages on the SP side. These authentication and account pages should be redirected to equivalent or relevant pages on the IdP side.

You can provide the desired redirect URLs to your IE representative to configure, unless you have access to your own instance settings (uncommon), in which case you could configure them yourself.


#### Account Details URL (required)
This redirects the account details button (on the account page) to the URL provided.

We recommend this URL to point to a corresponding page on the IdP side where learners can adjust their account or profile settings, such as name, email, or password if available. With SSO enabled, any changes made on the IdP side will be reflected on the SP side the next time the user authenticates.

Example: `https://www.yourdomain.com/settings`

#### Account Logout URL (required)
This redirects the logout button (in the profile dropdown menu) to the URL provided.

This, on it's own, only logs the learner out of the SP platform and not out of SSO or the IdP side. For circumstances like a shared computer terminal, it's important that learners know they aren't technically logged out of their SSO accounts. A good place to redirect learners for this would be something like an account dashboard, or a URL that logs them out of SSO if available.

Example: `https://www.yourdomain.com/logout`

{/* #### External Login URL (optional)
This redirects the SP native login page to the URL provided.

This is an optional URL you can use if you want **all** learners to login via SSO. It is expected the user will login on the external page, and then the IdP will send their information back to the SP as part of the SSO process, at which point the user will be signed in.

Optionally you can use `{{returnTo}}` to include the URL the learner should be returned to after logging in via SSO. For SAML, defaulting to the SAML login URL with a `returnTo` query parameter is a straight forward method to enforce SSO.

Example: `https://`[`<product-domain>`](/definition-of-terms#product-domain)`/access/saml/login/<client-slug>?returnTo={{returnTo}}`

#### External Register URL (optional)
This redirects the SP native registration page to the URL provided.

This is an optional URL you can fill in if you want **all** learners to register externally (via the IdP). This will redirect both the free registration page and the checkout page if the user is signed out. On this page you will want to provide the option of registering or logging in. It is expected the user will register or log in on the external page, and then the IdP will send their information back to the SP as part of the SSO process, at which point the user will be signed in.

Optionally you can use `{{returnTo}}` to include the URL the learner should be returned to after registration. For SAML, defaulting to the SAML login URL with a `returnTo` query parameter is a straight forward method to enforce SSO.

Example: `https://`[`<product-domain>`](/definition-of-terms#product-domain)`/access/saml/login/<client-slug>?returnTo={{returnTo}}` */}

</details>