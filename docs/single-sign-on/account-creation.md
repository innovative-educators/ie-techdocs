---
sidebar_position: 1
---

# Learner Account Creation and Updates

Once SSO has been successfully implemented, learners will access the IE platform and their designated content by:

1. Clicking a link (provided by IE) in an email, website, dashboard, or application. This starts the SSO process.
2. They'll be redirected to your authentication system to authenticate using the credentials they've been given for your platform.
3. After authentication is successful, they are then redirected to the IE platform to access their designated content.

In the background via the SSO protocol spec, the IdP will pass necessary account details to the SP making all account creation / updates seamless for the learner.

There is no need to send us a pre-determined list of learner details to pre-populate your IE client with learner accounts. All accounts are created and updated dynamically upon login using details passed during SSO mentioned above.

Because of this, all learners who need access to the IE content, must already exist in your system in some form. Typically this means their first name, last name and email address is stored. If these aren't available to be sent, then often our native registration (as opposed to SSO) is the better choice. At minimum, a unique ID is required, and any missing user details (first name, last name, and email) will be requested of the learner upon first access.

It's typically ideal to avoid this manual (non-automated) request for learner details to ensure data integrity (ie avoid human error), but can be a good enough solution in some circumstances.

:::note Things to consider
Do all users who need access to our content have access to authenticate in your IDP? What details are available on your end to send for learners?
:::
