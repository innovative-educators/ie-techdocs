#### Requirements

- **Must be unique across the instance:**  The value of the `externalCustomerId` must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners.

- **Some good options include**:
  - Email Addresses
  - An ID random enough to be sufficiently collision resistant
  - Appending the school domain name to an ID like this `id130242@schooldomain.com`

#### Recommendations

- **An ID that doesn't change:** Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress.

  - **Email Address:** Sending an email as the `externalCustomerId` can occasionally cause this if learner's email is tied to their name in a way where any changes to their name causes a change to their email. That said, email addresses are used by many clients without much headache. Though it isn't the perfect solution, a majority of our clients consider it good enough.

  - **Unique IDs:** If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID like this `id130242@schooldomain.com`, has the benefits of being both unique and unchanging. This tends to be the optimal approach and is what we recommend first if available.