---
pagination_next: null
toc_max_heading_level: 2
---

# Using a Federated IdP?

Using a federated Identity Provider (district level, 3rd party etc) comes with some additional considerations. This document will help you understand what those considerations are and how to address them.

## Potential Issue
A unique `licenseId` is associated with each integration we do, and needs to be sent by the IdP for each learner during authentication. If the `licenseId` that is sent for a learner account ever changes, then the progress and courses that learner previously had access to will no longer be available.

### Why this might happen
If a learner with an account in a federated IdP moves between two or more schools that are both utilizing the IE platform, the IdP may send different a `licenseId` depending on which integration the learner is authenticating to.

## Recommended Solution
Having separate SP accounts for a learner per institution. This way, if a learner moves between schools, they will still have access to their previous progress and courses in their previous account. Or, if they attend more than one school at the same time, they will have access to their progress and courses in both accounts. In this scenario, the IdP must send a separate `email` and `externalCustomerId` (`NameId` or `cas:user`) for each SSO configuration. Any values will work so long as they comply with the rules for email and `externalCustomerId` outlined in the SSO configuration docs ([SAML](./configuring-saml/saml2#external-customer-id), [CAS](./configuring-cas/cas#external-customer-id)).

:::note email address as id only
The email address isn't utilized in any meaningful way by the SP, and for practical purposes can be considered just a second unique identifier for the learner.

If applicable, [Gmail Plus Addressing](https://support.google.com/a/users/answer/9282734?hl=en) can be utilized in combination with claim transforms to send unique and functional email addresses that utilize a single learner's inbox.
:::

## An Alternate Solution
A school could send all `licenseIds` associated with a learner. In this case, `licenseIds` wouldn't be a static value (used integration wide), but instead would rely on logic to determine which `licenseIds` to send given an individual learner. This logic could execute on the fly as part of the authentication process or could pre-generate `licenseIds` for each learner into the IdP where `licenseIds` would be pulled from a learner's associated data. This approach would require a custom integration and would be more complex to implement and maintain.