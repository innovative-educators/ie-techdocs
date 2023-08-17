---
sidebar_position: 1
---

# Authentication and Accounts

## Logging in to the IE Platform
Once SSO has been successfully configured, learners will access the IE platform and their designated content by:

1. Clicking the login link (typically provided by IE) in an email, website, dashboard, or application. This starts the SSO process.
2. The learner will be redirected to your authentication system to login using the credentials they've been given for your platform.
3. After authentication is successful, the learner is automatically redirected to the IE platform to access their pre-designated IE content.

## Account Creation and Updates
When a learner is redirected back to IE from your authentication system, we receive the learner's account details from your system. If the learner already exists in our system, we update their account details with the information received from your system. If the learner does not exist in our system, we create a new account for them using the information received from your system. All of this happens automatically and behind the scenes and is invisible to the learner making for a seamless experience.

:::note
**There is no need to send us a pre-determined list of learner details** to populate your IE client with learner accounts – all accounts are created and updated dynamically upon authentication using details passed during SSO as mentioned above.
:::

## Requirements

### Learners must already exist in the IdP
Because of this dynamic account creation, **all learners who need access to the IE content, must already exist in your system in some form**. At best, this means they have accounts with first name, last name and email address, as these values are taken for account creation on our end. At minimum, a unique ID is required.

Any missing user details (first name, last name, and email) will be requested from the learner directly upon first authentication. It's typically ideal to avoid this manual (non-automated) request for learner details though to ensure data integrity (ie avoid human error), but it can be a good-enough solution for some circumstances.

:::note Things to consider
If first name, last name and email address aren't available to be sent from your IdP, have you considered if SSO is the right choice for you, as opposed to native registration?
:::
