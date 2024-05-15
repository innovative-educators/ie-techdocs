With SSO enabled for your client, learners will have no need for the Login, Register or Account pages on the SP side. These pages should be redirected to relevant pages on the IdP side. Please provide the following types of redirect URLs to your IE representative to configure.

<details className={'alert alert--secondary'}>
  <summary>Account Details URL (required)</summary>

#### Usage:
The account details page is replaced by an "Account Details" button which links to the URL provided.

#### Details:
We recommend this URL to point to a corresponding page on the IdP side where learners can adjust their account or profile settings, such as name, email, or password if available. With SSO enabled, any changes made on the IdP side will be reflected on the SP side the next time the user authenticates.

#### Types of pages on the IdP side to consider:
- Profile Settings Page
- Password Reset Page
- Home Page

#### Example:
`https://www.yourdomain.com/settings`

</details>


<details className={'alert alert--secondary'}>
  <summary>Logout URL (required)</summary>

#### Usage:
This redirects the logout button (in the profile dropdown menu) to the URL provided.

#### Details:
This, on it's own, only logs the learner out of the SP platform and not out of SSO or the IdP side. For circumstances like a shared computer terminal, it's important that learners know they aren't logged out of IdP accounts when they log out of the SP platform via this URL.

#### Types of pages on the IdP side to consider:
- Home Page
- Internal Dashboard Page
- A Logout URL (if available) to log the user out of the IdP
- Specific Page letting learners know they're not logged out of their IdP yet (if applicable)

#### Example:
`https://www.yourdomain.com/logout`

</details>


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

<!--
External Login URL

Redirect login to this URL. You can use {{returnTo}} to include the URL the learner should be returned to after logging in via SSO.
Example: https://www.example.com/login?returnTo={{returnTo}}
For SAML, defaulting to the SAML login URL with the returnTo parameter is a good idea. Example:
https://www.studentlingo.com/access/saml/login/school-slug?returnTo={{returnTo}}
This is an optional URL you can fill in if you want all students to log in via SSO. Filling this in will redirect the login page to the URL you specify. It is expected the user will log in on the external page, and then you will send their information back to TI as part of an SSO process, at which point the user will be signed into TI. You can use {{returnTo}} in the URL and TI will automatically fill in what URL the student should be returned to after they have logged in. For example: http://www.example.org/sign_in?return_to={{returnTo}}&from=TI

External Register URL

Redirect registration to this URL. You can use {{returnTo}} to include the URL the learner should be returned to after registration.
Example: https://www.example.com/register?returnTo={{returnTo}}
For SAML, defaulting to the SAML login URL with the returnTo parameter is a good idea. Example:
https://www.studentlingo.com/access/saml/login/school-slug?returnTo={{returnTo}}
This is an optional URL you can fill in if you want all students to register externally. This will redirect both the free registration page and the checkout page if the user is signed out. On this page you will want to provide the option of registering or logging in. It is expected the user will register or log in on the external page, and then you will send their information back to TI as part of an SSO process, at which point the user will be signed into TI. You can use {{returnTo}} in the URL and TI will automatically fill in what URL the student should be returned to after they have registered or logged in. This is particularly important for this endpoint as we will specify a returnTo URL that will put the student back into the checkout flow. For example: http://www.example.org/register?return_to={{returnTo}}&from=TI -->