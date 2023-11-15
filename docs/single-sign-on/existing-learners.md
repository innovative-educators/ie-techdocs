# Have existing learners?

Any time you'd like to change your configuration for a client with existing learners, and you'd like learner progress to maintain intact, you'll need to ensure that the `externalCustomerId` (the internal learner reference ID) remains the same for each learner. For SAML, that means the `Name_ID`, and for CAS, that means the `cas:user`.

## Options for moving an existing client (with learners) to SSO

### Fresh start for all learners
- We could work with your school to essentially free up the existing email addresses.
- The school would configure SSO for all learners using the college email address.
- All learners would have a fresh start.
- All previous progress would be attached to the unused accounts.

### Fresh start for non-college email addresses
- You can choose to configure SSO using official school college addresses.
- Any learner who registered with the correct college email would have their progress saved. (We recommend emailing current learners to update their account with their college email address prior to a specific date.)
- Any learner with a non-college email or (any typo or variation of the email) would have a new account created.
- Any learner with a new account created would lose previous progress and data would essentially start over.
