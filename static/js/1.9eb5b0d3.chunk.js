(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{76:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__W89pI"}},78:function(e,a,t){e.exports={dialogs:"DialogsItem_dialogs__2Ws4O",dialog:"DialogsItem_dialog__1yEom"}},86:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(41),o=t(76),i=t.n(o),c=t(78),r=t.n(c),m=t(13),g=function(e){var a="/dialog/"+e.id;return s.a.createElement("div",{className:r.a.dialog},s.a.createElement(m.b,{to:a}," ",e.name," "))},u=function(e){return s.a.createElement("div",{className:i.a.message},e.massage)},d=t(0),E=function(e){var a=e.messagesPages,t=a.dialogData.map(function(e){return s.a.createElement(g,{name:e.name,id:e.id})}),n=a.messagesData.map(function(e){return s.a.createElement(u,{massage:e.message})}),l=a.newMessageBody;return!1===e.isAuth?s.a.createElement(d.a,{to:"/login"}):s.a.createElement("div",{className:i.a.dialogs},s.a.createElement("div",{className:i.a.dialogsItems},t),s.a.createElement("div",{className:i.a.messages},s.a.createElement("div",null,n),s.a.createElement("div",null," ",s.a.createElement("textarea",{onChange:function(a){var t=a.target.value;e.updateNewMessageBody(t)},value:l,placeholder:"Enter your message"})," "),s.a.createElement("div",null,"   ",s.a.createElement("button",{onClick:function(){e.sendMessage()}},"SEND"))))},f=t(17),v=t(39),p=t(21);a.default=Object(p.c)(Object(f.b)(function(e){return{messagesPages:e.messagesPages}},function(e){return{updateNewMessageBody:function(a){e(Object(l.c)(a))},sendMessage:function(){e(Object(l.b)())}}}),v.a)(E)}}]);
//# sourceMappingURL=1.9eb5b0d3.chunk.js.map