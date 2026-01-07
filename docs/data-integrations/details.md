# FAQs

This page contains additional details about our webhook and SFTP data integrations.

## How course title changes affect payloads
The following refer to how changing different titles in the IE backend affects the data sent via webhooks and SFTP.
- Changing the `Session Title` will update both:
  - The title sent in the webhook/SFTP payload
  - The title displayed in the backend
- Changing the title via `Edit Catalog Settings > Title` will update:
  - Only the title displayed to the user
  - It will not update the title sent in the webhook/SFTP payload (webhook/SFTP payloads continue to use the original title)
- In both cases above, the `notifiableId` remains unchanged
  - The `notifiableId` only changes when a new course is created
