(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(13),i=n.n(a),s=(n(20),n(3)),l=n(14),o=n.n(l),j=function(){return o.a.get("https://randomuser.me/api/?results=20").then((function(e){return e.data.results.map((function(e){return{id:e.id.value,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,picture:e.picture.thumbnail}}))}))},u=(n(39),n(0));var b=function(e){var t=e.firstName,n=e.lastName,c=e.email,r=e.phone,a=e.picture;return Object(u.jsxs)("div",{className:"md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:a,src:a})}),Object(u.jsxs)("div",{children:[t," ",n," "]}),Object(u.jsx)("div",{children:r}),Object(u.jsx)("div",{children:c})]})};var h=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(s.a)(a,2),l=i[0],o=i[1],h=Object(c.useState)(0),d=Object(s.a)(h,2),m=d[0],f=d[1];return Object(c.useEffect)((function(){console.log(j()),j().then((function(e){o(e),r(e[0])})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center h3",children:"Use search and filters to browse employees"}),Object(u.jsx)(b,{image:n.picture,firstName:n.name,email:n.email,phone:n.phone,handleBtnClick:function(e){"next"===e.target.getAttribute("data-value")?function(e){e>=l.length&&(e=0),r(l[e]),f(e)}(m+1):function(e){e<0&&(e=l.length-1),r(l[e]),f(e)}(m-1)}})]})};n(41);var d=function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"})})};n(42);var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("a",{className:"",href:"https://urkelx.github.io/Portfolio/",children:Object(u.jsxs)("span",{children:["UrkelX ",(new Date).getFullYear()]})})})},f=n(15);n(43);var x=function(e){return Object(u.jsx)("main",Object(f.a)({className:"wrapper"},e))};var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{}),Object(u.jsx)(x,{children:Object(u.jsx)(h,{})}),Object(u.jsx)(m,{})]})};n(44);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a34b49d6.chunk.js.map