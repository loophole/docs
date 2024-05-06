"use strict";(self.webpackChunkloophole_website=self.webpackChunkloophole_website||[]).push([[1987],{6826:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(5861),n=a(7757),s=a.n(n),l=a(7294),c=a(5321),o=a(9962),i=a(6010),u=a(9669),m=a.n(u),p="form_VDMH",d=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e,a=(0,l.useState)(""),n=a[0],u=a[1],d=(0,l.useState)(""),v=d[0],h=d[1],E=(0,l.useState)(""),f=E[0],g=E[1],b=(0,l.useState)(!1),N=b[0],w=b[1],x=(0,l.useState)(!1),k=x[0],y=x[1],S=(0,l.useState)(""),C=S[0],L=S[1],R=(0,l.useState)(!0),Z=R[0],_=R[1],F=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Z||!Z&&0===n.length||!Z&&0===v.length)){e.next=5;break}return _(!1),y(!0),L("Please fix the fields marked as invalid and try again"),e.abrupt("return");case 5:return e.prev=5,e.next=8,m().post("https://api.loophole.cloud/api/report-abuse",{siteId:n,message:v,mail:f});case 8:e.sent,g(""),h(""),u(""),_(!0),w(!0),y(!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(5),L("There was an error sending the report, please try again later or contact us directly via mail"),y(!0),w(!1);case 19:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(){return e.apply(this,arguments)}}();return l.createElement(c.Z,{title:"Report Abuse",description:t.tagline},l.createElement("header",{className:"hero"},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__subtitle"},"Report Abuse"))),l.createElement("main",null,l.createElement("section",null,l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col"},"Unfortunately, bad people do exist. If you've seen a Loophole URL that looks suspicious, violates our Terms of Service, or any laws, let us know about it and we'll take care of it.")),l.createElement("div",{className:"spacer spacer--sm"}),l.createElement("div",{className:"row"},N?l.createElement("div",{className:"col"},l.createElement("div",{className:"alert alert--success",role:"alert"},"Succesfully sent report"),l.createElement("div",{className:"spacer spacer--sm"})):null,k?l.createElement("div",{className:"col"},l.createElement("div",{className:"alert alert--danger",role:"alert"},C),l.createElement("div",{className:"spacer spacer--sm"})):null),l.createElement("div",{className:(0,i.Z)("row",p)},l.createElement("div",{className:"col"},l.createElement("label",{htmlFor:"url"},"Reported site URL:"),l.createElement("input",{id:"url",type:"text",value:n,onChange:function(e){return(t=e.target.value).length>40&&(t=t.substr(0,40)),u(t),void _(!1);var t},maxLength:"40",minLength:"1",required:!0})),l.createElement("div",{className:"col"},l.createElement("label",{htmlFor:"message"},"Message:"),l.createElement("textarea",{id:"message",rows:"5",value:v,onChange:function(e){return(t=e.target.value).length>400&&(t=t.substr(0,400)),h(t),void _(!1);var t},maxLength:"400",minLength:"1",required:!0})),l.createElement("div",{className:"col"},l.createElement("label",{htmlFor:"email"},"Email-address (optional):"),l.createElement("input",{id:"email",type:"text",value:f,onChange:function(e){return g(e.target.value)}})),l.createElement("div",{className:"spacer spacer--sm"}),l.createElement("div",{className:"col text--center"},l.createElement("button",{className:"button button--primary",onClick:(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),onKeyDown:(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},"Report")),l.createElement("div",{className:"spacer spacer--sm"})))),l.createElement("div",{className:"spacer"})))}}}]);