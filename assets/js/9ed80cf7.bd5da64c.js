"use strict";(self.webpackChunkie_techdocs=self.webpackChunkie_techdocs||[]).push([[129],{2961:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=i(5893),t=i(1151),r=i(4511);const d={sidebar_position:5,sidebar_label:"with PortalGuard"},a="SAML with PortalGuard",l={id:"single-sign-on/configuring-saml/portalguard",title:"SAML with PortalGuard",description:"This supplements the Configuring your IdP server portion of the Configuring SAML 2.0 docs using PortalGuard as your identity provider (IdP). Please ensure you've already read and understand the concepts in the Configuring SAML 2.0 documentation before continuing.",source:"@site/docs/single-sign-on/configuring-saml/portalguard.md",sourceDirName:"single-sign-on/configuring-saml",slug:"/single-sign-on/configuring-saml/portalguard",permalink:"/single-sign-on/configuring-saml/portalguard",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/single-sign-on/configuring-saml/portalguard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"with PortalGuard"},sidebar:"tutorialSidebar",previous:{title:"with ADFS",permalink:"/single-sign-on/configuring-saml/adfs"},next:{title:"Configuring CAS (2.0 / 3.0)",permalink:"/single-sign-on/configuring-cas/cas"}},c={},o=[{value:"Configure the SAML IdP",id:"configure-the-saml-idp",level:2},{value:"Create the Relying Party Trust",id:"create-the-relying-party-trust",level:3},{value:"Releasing user attributes",id:"releasing-user-attributes",level:3},{value:"Example -\xa0One\xa0Version of PortalGuard",id:"example--oneversion-of-portalguard",level:2},{value:"Example - Another Version of PortalGuard",id:"example---another-version-of-portalguard",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"saml-with-portalguard",children:"SAML with PortalGuard"}),"\n",(0,s.jsx)(n.admonition,{title:"This is a Supplementry Guide",type:"info",children:(0,s.jsxs)(n.p,{children:["This supplements the ",(0,s.jsx)(n.a,{href:"./saml2#configuring-the-idp",children:"Configuring your IdP server"})," portion of the ",(0,s.jsx)(n.a,{href:"./saml2",children:"Configuring SAML 2.0"})," docs using PortalGuard as your identity provider (IdP). Please ensure you've already read and understand the concepts in the ",(0,s.jsx)(n.a,{href:"./saml2",children:"Configuring SAML 2.0"})," documentation before continuing."]})}),"\n",(0,s.jsx)(n.p,{children:"PortalGuard has support for SAML 2 integrations. Integrating PortalGuard with IE's applications requires configuration in PortalGuard and also in the specific IE application that is being used. If more than one IE application is being used, then the integration needs to be completed for each application."}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-saml-idp",children:"Configure the SAML IdP"}),"\n",(0,s.jsx)(n.p,{children:"PortalGuard will be acting as the SAML identity provider (IdP). To configure a PortalGuard Relying Party Trust, some information from the IE application is needed."}),"\n",(0,s.jsx)(n.h3,{id:"create-the-relying-party-trust",children:"Create the Relying Party Trust"}),"\n",(0,s.jsx)(n.p,{children:"To complete the IdP configuration in PortalGuard, we need to create a Relying Party with the following settings:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the\xa0",(0,s.jsx)(n.code,{children:"General"}),"\xa0tab:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Enter a desired name. This is a free form field, but it is recommended to enter the Innovative Educator's application name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Identifiers:"})," Copy and paste the value of the\xa0",(0,s.jsx)(n.code,{children:"entityId"}),"\xa0from the ",(0,s.jsx)(n.code,{children:"SP metadata file"})," provided by IE."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Binding:"})," POST."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Assertion Consumer URL:"})," From the ",(0,s.jsx)(n.code,{children:"SP metadata file"})," provided by IE, find the element:\n",(0,s.jsx)(n.code,{children:'<AssertionConsumerService binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" location="..."'}),"\nand copy the value of the\xa0location\xa0attribute to here."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"State:"})," checked"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the\xa0",(0,s.jsx)(n.code,{children:"Response"}),"\xa0tab:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default RelayState:"}),"\xa0(blank)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SAML Version:"})," 2.0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Digest Algorithm:"})," SHA-1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Signing Algorithm:"})," SHA-1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sign SAML Response:"})," unchecked"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sign SAML Assertion:"})," checked"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Override Token Timeout:"})," unchecked"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NotBefore Clock Skew:"})," 0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Override IdP Issuer:"})," (blank)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Override Cannonicalization:"})," (blank)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"PortalGuard now knows about the Innovative Educator's application."}),"\n",(0,s.jsx)(n.h3,{id:"releasing-user-attributes",children:"Releasing user attributes"}),"\n",(0,s.jsx)(n.p,{children:"We need to instruct PortalGuard to send some information about the user to the SP:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the\xa0Relying Party\xa0window, select the\xa0",(0,s.jsx)(n.code,{children:"Identity Claims"}),"\xa0tab."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the appropriate\xa0",(0,s.jsx)(n.code,{children:"Attribute Store"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["For each of the attributes, click\xa0",(0,s.jsx)(n.code,{children:"Create"}),"\xa0and then populate the settings:"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"info",children:(0,s.jsxs)(n.p,{children:["Please refer to the SAML 2.0 documentation for requirements and recommendations regarding\n",(0,s.jsx)(n.a,{href:"./saml2#external-customer-id",children:"NameID"})," and ",(0,s.jsx)(n.a,{href:"./saml2#configure-attributes",children:"attributes and claims."})]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute"}),(0,s.jsx)(n.th,{children:"Send As NameID?"}),(0,s.jsx)(n.th,{children:"Schema Type"}),(0,s.jsx)(n.th,{children:"Value Type"}),(0,s.jsx)(n.th,{children:"Direct Field -> Field Name"}),(0,s.jsx)(n.th,{children:"Direct Field -> Value Index"}),(0,s.jsx)(n.th,{children:"Required"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NameId"}),(0,s.jsx)(n.td,{children:"checked"}),(0,s.jsx)(n.td,{children:"(blank)"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"(uid, sAMAaccountName or other identifying attribute)"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"licenseIds"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"licenseIds"}),(0,s.jsx)(n.td,{children:"Formatted String"}),(0,s.jsx)(n.td,{children:"licenseIds"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Required*"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"firstname"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"firstname"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"givenName"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Recommended"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lastname"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"lastname"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"sn"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Recommended"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Recommended"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ref1"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"ref1"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"ref1"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ref2"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"ref2"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"ref2"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Optional"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ref3"}),(0,s.jsx)(n.td,{children:"unchecked"}),(0,s.jsx)(n.td,{children:"ref3"}),(0,s.jsx)(n.td,{children:"String Field"}),(0,s.jsx)(n.td,{children:"ref3"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Optional"})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Lastly click\xa0",(0,s.jsx)(n.code,{children:"Save"}),". PortalGuard is now ready to authenticate users to the IE application."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example--oneversion-of-portalguard",children:"Example -\xa0One\xa0Version of PortalGuard"}),"\n",(0,s.jsxs)(r.r,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(7727).Z+"",width:"1106",height:"738"}),"\nThe populated NameID attribute definition"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(2570).Z+"",width:"1056",height:"707"}),"\nThe populated\xa0LicenseIds\xa0attribute"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(3272).Z+"",width:"763",height:"512"}),"\nThe\xa0IdP-Initiated\xa0tab"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(1759).Z+"",width:"768",height:"514"}),"\nThe\xa0Response\xa0tab"]})]}),"\n",(0,s.jsx)(n.h2,{id:"example---another-version-of-portalguard",children:"Example - Another Version of PortalGuard"}),"\n",(0,s.jsxs)(r.r,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(9052).Z+"",width:"1280",height:"719"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6585).Z+"",width:"1280",height:"701"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(9384).Z+"",width:"1280",height:"723"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(982).Z+"",width:"1280",height:"694"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5772).Z+"",width:"1280",height:"863"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6882).Z+"",width:"1117",height:"1053"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5670).Z+"",width:"1112",height:"1072"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5578).Z+"",width:"1119",height:"1059"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(2859).Z+"",width:"1117",height:"1054"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8932).Z+"",width:"1109",height:"1044"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7171).Z+"",width:"1105",height:"1066"})})]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4511:(e,n,i)=>{i.d(n,{r:()=>t});var s=i(5893);const t=e=>{let{children:n,gap:i="20px"}=e;return(0,s.jsx)("div",{style:{display:"flex","flex-wrap":"wrap",gap:i},children:n.map(((e,n)=>(0,s.jsx)("div",{style:{width:`calc(50% - ${i})`},children:e},n)))})}},7727:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_1-6fa5ab9fcc0aa81704e97adb8a40a639.png"},6882:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_10-03a7fd0a022c436da67da1d3b63a354b.png"},5670:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_11-71d33b5f436e3bc55b5fd73c4af1c58c.png"},5578:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_12-6c85013361e0d9305960f425bab48cb5.png"},2859:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_13-9bf190c4e3ee7b869316710154456008.png"},8932:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_14-acc9ea876582bdcf89b5ef341654fe83.png"},7171:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_15-32a37bbe687b82fb95d48e136fbc0351.png"},2570:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_2-7100a97dafa604b20ecd9b9554e623f7.png"},3272:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_3-bb94f21a3a4577f02b79854b6ef8778d.png"},1759:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_4-c610d77651d1f919ed4d7bce59b562db.png"},9052:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_5-f4d0f2673118116192f74b834fde46f4.png"},6585:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_6-cc2292b2bf056be059cec09edd4f2684.png"},9384:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_7-da0ffaa09e640837ce49a1a491183d23.png"},982:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_8-370277e8fb45c8ab4ebd9ad11921ed57.png"},5772:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/saml_portalguard_9-f2340dff8cfb45794b1c4c6c245facb2.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>d});var s=i(7294);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);