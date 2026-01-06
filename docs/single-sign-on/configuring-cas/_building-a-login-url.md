Direct your users to login to your CAS server with the "service" query parameter set to the URI Encoded Service URL.

`https://<CAS Server Domain>/login`**`?service=<URI Encoded Service URL>`**

### To build this URL, follow these steps:
#### 1. Construct the Service URL

##### Start with the Base URL:
Start by constructing the base of the URL depending on which IE product you're configuring for. Combine the https protocol, IE product domain, and cas access path:

- `https://`[`<product-domain>`](/definition-of-terms#product-domain)`/access/cas`
- **Example**: [https:// **www.studentlingo.com** /access/cas](#)

##### Add License ID:
Next, you'll need to specify a License ID to connect the incoming student with your Client in our system. You can obtain your client's License ID from your IE representative. Treat this License ID as a secret, similar to a password.

Add a `studentLicenseId` query parameter and value to Base Service URL **(params are case sensitive)**:
- `https://`[`<product-domain>`](/definition-of-terms#product-domain)`/access/cas`**`?studentLicenseId=<License ID>`**
- **Example**: [https://www.studentlingo.com/access/cas **?studentLicenseId=5090b9e3-5542-4050-b863-8429fc03ad5b**](#)

{/* :::note
If you own your own instance (uncommon), you can skip this step.

If you've been granted admin privileges (uncommon), you will see a License ID when you click "Edit" on any sublicense. If you are not using sublicense functionality, you will see a License ID on the "Master License" tab. Only one license can be specified.
::: */}

##### Add Redirects (Optional):
You can optionally specify a URL of a page to redirect the user to after successful authentication. After the SP validates the ticket from your CAS server, it will grant the user access and direct them to the specified returnTo URL, or the student dashboard if no URL was provided.

To do this, add a `returnTo` query parameter and value to the URL **(params are case sensitive)**. Note: both a returnTo and a studentLicenseId can be specified within the same request:
- `https://`[`<product-domain>`](/definition-of-terms#product-domain)`/access/cas?studentLicenseId=<License ID>`**`&returnTo=<Return to URL>`**
- **Example** redirecting to the course catalog: [https://www.studentlingo.com/access/cas?studentLicenseId=5090b9e3-5542-4050-b863-8429fc03ad5b **&returnTo=https://www.studentlingo.org/catalog**](#)


#### 2. URI Encode the Service URL
Once you have a complete Service URL, it must be URI encoded before it can be added to the CAS login URL. This will ensure structural integrity during URL parsing.
- If the URL is: `https://www.studentlingo.com/access/cas?studentLicenseId=5090b9e3-5542-4050-b863-8429fc03ad5b`
- **Example**: [https **%3A%2F%2F** www.studentlingo.com **%2F** access **%2F** cas **%3F** studentLicenseId **%3D** 5090b9e3-5542-4050-b863-8429fc03ad5b](#)

#### 3. Add to CAS Login URL via Service Parameter
Lastly, add a `service` query parameter to the CAS Login URL and set its value to the URI encoded Service URL:
- `https://<CAS Server Domain>/login`**`?service=<URI Encoded Service URL>`**
- **Example**: [https://www.casserver.org/login **?service=https%3A%2F%2Fwww.studentlingo.com%2Faccess%2Fcas%3FstudentLicenseId%3D5090b9e3-5542-4050-b863-8429fc03ad5b**](#)