"use strict";(self.webpackChunkie_docs=self.webpackChunkie_docs||[]).push([[37],{9953:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),s=t(1151);function r(e){const n={code:"code",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h4,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Must be unique across the instance:"}),"  The value of the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Some good options include"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Email Addresses"}),"\n",(0,i.jsx)(n.li,{children:"An ID random enough to be sufficiently collision resistant"}),"\n",(0,i.jsxs)(n.li,{children:["Appending the school domain name to an ID like this ",(0,i.jsx)(n.code,{children:"id130242@schooldomain.com"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"recommendations",children:"Recommendations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"An ID that doesn't change:"})," Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Email Address:"})," Sending an email as the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," can occasionally cause this if learner's email is tied to their name in a way where any changes to their name causes a change to their email. That said, email addresses are used by many clients without much headache. Though it isn't the perfect solution, a majority of our clients consider it good enough."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unique IDs:"})," If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID like this ",(0,i.jsx)(n.code,{children:"id130242@schooldomain.com"}),", has the benefits of being both unique and unchanging. This tends to be the optimal approach and is what we recommend first if available."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},3827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>m,frontMatter:()=>h,metadata:()=>x,toc:()=>p});var i=t(5893),s=t(1151);function r(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Have a running Identity Provider (IdP)"})," that supports CAS SSO protocols to integrate with IE as the Service Provider (SP). ",(0,i.jsx)(n.a,{href:"../introduction#sso-support",children:"See docs for some specific IDPs here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#configuring-the-idp",children:"Configure your IdP server"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#configuring-the-sp",children:"Share your IdP Details"})})," with your IE representative so they can configure your client. For CAS this typically means the IE validation endpoint (aka CAS server url / serviceValidate endpoint)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#authentication",children:"Construct a Learner Login URL"})})," to your instance for students to use for authentication. You'll need a service URL provided by IE and potentially more depending on your circumstances."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#testing",children:"Test Authentication"})})," making configuration adjustments as needed. This entails you attempt logging in via SSO (Login URL provided by IE as needed) and your IE rep will consult the SP logs and make / suggest changes if required."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#redirects",children:"Share your SP Redirect URLs"})})," for a better user experience. With SSO enabled and accounts controlled by the IDP, learners have no need for the SP ",(0,i.jsx)(n.code,{children:"Logout"})," or ",(0,i.jsx)(n.code,{children:"Account"})," pages anymore. These pages will require redirection to equivalent pages in your system, so share redirect URLs with IE to configure."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Please Note",type:"caution",children:(0,i.jsxs)(n.p,{children:["Changing your SSO configuration for a client with ",(0,i.jsx)(n.strong,{children:"existing learners"})," comes with some additional challenges. ",(0,i.jsx)(n.a,{href:"../existing-learners",children:"See details here"}),"."]})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}function c(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Direct your users to login to your CAS server with the "service" query parameter set to the URI Encoded Service URL.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"https://<CAS Server Domain>/login"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"?service=<URI Encoded Service URL>"})})]}),"\n",(0,i.jsx)(n.h3,{id:"to-build-this-url-follow-these-steps",children:"To build this URL, follow these steps:"}),"\n",(0,i.jsx)(n.h4,{id:"1-construct-the-service-url",children:"1. Construct the Service URL"}),"\n",(0,i.jsx)(n.h5,{id:"start-with-the-base-url",children:"Start with the Base URL:"}),"\n",(0,i.jsx)(n.p,{children:"Start by constructing the base of the URL depending on which IE product you're configuring for. Combine the https protocol, IE product domain, and cas access path:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/cas"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),": ",(0,i.jsxs)(n.a,{href:"#",children:["https://",(0,i.jsx)(n.strong,{children:"www.studentlingo.com"}),"/access/cas"]})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"add-license-id",children:"Add License ID:"}),"\n",(0,i.jsx)(n.p,{children:"Next, you'll need to specify a License ID to connect the incoming student with your Client in our system. You can obtain your client's License ID from your IE representative. Treat this License ID as a secret, similar to a password."}),"\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"licenseId"})," query parameter and value to Base Service URL ",(0,i.jsx)(n.strong,{children:"(params are case sensitive)"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/cas"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"?licenseId=<License ID>"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),": ",(0,i.jsx)(n.a,{href:"#",children:"https://www.studentlingo.com/access/cas**?licenseId=5090b9e3-5542-4050-b863-8429fc03ad5b**"})]}),"\n"]}),"\n","\n",(0,i.jsx)(n.h5,{id:"add-redirects-optional",children:"Add Redirects (Optional):"}),"\n",(0,i.jsx)(n.p,{children:"You can optionally specify a URL of a page to redirect the user to after successful authentication. After the SP validates the ticket from your CAS server, it will grant the user access and direct them to the specified returnTo URL, or the student dashboard if no URL was provided."}),"\n",(0,i.jsxs)(n.p,{children:["To do this, add a ",(0,i.jsx)(n.code,{children:"returnTo"})," query parameter and value to the URL ",(0,i.jsx)(n.strong,{children:"(params are case sensitive)"}),". Note: both a returnTo and a licenseId can be specified within the same request:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/cas?licenseId=<License ID>"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"&returnTo=<Return to URL>"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"})," redirecting to the course catalog: ",(0,i.jsx)(n.a,{href:"#",children:"https://www.studentlingo.com/access/cas?licenseId=5090b9e3-5542-4050-b863-8429fc03ad5b**&returnTo=https://www.studentlingo.org/catalog**"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2-uri-encode-the-service-url",children:"2. URI Encode the Service URL"}),"\n",(0,i.jsx)(n.p,{children:"Once you have a complete Service URL, it must be URI encoded before it can be added to the CAS login URL. This will ensure structural integrity during URL parsing."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the URL is: ",(0,i.jsx)(n.code,{children:"https://www.studentlingo.com/access/cas?licenseId=5090b9e3-5542-4050-b863-8429fc03ad5b"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),": ",(0,i.jsxs)(n.a,{href:"#",children:["https**%3A%2F%2F",(0,i.jsx)(n.strong,{children:"www.studentlingo.com"}),"%2F",(0,i.jsx)(n.strong,{children:"access"}),"%2F",(0,i.jsx)(n.strong,{children:"cas"}),"%3F",(0,i.jsx)(n.strong,{children:"licenseId"}),"%3D**5090b9e3-5542-4050-b863-8429fc03ad5b"]})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"3-add-to-cas-login-url-via-service-parameter",children:"3. Add to CAS Login URL via Service Parameter"}),"\n",(0,i.jsxs)(n.p,{children:["Lastly, add a ",(0,i.jsx)(n.code,{children:"service"})," query parameter to the CAS Login URL and set its value to the URI encoded Service URL:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://<CAS Server Domain>/login"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"?service=<URI Encoded Service URL>"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),": ",(0,i.jsx)(n.a,{href:"#",children:"https://www.casserver.org/login**?service=https%3A%2F%2Fwww.studentlingo.com%2Faccess%2Fcas%3FlicenseId%3D5090b9e3-5542-4050-b863-8429fc03ad5b**"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}var d=t(9953),l=t(5754);const h={sidebar_position:7},u="Configuring CAS (2.0 / 3.0)",x={id:"single-sign-on/configuring-cas/cas",title:"Configuring CAS (2.0 / 3.0)",description:"For clarification on terms in these docs, please refer to the Definition of Terms page",source:"@site/docs/single-sign-on/configuring-cas/cas.mdx",sourceDirName:"single-sign-on/configuring-cas",slug:"/single-sign-on/configuring-cas/cas",permalink:"/single-sign-on/configuring-cas/cas",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/single-sign-on/configuring-cas/cas.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Configuring SAML 2.0",permalink:"/single-sign-on/configuring-saml/saml2"},next:{title:"Have existing learners?",permalink:"/single-sign-on/existing-learners"}},g={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Implementation Overview",id:"implementation-overview",level:2},{value:"Configuring your SP client",id:"configuring-the-sp",level:2},{value:"What IE needs from you",id:"what-ie-needs-from-you",level:3},{value:"Configuring your IdP server",id:"configuring-the-idp",level:2},{value:"Configure the externalCustomerID",id:"external-customer-id",level:3},{value:"Configure Attributes",id:"configure-attributes",level:3},{value:"Example",id:"example",level:4},{value:"Learner Access Restrictions",id:"learner-access-restrictions",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Testing Authentication",id:"testing",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuring-cas-20--30",children:"Configuring CAS (2.0 / 3.0)"}),"\n",(0,i.jsx)(n.admonition,{title:"info",type:"note",children:(0,i.jsxs)(n.p,{children:["For clarification on terms in these docs, please refer to the ",(0,i.jsx)(n.a,{href:"../../definition-of-terms",children:"Definition of Terms"})," page"]})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"In many cases the CAS configuration for the SP requires only a few key pieces of information to set up basic authentication. The IdP may require more in-depth configuration in order to meet the needs of your integration.  You will need to refer to your IdP documentation for any advanced configuration. Because this configuration can differ from IdP to IdP, we are unable to provide specific instructions for every IdP."}),"\n",(0,i.jsx)(n.h2,{id:"implementation-overview",children:"Implementation Overview"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-sp",children:"Configuring your SP client"}),"\n",(0,i.jsx)(n.h3,{id:"what-ie-needs-from-you",children:"What IE needs from you"}),"\n",(0,i.jsx)(n.p,{children:"Please provide your IE representative the following, so they can configure your SP client."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"serviceValidate endpoint"})," for your CAS server."]}),"\n",(0,i.jsxs)(n.p,{children:["If your CAS server is available at ",(0,i.jsx)(n.a,{href:"https://casserver.org/",children:"https://casserver.org/"}),", then your CAS serviceValidate endpoint is most likely:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://casserver.org/cas/serviceValidate",children:"https://casserver.org/cas/serviceValidate"})," for CAS 2.0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://casserver.org/cas/p3/serviceValidate",children:"https://casserver.org/cas/p3/serviceValidate"})," for CAS 3.0"]}),"\n"]}),"\n","\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Account Redirect URLs"})," Once SSO is configured, there is no need for the Login/Logout/Register/Account pages on the SP side anymore. IE will redirect the Login/Register pages to your new SSO link if able, but the ",(0,i.jsx)(n.strong,{children:"Account Logout"})," and ",(0,i.jsx)(n.strong,{children:"Account Details"})," pages need an equivalent or relevant page on the IdP side to redirect to."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Date to begin enforcing SSO"})," Once SSO is complete, when would you like to turn off (redirect) native registration. This is mostly relevant for clients who already have learners utilizing native registration. If you don't have any learners using native registration, this redirect can be configured immediately."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-idp",children:"Configuring your IdP server"}),"\n",(0,i.jsx)(n.h3,{id:"external-customer-id",children:"Configure the externalCustomerID"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cas:user"})," is the unique ID that will identify CAS users coming from the IdP. This value is stored internally as ",(0,i.jsx)(n.code,{children:"externalCustomerId"}),", and when a learner authenticates, it is used to determine whether to connect them to their pre-existing account or provision them a new one, if this is the learner's first time authenticating. The attributes passed by the IdP will be used to create the new account, or if connecting to a pre-existing account, the attributes passed by the IdP will be used to update it."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,i.jsxs)(n.p,{children:["To avoid account clashes, the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," value must be unique amongst ",(0,i.jsx)(n.strong,{children:"all learners"})," from ",(0,i.jsx)(n.strong,{children:"all clients"})," in the same instance. With sometimes hundreds of clients in the same instance, this can mean 100s of thousands of users. See below for recommendations on how to configure this value."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In WSO2 the ",(0,i.jsx)(n.code,{children:"cas:user"})," is controlled by the field (Subject Claim URI)"]})}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"configure-attributes",children:"Configure Attributes"}),"\n",(0,i.jsx)(n.p,{children:"We support the following attributes that can be mapped from your IdP. The attributes returned in the authentication request, as well as the attribute names, will vary depending on the IdP. Check with your IdP to determine the available attributes."}),"\n",(0,i.jsx)(n.p,{children:"The following list of attributes are available for mapping to any attribute returned from your IdP."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required?"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"firstname"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The first name of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"lastname"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The last name of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"email"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The email address of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref1"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user in reports. examples: role, department, major, title, year, studentId"}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref2"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user..."}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref3"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user..."}),(0,i.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following is an example of a successful CAS ticket validation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<cas:serviceResponse xmlns:cas="http://www.yale.edu/tp/cas">\n  <cas:authenticationSuccess>\n    <cas:user>test</cas:user>\n    <cas:attributes>\n      <cas:firstname>bob</cas:firstname>\n      <cas:lastname>jones</cas:lastname>\n      <cas:email>bobjones@example.org</cas:email>\n    </cas:attributes>\n  </cas:authenticationSuccess>\n</cas:serviceResponse>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"learner-access-restrictions",children:"Learner Access Restrictions"}),"\n",(0,i.jsx)(n.p,{children:"All access restrictions, or lack there of, are handled on the IdP side of things. So if applicable, make sure sufficent role permissions have been granted to the learners who'll need access to the IE platform before they need it."}),"\n",(0,i.jsx)(n.p,{children:"From IE's perspective, there's not much downside to providing access to all accounts in the IdP side (ie no restrictions) as learners who need access to the IE content may change, and any learners who no longer need access or who never needed it will typically avoid."}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing Authentication"}),"\n",(0,i.jsx)(n.p,{children:"It's important to test the authentication flow before going live. This will ensure that the integration has been configured successfully before learners attempt to access their content."}),"\n",(0,i.jsx)(n.p,{children:"To test, simply"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Authenticate"})," from an incognito browser, using the SP login URL to authenticate into the IE platform through SSO."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notify your IE representative"})," Once notified, IE will consult the SSO logs and verify the correct user details are being sent over."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If authenitcation was successful, you should be redirected to the IE platform and logged in. If you are not logged in, and are still located on the IdP side, there's most likely an issue with the configuration on the IdP side."}),"\n",(0,i.jsx)(n.p,{children:"If on the other hand you are seeing an error, notify your IE representative for next steps. Please include any error messages you see, as well as the page URL you are on."})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},5754:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),s=t(1151);function r(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"Account Redirect URL details"}),(0,i.jsx)(n.p,{children:"Here you'll find a reference for the redirects that need to be implemented after SSO is complete."}),(0,i.jsx)(n.h3,{id:"what-are-these-redirects",children:"What are these redirects?"}),(0,i.jsx)(n.p,{children:"With SSO enabled for your client, learners have no need for the Login, Register or Account pages on the SP side. These authentication and account pages should be redirected to equivalent or relevant pages on the IdP side."}),(0,i.jsx)(n.p,{children:"You can provide the desired redirect URLs to your IE representative to configure, unless you have access to your own instance settings (uncommon), in which case you could configure them yourself."}),(0,i.jsx)(n.h4,{id:"account-details-url-required",children:"Account Details URL (required)"}),(0,i.jsx)(n.p,{children:"This redirects the account details button (on the account page) to the URL provided."}),(0,i.jsx)(n.p,{children:"We recommend this URL to point to a corresponding page on the IdP side where learners can adjust their account or profile settings, such as name, email, or password if available. With SSO enabled, any changes made on the IdP side will be reflected on the SP side the next time the user authenticates."}),(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"https://www.yourdomain.com/settings"})]}),(0,i.jsx)(n.h4,{id:"account-logout-url-required",children:"Account Logout URL (required)"}),(0,i.jsx)(n.p,{children:"This redirects the logout button (in the profile dropdown menu) to the URL provided."}),(0,i.jsx)(n.p,{children:"This, on it's own, only logs the learner out of the SP platform and not out of SSO or the IdP side. For circumstances like a shared computer terminal, it's important that learners know they aren't technically logged out of their SSO accounts. A good place to redirect learners for this would be something like an account dashboard, or a URL that logs them out of SSO if available."}),(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"https://www.yourdomain.com/logout"})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);