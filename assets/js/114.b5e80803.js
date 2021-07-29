(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1173:function(e,t,o){e.exports=o.p+"assets/img/workflow.f86cc749.png"},1174:function(e,t,o){e.exports=o.p+"assets/img/Salesforce_node.98214f80.png"},1175:function(e,t,o){e.exports=o.p+"assets/img/Salesforce1_node.061f1a5a.png"},1176:function(e,t,o){e.exports=o.p+"assets/img/Salesforce2_node.2b80367a.png"},1887:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"salesforce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salesforce"}},[e._v("#")]),e._v(" Salesforce")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.salesforce.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Salesforce"),a("OutboundLink")],1),e._v(" is a cloud-based software company. It provides customer relationship management service and also sells a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Salesforce/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.salesforce"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create, update, and add a note to a lead in Salesforce. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/664",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Salesforce")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1173),alt:"A workflow with the Salesforce node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-salesforce-node-create-lead"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-salesforce-node-create-lead"}},[e._v("#")]),e._v(" 2. Salesforce node (create: lead)")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Salesforce node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Salesforce/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enter the name of the company in the "),a("em",[a("strong",[e._v("Company")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the last name of the contact person in the "),a("em",[a("strong",[e._v("Last Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1174),alt:"Create a lead with the Salesforce node"}})]),e._v(" "),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_3-salesforce1-node-update-lead"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-salesforce1-node-update-lead"}},[e._v("#")]),e._v(" 3. Salesforce1 node (update: lead)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Lead ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Salesforce > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Salesforce"].json["id"]}}')])]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'City' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter a city name in the "),a("em",[a("strong",[e._v("City")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1175),alt:"Update a lead with the Salesforce node"}})])]),a("div",{pre:!0},[a("h3",{pre:!0,attrs:{id:"_4-salesforce2-node-addnote-lead"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-salesforce2-node-addnote-lead"}},[e._v("#")]),e._v(" 4. Salesforce2 node (addNote: lead)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select "),a("em",[a("strong",[e._v("Add Note")])]),e._v(" from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Lead ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Salesforce > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Salesforce"].json["id"]}}')])]),e._v(" "),a("li",[e._v("Enter the note in the "),a("em",[a("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1176),alt:"Add a note to a lead with the Salesforce node"}})])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);