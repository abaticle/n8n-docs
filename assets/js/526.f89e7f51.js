(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1615:function(e,t,i){"use strict";i.r(t);var r=i(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"pipedrive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pipedrive"}},[e._v("#")]),e._v(" Pipedrive")]),e._v(" "),i("p",[e._v("You can use these credentials to authenticate the following nodes with Pipedrive.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Pipedrive/"}},[e._v("Pipedrive")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/PipedriveTrigger/"}},[e._v("Pipedrive Trigger")])],1)]),e._v(" "),i("h2",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),i("p",[e._v("Create a "),i("a",{attrs:{href:"https://pipedrive.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pipedrive"),i("OutboundLink")],1),e._v(" account.")]),e._v(" "),i("h2",{attrs:{id:"using-oauth"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),i("ol",[i("li",[e._v("Create a "),i("a",{attrs:{href:"https://pipedrive.readme.io/docs/developer-sandbox-account",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer Sandbox Account"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("li",[e._v("Open your Pipedrive Dashboard.")]),e._v(" "),i("li",[e._v("Click on your user profile in the top right and select 'Tools and integrations' from the dropdown list.")]),e._v(" "),i("li",[e._v("From the sidebar under the "),i("em",[i("strong",[e._v("Tools")])]),e._v(" section, select 'Marketplace manager'.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Create new app")])]),e._v(" button.")]),e._v(" "),i("li",[e._v("Select either 'Yes' or 'No' when asked if you would like to publish your app on the Pipedrive marketplace.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Next")])]),e._v(" button.")]),e._v(" "),i("li",[e._v("Enter the name of the app in the "),i("em",[i("strong",[e._v("App name")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Copy the 'OAuth Callback URL' provided in the 'Pipedrive OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("On the Pipedrive app creation page, scroll down to the "),i("em",[i("strong",[e._v("OAuth & Access scopes")])]),e._v(" section and paste the URL in the "),i("em",[i("strong",[e._v("Callback URL")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Based on your use-case, select the scopes from the "),i("em",[i("strong",[e._v("Access scopes")])]),e._v(" section.")]),e._v(" "),i("li",[e._v("Scroll up and click on the "),i("em",[i("strong",[e._v("Save")])]),e._v(" button on the top.")]),e._v(" "),i("li",[e._v("Select your app from the 'Marketplace manager'")]),e._v(" "),i("li",[e._v("Scroll down to "),i("em",[i("strong",[e._v("OAuth & Access scopes")])]),e._v(" section and copy the "),i("em",[i("strong",[e._v("Client ID")])]),e._v(".")]),e._v(" "),i("li",[e._v("Enter the name for your credentials in the "),i("em",[i("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Pipedrive OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Paste the client ID in the "),i("em",[i("strong",[e._v("Client ID")])]),e._v(" field in the 'Pipedrive OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("On the Pipedrive application page, click on the "),i("em",[i("strong",[e._v("Show")])]),e._v(" button next to "),i("em",[i("strong",[e._v("Client Secret")])]),e._v(".")]),e._v(" "),i("li",[e._v("Copy the "),i("em",[i("strong",[e._v("Client Secret")])]),e._v(".")]),e._v(" "),i("li",[e._v("Paste the client secret in the "),i("em",[i("strong",[e._v("Client Secret")])]),e._v(" field in the 'Pipedrive OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Click on the circle button in the OAuth section to connect a Pipedrive account to n8n.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),i("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),i("div",{staticClass:"video-container"},[i("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/xyRPA-yX9so",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),i("h2",{attrs:{id:"using-api-token"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-api-token"}},[e._v("#")]),e._v(" Using API Token")]),e._v(" "),i("ol",[i("li",[e._v("Open your Pipedrive Dashboard.")]),e._v(" "),i("li",[e._v("Click on your user profile in the top right.")]),e._v(" "),i("li",[e._v("Select 'Personal preferences' from the dropdown list.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("API")])]),e._v(" tab.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Copy")])]),e._v(" button to copy the API Token.")]),e._v(" "),i("li",[e._v("Enter the name for your credentials in the "),i("em",[i("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Pipedrive API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Paste the API token in the "),i("em",[i("strong",[e._v("API Token")])]),e._v(" field in the 'Pipedrive API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Create")])]),e._v(" button to save your credentials.")])]),e._v(" "),i("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),i("div",{staticClass:"video-container"},[i("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/uBdmHiFW7Do",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);