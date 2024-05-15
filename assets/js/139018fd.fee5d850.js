"use strict";(self.webpackChunkie_techdocs=self.webpackChunkie_techdocs||[]).push([[639],{9553:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),r=t(1151);function s(e){const n={code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"With SSO enabled for your client, learners will have no need for the Login, Register or Account pages on the SP side. These pages should be redirected to relevant pages on the IdP side. Please provide the following types of redirect URLs to your IE representative to configure."}),"\n",(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"Account Details URL (required)"}),(0,i.jsx)(n.h4,{id:"usage",children:"Usage:"}),(0,i.jsx)(n.p,{children:'The account details page is replaced by an "Account Details" button which links to the URL provided.'}),(0,i.jsx)(n.h4,{id:"details",children:"Details:"}),(0,i.jsx)(n.p,{children:"We recommend this URL to point to a corresponding page on the IdP side where learners can adjust their account or profile settings, such as name, email, or password if available. With SSO enabled, any changes made on the IdP side will be reflected on the SP side the next time the user authenticates."}),(0,i.jsx)(n.h4,{id:"types-of-pages-on-the-idp-side-to-consider",children:"Types of pages on the IdP side to consider:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Profile Settings Page"}),"\n",(0,i.jsx)(n.li,{children:"Password Reset Page"}),"\n",(0,i.jsx)(n.li,{children:"Home Page"}),"\n"]}),(0,i.jsx)(n.h4,{id:"example",children:"Example:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://www.yourdomain.com/settings"})})]}),"\n",(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"Account Logout URL (required)"}),(0,i.jsx)(n.h4,{id:"usage-1",children:"Usage:"}),(0,i.jsx)(n.p,{children:"This redirects the logout button (in the profile dropdown menu) to the URL provided."}),(0,i.jsx)(n.h4,{id:"details-1",children:"Details:"}),(0,i.jsx)(n.p,{children:"This, on it's own, only logs the learner out of the SP platform and not out of SSO or the IdP side. For circumstances like a shared computer terminal, it's important that learners know they aren't logged out of IdP accounts when they log out of the SP platform via this URL."}),(0,i.jsx)(n.h4,{id:"types-of-pages-on-the-idp-side-to-consider-1",children:"Types of pages on the IdP side to consider:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Home Page"}),"\n",(0,i.jsx)(n.li,{children:"Internal Dashboard Page"}),"\n",(0,i.jsx)(n.li,{children:"A Logout URL (if available) to log the user out of the IdP"}),"\n",(0,i.jsx)(n.li,{children:"Specific Page letting learners know they're not logged out of their IdP yet (if applicable)"}),"\n"]}),(0,i.jsx)(n.h4,{id:"example-1",children:"Example:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://www.yourdomain.com/logout"})})]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},9953:(e,n,t)=>{t.d(n,{ZP:()=>o});var i=t(5893),r=t(1151);function s(e){const n={code:"code",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h4,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Must be unique across the instance:"}),"  The value of the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," must be unique across all learners of every client in an instance. This means that if you share an instance with other clients (almost everyone), then your ID must not clash with other client's learners."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Some good options include"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Email Addresses"}),"\n",(0,i.jsx)(n.li,{children:"An ID random enough to be sufficiently collision resistant"}),"\n",(0,i.jsxs)(n.li,{children:["Appending the school domain name to an ID like this ",(0,i.jsx)(n.code,{children:"id130242@schooldomain.com"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"recommendations",children:"Recommendations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"An ID that doesn't change:"})," Since this value used to sync learner to their accounts or create a new account if one doesn't exist for a learner, it's recommended that this value be from a source that doesn't change. If the value does change, then the learner will receive a fresh account upon authenticating and will lose all previous progress."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Email Address:"})," Sending an email as the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," can occasionally cause this if learner's email is tied to their name in a way where any changes to their name causes a change to their email. That said, email addresses are used by many clients without much headache. Though it isn't the perfect solution, a majority of our clients consider it good enough."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unique IDs:"})," If available, an ID with sufficient randomness to be collision resistant, or appending a domain or school name to less random ID like this ",(0,i.jsx)(n.code,{children:"id130242@schooldomain.com"}),", has the benefits of being both unique and unchanging. This tends to be the optimal approach and is what we recommend first if available."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},2816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>p,toc:()=>x});var i=t(5893),r=t(1151),s=t(4866),o=t(5162),a=t(9953),l=t(9553);function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Have a running Identity Provider (IdP)"})," that supports SAML SSO protocols to integrate with IE as the Service Provider (SP). ",(0,i.jsx)(n.a,{href:"../introduction#sso-support",children:"See docs for some specific IDPs here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#configuring-the-sp",children:"Share your IdP Details"})})," with your IE representative so they can configure your client. Typically these are shared via the ",(0,i.jsx)("span",{style:{whiteSpace:"nowrap"},children:(0,i.jsx)(n.code,{children:"IdP metadata XML file"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#configuring-the-idp",children:"Configure your IdP server"})})," with the SP SAML configuration details provided by IE. Typically these are shared via the ",(0,i.jsx)("span",{style:{whiteSpace:"nowrap"},children:(0,i.jsx)(n.code,{children:"SP metadata XML file"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#testing",children:"Test Authentication"})})," making configuration adjustments as needed. This entails you attempt logging in via SSO (Login URL provided by IE as needed) and your IE rep will consult the SP logs and make / suggest changes if required."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#redirect-urls",children:"Share your SP Redirect URLs"})})," for a better user experience. With SSO enabled and accounts controlled by the IDP, learners have no need for the SP ",(0,i.jsx)(n.code,{children:"Logout"})," or ",(0,i.jsx)(n.code,{children:"Account"})," pages anymore. These pages will require redirection to equivalent pages in your system, so share redirect URLs with IE to configure."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Have Existing Learners?",type:"caution",children:(0,i.jsxs)(n.p,{children:["Changing your SSO configuration for a client with ",(0,i.jsx)(n.strong,{children:"existing learners"})," comes with some additional challenges. ",(0,i.jsx)(n.a,{href:"../existing-learners",children:"See details here"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Using a Federated IdP?",type:"caution",children:(0,i.jsxs)(n.p,{children:["Using a federated Identity Provider (district level, 3rd party etc) comes with some additional considerations. ",(0,i.jsx)(n.a,{href:"../federated-idp",children:"See details here"}),"."]})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}const h={sidebar_position:1},u="Configuring SAML 2.0",p={id:"single-sign-on/configuring-saml/saml2",title:"Configuring SAML 2.0",description:"For clarification on terms in these docs, please refer to the Definition of Terms page",source:"@site/docs/single-sign-on/configuring-saml/saml2.mdx",sourceDirName:"single-sign-on/configuring-saml",slug:"/single-sign-on/configuring-saml/saml2",permalink:"/single-sign-on/configuring-saml/saml2",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/single-sign-on/configuring-saml/saml2.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Single Sign On (SSO)",permalink:"/single-sign-on/introduction"},next:{title:"Configuring CAS (2.0 / 3.0)",permalink:"/single-sign-on/configuring-cas/cas"}},m={},x=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation Overview",id:"implementation-overview",level:2},{value:"Configuring your SP client",id:"configuring-the-sp",level:2},{value:"What IE needs from you",id:"what-ie-needs-from-you",level:3},{value:"Configuring your IdP server",id:"configuring-the-idp",level:2},{value:"What you need from IE",id:"what-you-need-from-ie",level:3},{value:"Configure the externalCustomerID",id:"external-customer-id",level:3},{value:"Configure Attributes",id:"configure-attributes",level:3},{value:"LicenseId as a Static Attribute",id:"licenseid-as-a-static-attribute",level:4},{value:"Learner Access Restrictions",id:"learner-access-restrictions",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Testing Authentication",id:"testing",level:2},{value:"Share your SP Redirect URLs",id:"redirect-urls",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuring-saml-20",children:"Configuring SAML 2.0"}),"\n",(0,i.jsx)(n.admonition,{title:"info",type:"note",children:(0,i.jsxs)(n.p,{children:["For clarification on terms in these docs, please refer to the ",(0,i.jsx)(n.a,{href:"../../definition-of-terms",children:"Definition of Terms"})," page"]})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"In many cases the SAML 2.0 configuration for the SP requires only a few key pieces of information to set up basic authentication. The IdP may require more in-depth configuration in order to meet the needs of your integration (e.g. Attribute mappings, encrypted assertions, etc).  You will need to refer to your IdP documentation for any advanced configuration. Because this configuration can differ from IdP to IdP, we are unable to provide specific instructions for every IdP."}),"\n",(0,i.jsx)(n.h2,{id:"implementation-overview",children:"Implementation Overview"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-sp",children:"Configuring your SP client"}),"\n",(0,i.jsx)(n.h3,{id:"what-ie-needs-from-you",children:"What IE needs from you"}),"\n",(0,i.jsx)(n.p,{children:"Please provide your IE representative the following, so they can configure your SP client."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"IdP XML Metadata file"})," This tends to be the easiest way to share the details required for SP configuration. If more convienient, you may provide these details individually instead."]}),"\n"]}),"\n",(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"Required IdP Metadata details"}),(0,i.jsxs)(n.p,{children:["These settings should be retrieved from your IdP, and can often be found in the administration console (if applicable) or extracted from the ",(0,i.jsx)(n.code,{children:"IdP Metadata XML"})," of your provider."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IdP Single Sign-on URL:"})," TI supports SP-initiated SSO using the HTTP-REDIRECT binding."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IdP Single Logout URL:"})," Single logout is not currently supported, but you may still enter this value here for future use."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"IdP X.509 Certificate:"})," The public key certificate from the IdP. This is required for security purposes in order to validate authentication requests. The X.509 Certificate should be entered in PEM format with a header. When entered, it should start with ",(0,i.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"}),". If it does not, you can format the X.509 certificate with an ",(0,i.jsx)(n.a,{href:"https://www.samltool.com/format_x509cert.php",children:"external tool"}),"."]}),"\n"]}),"\n"]})]}),"\n","\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Account Redirect URLs"})," Once SSO is configured, there is no need for the Login/Logout/Register/Account pages on the SP side anymore. IE will redirect the Login/Register pages to your new SSO link, but the ",(0,i.jsx)(n.strong,{children:"Account Logout"})," and ",(0,i.jsx)(n.strong,{children:"Account Details"})," pages need an equivalent or relevant page on the IdP side to redirect to."]}),"\n"]}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Date to begin enforcing SSO"})," Once SSO is complete, when would you like to turn off (redirect) native registration. This is mostly relevant for clients who already have learners utilizing native registration. If you don't have any learners using native registration, this redirect can be configured immediately."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-idp",children:"Configuring your IdP server"}),"\n",(0,i.jsx)(n.p,{children:"Once the settings have been added to your instance client or directly to your instance (not common), you will also need to register the SP with your IdP. This process is different for each provider."}),"\n",(0,i.jsx)(n.h3,{id:"what-you-need-from-ie",children:"What you need from IE"}),"\n",(0,i.jsx)(n.p,{children:"Generally you will need the following information which can be obtained for your IE representative."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"SP Metadata XML file"})," which includes the relevant configuration details to use. Often IdP systems can import this file to save you the hassle of configuring manually."]}),"\n"]}),"\n",(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"Required SP Metadata details"}),(0,i.jsx)(n.p,{children:"The easiest way to get these details is directly from the SP Metadata XML file you received from IE. If more convienient, you can request these details individually:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Assertion Consumer Service (ACS) URL (also called the Single Sign-on URL):"})," The endpoint that receives HTTP-POST bindings from the IdP. The ACS URL can be found within the TI SP Metadata. If you have to type it in manually, it will be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/consumer/<client-slug>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Or ",(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/consumer"})," if in your own instance (uncommon)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Entity Id:"})," unique identifier for your TI instance SP. The Entity Id can be found within the TI SP Metadata. If you have to type it in manually, it will be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/metadata/<client-slug>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Or ",(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/metadata"})," if in your own instance (uncommon)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"X.509 Certificate:"})," TI's public certificate for signing and encryption. This certificate can be found within the TI SP Metadata. If you have to type it in manually, see the appendix of this article."]}),"\n"]}),"\n"]})]}),"\n","\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"licenseId"})," for your specific IE client. (this is a static attribute that IE will provide that needs to be passed for each user)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"external-customer-id",children:"Configure the externalCustomerID"}),"\n",(0,i.jsxs)(n.p,{children:["The Name Identifier or ",(0,i.jsx)(n.code,{children:"NAME_ID"})," is the unique ID that will identify SAML users coming from the IdP. This value is stored internally as ",(0,i.jsx)(n.code,{children:"externalCustomerId"}),", and when a learner authenticates, it is used to determine whether to connect them to their pre-existing account or provision them a new one, if this is the learner's first time authenticating. The attributes passed by the IdP will be used to create the new account, or if connecting to a pre-existing account, the attributes passed by the IdP will be used to update it."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,i.jsxs)(n.p,{children:["To avoid account clashes, the ",(0,i.jsx)(n.code,{children:"externalCustomerId"})," value must be unique amongst ",(0,i.jsx)(n.strong,{children:"all learners"})," from ",(0,i.jsx)(n.strong,{children:"all clients"})," in the same instance. With sometimes hundreds of clients in the same instance, this can mean 100s of thousands of users. See below for recommendations on how to configure this value."]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Claim"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required?"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NAME_ID"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Instance wide unique identifier for the learner"}),(0,i.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../introduction#sso-support",children:"Check the other SSO integrations we support for more specific approaches to configuring the NAME_ID."})})}),"\n",(0,i.jsx)(n.h3,{id:"configure-attributes",children:"Configure Attributes"}),"\n",(0,i.jsx)(n.p,{children:"We support the following attributes that can be mapped from your IdP. The attributes returned in the authentication request, as well as the attribute names, will vary depending on the IdP. Check with your IdP to determine the available attributes."}),"\n",(0,i.jsx)(n.p,{children:"The following list of attributes are available for mapping to any attribute returned from your IdP."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required?"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"firstname"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The first name of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"lastname"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The last name of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"email"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"The email address of the learner"}),(0,i.jsx)(n.td,{children:"Recommended"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"licenseIds"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsxs)(n.td,{children:["One or more license IDs to associate the content with the learner. This is a single value that must be sent for all learners and is best configured as a ",(0,i.jsx)(n.strong,{children:"static attribute"}),".\xa0\xa0",(0,i.jsx)(n.a,{href:"#licenseid-as-a-static-attribute",children:"See below for more detials"}),". ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"* licenseIds is requied except in a single client instance (not common)"]}),(0,i.jsx)(n.td,{children:"Required*"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref1"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user in reports. examples: role, department, major, title, year, studentId"}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref2"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user..."}),(0,i.jsx)(n.td,{children:"Optional"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref3"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"Data to be associated with the user..."}),(0,i.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"For learners that should be associated with a client (almost every case), you must include one or more licenseIds in the SAML attributes."}),"\n",(0,i.jsx)(n.h4,{id:"licenseid-as-a-static-attribute",children:"LicenseId as a Static Attribute"}),"\n",(0,i.jsxs)(n.p,{children:["To avoid the need for an extra column for every user in your system, you can utilize a ",(0,i.jsx)(n.code,{children:"static attribute"})," to send over the required ",(0,i.jsx)(n.code,{children:"licenseIds"})," if your IdP allows configuring one. This is set up in your configuration as opposed to a table somewhere. The specific implementation will depend your IdP, but below is an example in SimpleSAMLphp that may or may not be directly adaptable to your specific SAML IDP."]}),"\n",(0,i.jsxs)(t,{className:"alert alert--secondary",children:[(0,i.jsx)("summary",{children:"A SimpleSAMLphp Example"}),(0,i.jsx)(n.p,{children:"This is a potential solution to sending the required licenceId in the SAML payload without needing to adjust user records in SimplePHP."}),(0,i.jsxs)(n.p,{children:['The recommended strategy is to use an "Auth Proc Filter" (',(0,i.jsx)(n.a,{href:"https://simplesamlphp.org/docs/stable/simplesamlphp-authproc",children:"documentation here"}),")."]}),(0,i.jsxs)(n.p,{children:["From those docs, modify ",(0,i.jsx)(n.code,{children:"saml20-sp-remote.php"})," and in the existing 'authproc' => array section (add it missing), add static attributes using the core",":AttributeAdd"," functionality like so:"]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(o.Z,{value:"basic",label:"Basic Example",default:!0,children:[(0,i.jsx)(n.p,{children:"A basic example might look like:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="saml20-sp-remote.php"',children:"'authproc' => array(\n  // Add STATIC Attributes here...\n  30 => array(\n    'class' => 'core:AttributeAdd',\n    'LICENSE_ID_NAME_HERE' => array('ACTUAL_LICENSE_ID_HERE')\n  ),\n"})})]}),(0,i.jsxs)(o.Z,{value:"comprehensive",label:"Comprehensive Example",children:[(0,i.jsx)(n.p,{children:"A more comprehensive example might look like:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:'title="saml20-sp-remote.php"',children:"$metadata['https://example.com'] = array(\n  'AssertionConsumerService' => 'https://example.com/',\n  'SingleLogoutService' => 'https://example.com/',\n  'simplesaml.attributes' => true,\n  'attributes' => array('mail', 'givenname', 'sn', 'memberOf'),\n  'authproc' => array(\n    // Add STATIC Attributes here...\n    1 => array(\n      'class' => 'core:AttributeAdd',\n      'LICENSE_ID_NAME_HERE' => array('ACTUAL_LICENSE_ID_HERE'),\n    ),\n  )\n);\n"})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"../introduction#sso-support",children:"Please refer to our other SSO integration support for other approaches to this configuration."})})}),"\n",(0,i.jsx)(n.h3,{id:"learner-access-restrictions",children:"Learner Access Restrictions"}),"\n",(0,i.jsx)(n.p,{children:"All access restrictions, or lack there of, are handled on the IdP side of things. So if applicable, make sure sufficent role permissions have been granted to the learners who'll need access to the IE platform before they need it."}),"\n",(0,i.jsx)(n.p,{children:"From IE's perspective, there's not much downside to providing access to all accounts in the IdP side (ie no restrictions) as learners who need access to the IE content may change, and any learners who no longer need access or who never needed it will typically avoid."}),"\n",(0,i.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"Logins with IE are SP-initiated SSO with SAML, meaning that the login flow begins on the the SP platform."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In order to log a user into their IE client from an external system, you can direct learners to the following URL as a link, a dashboard button, or however else you see fit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/login/<client-slug>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Your ",(0,i.jsx)(n.code,{children:"<client-slug>"})," will be provided by IE. There will be none if you have your own instance (not common)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once a user visits this page, they will be redirected to your IdP for authentication. After authentication is successful, the IdP will send the user back to IE platform with a SAML Response that includes any attributes per the configuration. The user will then be logged into thier SP client and will have access to the content that has been provisioned per the ",(0,i.jsx)(n.code,{children:"licenseId"})," configured in their attributes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Optionally, a ",(0,i.jsx)(n.code,{children:"redirectTo"})," query parameter can be added to the login URL to redirect a learner after authentication"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://"}),(0,i.jsx)(n.a,{href:"/definition-of-terms#product-domain",children:(0,i.jsx)(n.code,{children:"<product-domain>"})}),(0,i.jsx)(n.code,{children:"/access/saml/login/<client-slug>"}),(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"?returnTo=<redirect-path>"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"IdP-initiated Login and Single IdP Logout are not supported at this time. Logging out currently logs the learner off the platform only."})}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing Authentication"}),"\n",(0,i.jsx)(n.p,{children:"It's important to test the authentication flow before going live. This will ensure that the integration has been configured successfully before learners attempt to access their content."}),"\n",(0,i.jsx)(n.p,{children:"To test, simply"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Authenticate"})," from an incognito browser, using the SP login URL to authenticate into the IE platform through SSO."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notify your IE representative"})," Once notified, IE will consult the SSO logs and verify the correct user details are being sent over."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"redirect-urls",children:"Share your SP Redirect URLs"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If authenitcation was successful, you should be redirected to the IE platform and logged in. If you are not logged in, and are still located on the IdP side, there's most likely an issue with the configuration on the IdP side."}),"\n",(0,i.jsx)(n.p,{children:"If on the other hand you are seeing an error, notify your IE representative for next steps. Please include any error messages you see, as well as the page URL used to authenticate and the page URL of the error."})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var i=t(6010);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>I});var i=t(7294),r=t(6010),s=t(2466),o=t(6550),a=t(469),l=t(1980),d=t(7392),c=t(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,h]=m({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function y(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==i&&(d(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function I(e){const n=(0,f.Z)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);