(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),l=a(30),i=a.n(l),r=(a(38),a(4)),u=a(5),d=a(2),o=a.p+"static/media/logo.24f50a3a.svg",j=function(e){var t=e.currentUser;return Object(c.jsx)("nav",{className:"uk-navbar-container","data-uk-navbar":!0,children:Object(c.jsx)("div",{className:"uk-container uk-container-expand uk-width",children:Object(c.jsxs)("div",{className:"uk-navbar",children:[Object(c.jsx)("div",{className:"uk-navbar-left",children:Object(c.jsxs)("ul",{className:"uk-navbar-nav",children:[Object(c.jsx)("li",{className:"uk-active"}),Object(c.jsx)("li",{className:"uk-active",children:Object(c.jsx)(u.b,{to:"/users/".concat(null===t||void 0===t?void 0:t.id),className:"",children:"\u041c\u043e\u0439 \u0434\u043d\u0435\u0432\u043d\u0438\u043a"})})]})}),Object(c.jsx)("div",{className:"uk-navbar-center",children:Object(c.jsx)(u.b,{to:"/",className:"uk-logo",children:Object(c.jsx)("img",{src:o,alt:"logo",style:{height:"80px"}})})}),Object(c.jsx)("div",{className:"uk-navbar-right uk-margin-remove-right",children:t?t.name:Object(c.jsx)(u.b,{to:"/auth",className:"uk-button uk-button-primary",children:Object(c.jsx)("span",{className:"uk-margin-small-left",children:"\u0412\u043e\u0439\u0442\u0438"})})})]})})})},b=n.a.memo(j),m=a(10),k=a.n(m),x=a(16),h=a(21),O=a(12),p=a.n(O),v=function(e){var t=e.user,a=function(e){var t=e.trainings,a=0,c={};for(var s in t){for(var n=t[s],l=0;l<=n.sets.length;l++){var i=n.sets[l];c=Object(h.a)(Object(h.a)({},c),{},Object(x.a)({},i,i))}a+=n.totalReps}var u=t.sort((function(e,t){return t.totalReps-e.totalReps})),d=Object(r.a)(u,1)[0],o=Object.keys(c).sort((function(e,t){return t-e}));return{totalReps:a,bestRep:Object(r.a)(o,1)[0],bestSet:null===d||void 0===d?void 0:d.totalReps}}(t),s=a.totalReps,n=a.bestRep,l=a.bestSet;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"uk-card uk-card-default uk-card-small",children:[Object(c.jsx)("div",{className:"uk-card-header",children:Object(c.jsxs)("div",{className:"uk-grid-small uk-flex uk-flex-middle","data-uk-grid":!0,children:[Object(c.jsx)("div",{className:"uk-width-auto",children:Object(c.jsx)("img",{alt:"logo",className:"uk-border-circle",width:"40",height:"40",src:"https://image.freepik.com/free-vector/fitness-gym-logo-premium-vector_144543-140.jpg"})}),Object(c.jsxs)("div",{className:"uk-width-expand",children:[Object(c.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:t.userName}),Object(c.jsxs)("p",{className:"uk-text-meta uk-margin-remove-top",children:["\u041e\u0442\u0436\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u0441"," ",p()(t.created).format("DD.MM.YYYY")]})]})]})}),Object(c.jsxs)("div",{className:"uk-card-body",children:[Object(c.jsxs)("div",{children:["\u0412\u0441\u0435\u0433\u043e \u043e\u0442\u0436\u0438\u043c\u0430\u043d\u0438\u0439:"," ",Object(c.jsx)("span",{className:"uk-text-bold",children:s})]}),Object(c.jsxs)("div",{children:["\u041b\u0443\u0447\u0448\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434:"," ",Object(c.jsx)("span",{className:"uk-text-bold",children:n})]}),Object(c.jsxs)("div",{children:["\u041b\u0443\u0447\u0448\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430:"," ",Object(c.jsx)("span",{className:"uk-text-bold",children:l})]})]}),Object(c.jsx)("div",{className:"uk-card-footer",children:Object(c.jsx)(u.b,{to:"/users/".concat(t.userId),className:"uk-button uk-button-text",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0438"})})]},t.userId)})},f=n.a.memo(v);var g=function(e){var t=e.currentUser,a=Object(s.useState)([]),n=Object(r.a)(a,2),l=n[0],i=n[1];return Object(s.useEffect)((function(){k.a.get("http://localhost:5000/api/users").then((function(e){i(e.data)}))}),[i]),Object(c.jsx)("div",{className:"uk-container uk-margin-small-top",children:Object(c.jsx)("div",{"data-uk-grid":!0,className:"uk-grid-small uk-child-width-1-3@l uk-child-width-1-4@xl uk-child-width-1-2@s",children:l.map((function(e){return Object(c.jsx)(f,{currentUser:t,user:e},e.id)}))})})},N=function(e){var t=localStorage.getItem("userId");t&&k.a.post("http://localhost:5000/api/auth/auto",{id:t}).then((function(t){e(t.data)}))},y=function(e){var t=e.setCurrentUser,a=Object(d.g)(),n=Object(s.useState)(""),l=Object(r.a)(n,2),i=l[0],u=l[1],o=Object(s.useState)(null),j=Object(r.a)(o,2),b=j[0],m=j[1],x=Object(s.useState)(null),h=Object(r.a)(x,2),O=h[0],p=h[1],v=Object(s.useState)(""),f=Object(r.a)(v,2),g=f[0],y=f[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:" uk-card uk-card-default",children:[Object(c.jsx)("div",{className:"uk-card-header uk-text-center",children:"\u0425\u043e\u0447\u0443 \u043e\u0442\u0436\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0438 \u043d\u0435 \u0445\u043e\u0447\u0443 \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u0431\u0443\u043c\u0430\u0436\u043a\u0435"}),Object(c.jsxs)("div",{className:"uk-card-body",children:[Object(c.jsx)("input",{className:"uk-input ".concat(O?"uk-form-danger":""),type:"text",placeholder:"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442",autoComplete:"off",value:i||"",onChange:function(e){p(null),u(e.target.value)}}),Object(c.jsx)("input",{className:"uk-input uk-margin-small-top ".concat(b?"uk-form-danger":""),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"new-password",value:g||"",onChange:function(e){m(null),y(e.target.value)}}),b&&Object(c.jsx)("div",{className:"uk-text-center uk-text-danger",children:b}),O&&Object(c.jsx)("div",{className:"uk-text-center uk-text-danger",children:O})]}),Object(c.jsx)("div",{className:"uk-card-footer uk-flex uk-flex-center",children:Object(c.jsx)("button",{onClick:function(){if(!i||!g)return p(i?null:"\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),m(g?null:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),null;k.a.post("http://localhost:5000/api/auth",{name:i,password:g}).then((function(e){localStorage.setItem("userId",e.data.id),N(t),a.replace("/")})).catch((function(){m("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")}))},className:"uk-button uk-button-secondary",type:"button",children:Object(c.jsx)("span",{className:"uk-margin-small-left",children:"\u041f\u043e\u0433\u043d\u0430\u043b\u0438!"})})})]})})},w=n.a.memo(y),S=function(){return Object(c.jsx)("div",{className:"uk-flex uk-flex-center",children:Object(c.jsx)(u.b,{className:"uk-button uk-button-primary",type:"button",to:"/new",children:Object(c.jsx)("span",{className:"uk-margin-small-left",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443"})})})},C=n.a.memo(S);function U(e){var t=e.currentUser,a=Object(d.h)().userId,n=Object(s.useState)([]),l=Object(r.a)(n,2),i=l[0],o=l[1];return Object(s.useEffect)((function(){k.a.get("http://localhost:5000/api/trainings/".concat(a)).then((function(e){o(e.data)}))}),[o]),console.log("currentUser:",t),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"uk-container uk-margin-small-top",children:[Object(c.jsxs)("div",{className:"uk-flex uk-flex-between",children:[Object(c.jsx)(u.b,{className:"uk-button uk-button-default",type:"button",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"}),a===(null===t||void 0===t?void 0:t.id)&&Object(c.jsx)("div",{className:"uk-visible@s",children:Object(c.jsx)(C,{})})]}),Object(c.jsxs)("div",{className:"uk-margin-medium-top",children:[i.length>0?Object(c.jsx)("div",{className:"uk-card uk-card-small uk-card-body uk-margin-small-top uk-padding-remove-vertical uk-visible@s",children:Object(c.jsxs)("div",{className:"uk-flex uk-flex-between uk-flex-middle",children:[Object(c.jsxs)("div",{className:"uk-flex uk-flex-inline uk-flex-middle",children:[Object(c.jsx)("div",{style:{width:"50px"},children:"\u0414\u0430\u0442\u0430"}),Object(c.jsx)("div",{className:"uk-flex uk-flex-inline uk-margin-medium-left",children:Object(c.jsx)("div",{className:"uk-padding-small uk-padding-remove-vertical",children:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f"})})]}),Object(c.jsx)("div",{className:"uk-padding-small uk-padding-remove-vertical",children:"\u0418\u0442\u043e\u0433\u043e"})]})}):Object(c.jsx)("div",{className:"uk-text-center",children:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0442\u0432\u043e\u0438 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438"}),i.map((function(e,t){return Object(c.jsx)("div",{className:"uk-card uk-card-default uk-card-small uk-card-hover uk-card-body uk-margin-small-top uk-padding-remove-vertical",children:Object(c.jsxs)("div",{style:{paddingLeft:"90px",paddingRight:"90px"},children:[Object(c.jsx)("div",{className:"uk-position-absolute uk-position-left uk-padding-small",children:p()(e.date).format("DD.MM.YYYY")}),Object(c.jsx)("div",{className:"uk-flex uk-flex-inline",style:{width:"100%","overflow-x":"auto"},children:e.sets.map((function(e){return Object(c.jsx)("div",{className:"uk-padding-small",children:e},e)}))}),Object(c.jsxs)("div",{style:{width:"80px",paddingRight:"15px"},className:"uk-position-absolute uk-position-right uk-text-right",children:[Object(c.jsx)("span",{className:"uk-text-bold uk-text-lead",style:{lineHeight:"54px"},children:e.totalReps})," / ".concat(e.totalSets)]})]})},t)}))]})]}),a===(null===t||void 0===t?void 0:t.id)&&Object(c.jsx)("div",{className:"uk-hidden@s uk-position-fixed uk-position-bottom-center uk-padding",children:Object(c.jsx)(C,{})})]})}var Y=n.a.memo(U),I=a(32),R=function(e){var t=e.currentUser,a=Object(s.useState)([0,0,0]),n=Object(r.a)(a,2),l=n[0],i=n[1],o=function(){var e=p()();return{date:e,formatedDate:e.format("DD.MM.YYYY")}}(),j=o.date,b=o.formatedDate,m=Object(d.g)(),x=function(e,t){!function(e,t){i(l.map((function(a,c){return c!==e?a:t})))}(e,t.target.value)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.b,{className:"uk-button uk-button-default",type:"button",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(c.jsxs)("div",{className:"uk-card uk-card-default uk-card-small uk-margin-medium-top",children:[Object(c.jsx)("div",{className:"uk-flex uk-flex-center uk-card-header uk-text-bold uk-text-lead",children:b}),Object(c.jsxs)("div",{className:"uk-card-body",children:[Object(c.jsx)("div",{className:"",children:l.map((function(e,t){return Object(c.jsx)("div",{className:"uk-margin-small-top",children:Object(c.jsxs)("div",{className:" uk-flex uk-flex-inline uk-width",children:[Object(c.jsx)("span",{className:"uk-text-lead uk-padding uk-padding-remove-vertical",children:t+1}),Object(c.jsx)("input",{className:"uk-input uk-width",type:"tel",placeholder:"\u041a\u043e\u043b-\u0432\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439",value:e||"",onChange:function(e){return x(t,e)}})]})})}))}),Object(c.jsx)("div",{className:"uk-flex uk-flex-center uk-margin-small-top",children:Object(c.jsx)("button",{className:"uk-button uk-button-default",type:"button",onClick:function(){i([].concat(Object(I.a)(l),[0]))},children:Object(c.jsx)("span",{className:"uk-margin-small-left",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434"})})})]}),Object(c.jsxs)("div",{className:"uk-card-footer uk-flex uk-flex-right",children:[Object(c.jsx)("button",{className:"uk-button uk-button-primary",type:"button",onClick:function(){k.a.post("http://localhost:5000/api/trainings/create",{date:j,sets:l,userId:t.id}).then((function(e){console.log("response:",e),m.replace("/")})).catch((function(e){console.log("err:",e)}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(c.jsx)(u.b,{className:"uk-button uk-button-default uk-margin-small-left",type:"button",to:"/",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})},D=n.a.memo(R),M=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){N(n)}),[n]),Object(c.jsx)(u.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{currentUser:a}),Object(c.jsx)("div",{className:"uk-container uk-margin-medium-top uk-margin-large-bottom",children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",children:Object(c.jsx)(g,{currentUser:a})}),Object(c.jsx)(d.b,{exact:!0,path:"/users/:userId",children:Object(c.jsx)(Y,{currentUser:a})}),Object(c.jsx)(d.b,{path:"/new",children:a?Object(c.jsx)(D,{currentUser:a}):Object(c.jsx)(d.a,{to:"/auth"})}),Object(c.jsx)(d.b,{exact:!0,path:"/auth",children:a?Object(c.jsx)(d.a,{to:"/"}):Object(c.jsx)(w,{setCurrentUser:n})})]})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),F()}},[[65,1,2]]]);
//# sourceMappingURL=main.2d87b387.chunk.js.map