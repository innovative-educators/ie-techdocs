The Name Identifier is the unique ID that will identify SAML users coming from the IdP (identity provider).

### Requirements

- **Must be unique across the instance:** This value of the NameId must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners. Some good options include:

  - Email Addresses
  - Appending the school domain name to a name or ID
  - Or utilizing an ID random enough to sufficiently collision resistant

### Recommendations

- **Use an ID that doesn't change:** Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress.

  - **Email Address as NameId will suffice :** Sending an email as the NameId can cause the problem mentioned above when a learner's email changes due to a name change. That said, email addresses are used by many clients without much headache. Though it isn't the "perfect" option, we considered it "good enough".

  - **Unique IDs are a better option:** If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID, has the benefits of being both unique and unchanging.