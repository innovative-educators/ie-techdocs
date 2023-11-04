"use strict";(self.webpackChunkie_docs=self.webpackChunkie_docs||[]).push([[553],{140:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const r={sidebar_position:1,toc_max_heading_level:2},s="Live Event Webhooks",a={id:"data-integrations/webhooks",title:"Live Event Webhooks",description:"What is a webhook?",source:"@site/docs/data-integrations/webhooks.mdx",sourceDirName:"data-integrations",slug:"/data-integrations/webhooks",permalink:"/data-integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/innovative-educators/ie-docs/blob/master/docs/data-integrations/webhooks.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Data Integrations",permalink:"/data-integrations/introduction"},next:{title:"Nightly SFTP Events",permalink:"/data-integrations/sftp"}},l={},d=[{value:"What is a webhook?",id:"what-is-a-webhook",level:2},{value:"Integration Details",id:"integration-details",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Testing Your Webhook",id:"testing-your-webhook",level:2},{value:"Before your endpoint is configured on our end:",id:"before-your-endpoint-is-configured-on-our-end",level:3},{value:"After your endpoint is configured on our end:",id:"after-your-endpoint-is-configured-on-our-end",level:3},{value:"Authenticating Requests",id:"authenticating-requests",level:2},{value:"Event Details",id:"event-details",level:2},{value:"Trigger",id:"trigger",level:3},{value:"Notable Event Attributes",id:"notable-event-attributes",level:3},{value:"Sample Payload",id:"sample-payload",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"live-event-webhooks",children:"Live Event Webhooks"}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-webhook",children:"What is a webhook?"}),"\n",(0,i.jsx)(n.p,{children:"When an event occurs on the platform, an http post request can be sent to your web server with that event information. For example, when a learner completes a course, an http post request would be sent, to the URL configured for your webhook, containing the course completion data. You can then process and/or pass this data onward to any third party system for automation / reporting / analytics purposes."}),"\n",(0,i.jsx)(n.h2,{id:"integration-details",children:"Integration Details"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Flexibility:"})," You receive payload data and can transform the payload into format consumable by enterprise software / email marketing systems. This may require technical team to write necessary scripts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Reliability:"})," If webhook delivery fails, we will automatically retry the request over time. We will retry ten times total with an exponential backoff starting from 20 seconds up to 3600 seconds, giving up approximately 3.5 hours after the first webhook delivery attempt."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The connection will time out in 15 seconds. If your endpoint does not respond before the connection times out or if your endpoint returns a status code outside the range of 200--308, we will consider the delivery of the message as a failed attempt."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Live Events:"})," Payload of event data is posted in real-time in JSON format to the appropriate URL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Payload Format:"})," Each event will fire a http request to your server in industry standard JSON format."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create a webhook endpoint:"})," You need a server that listens for requests over ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org%2Fwiki%2FHypertext_Transfer_Protocol&sa=D&sntz=1&usg=AOvVaw1INp77K2cObEDIdyxMgy5S",children:"HTTP"})," and consumes data in ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org%2Fwiki%2FJSON&sa=D&sntz=1&usg=AOvVaw32AqnfKinnaZAMLeu3dxcM",children:"JSON"})," format (data samples below). This can be achieved in multiple ways:"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom server code"}),"\n",(0,i.jsx)(n.li,{children:"LMS or SIS with built in webhook capabilities"}),"\n",(0,i.jsxs)(n.li,{children:["Web based automation platforms with webhook capabilities like ",(0,i.jsx)(n.a,{href:"https://zapier.com/",children:"Zapier"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Send us your webhook details:"})," Send us your webhook endpoint URL and a list of courses you'd like events for and we'll configure our end to start sending notifications"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure and Test:"})," Once we finish configuring on our end, we'll send a test notification, so you can verify that your end is properly accepting the payloads"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Distinguishing Courses",type:"tip",children:(0,i.jsxs)(n.p,{children:["If your endpoint is configured to receive multiple different courses, you can distinguish once course from another using the ",(0,i.jsx)(n.code,{children:"notifiableId"})," JSON property. See the ",(0,i.jsx)(n.a,{href:"#event-details",children:"event examples"})," for more details on this."]})}),"\n",(0,i.jsx)(n.h2,{id:"testing-your-webhook",children:"Testing Your Webhook"}),"\n",(0,i.jsx)(n.p,{children:"Here are a few strategies that you can employ in order to test the integration"}),"\n",(0,i.jsx)(n.h3,{id:"before-your-endpoint-is-configured-on-our-end",children:"Before your endpoint is configured on our end:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can use the ",(0,i.jsx)(n.a,{href:"#event-details",children:"event examples"})," from our documentation to test against your endpoint directly. You can either send the payload directly to your endpoint or use a tool like ",(0,i.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"})," to simulate the request."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"after-your-endpoint-is-configured-on-our-end",children:"After your endpoint is configured on our end:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can complete a course yourself with your user account (once per account)."}),"\n",(0,i.jsx)(n.li,{children:"You can request that your account be reset for a particular course so you can complete it again on your own time"}),"\n",(0,i.jsx)(n.li,{children:"You can request completion for an account be reset for a particular course, then re-completed in order to resend the notification"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"authenticating-requests",children:"Authenticating Requests"}),"\n",(0,i.jsx)(n.p,{children:"For security reasons, you may want to limit requests to your endpoint to those coming from our platform. In order to authenticate incoming requests, you can allow access only to the ones coming from our IP addresses. All other requests should be blocked / ignored."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"54.243.7.71"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"3.83.213.76"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"event-details",children:"Event Details"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Currently, the only supported event is ",(0,i.jsx)(n.code,{children:"courseComplete"})]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"courseComplete"}),(0,i.jsx)(n.h3,{id:"trigger",children:"Trigger"}),(0,i.jsx)(n.p,{children:"When a learner completes a course"}),(0,i.jsx)(n.h3,{id:"notable-event-attributes",children:"Notable Event Attributes"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"user"})}),(0,i.jsx)(n.td,{children:"The leaner's email address"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"notifiableId"})}),(0,i.jsx)(n.td,{children:"The ID of the course that was completed"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userDetail > externalCustomerId"})}),(0,i.jsx)(n.td,{children:"The learner's ID, the value associated to their account. This value is utilized during SSO to associate the learner coming from the IDP with their account in the SP (IE product)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ref1 - ref3"})}),(0,i.jsx)(n.td,{children:"Optional data passed from the IDP to the SP (IE product) during SSO can be found in these attributes."})]})]})]}),(0,i.jsx)(n.h3,{id:"sample-payload",children:"Sample Payload"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "32ed16df-27cb-5f72-90ff-4eaf39346f86",\n  "source": "course_completed",\n  "timestamp": "2019-10-17T20:50:53.103Z",\n  "type": "status_change",\n  // highlight-next-line\n  "user": "bobjohnson@school.com", // learner email\n  "companyId": "3aabdfb8-3891-5011-ad35-8e2351c5fdaf",\n  "event": "courseCompletion",\n  // highlight-next-line\n  "notifiableId": "7670fdbe-15ed-504b-a680-d404fa4b0eb4", // course id\n  "title": "New Student Orientation", // course title\n  "userDetail": { // learner details\n    "id": "61149b2c-3f37-5032-be63-f5d984de10b6",\n    "firstName": "Bob",\n    "lastName": "Johnson",\n    // highlight-next-line\n    "externalCustomerId": "111222333444",\n    "sfContactId": null,\n    "sfAccountId": null,\n    "client": "00f928f4-8718-5043-9164-32398b165c60",\n    // highlight-next-line\n    "ref1": "111222333444",\n    "ref2": "Department",\n    "ref3": "..."\n  }\n}\n'})})]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);