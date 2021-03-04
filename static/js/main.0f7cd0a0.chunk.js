(this["webpackJsonpfintech-sandpit-task"]=this["webpackJsonpfintech-sandpit-task"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(9),r=n.n(i),c=(n(14),n(15),n(4)),l=n(3),j=n(7),o=n(0),h=function(e){var t=e.value[0],n=e.onChange,s=e.onSubmit;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:s,className:"form-section",id:"graph-form",children:[Object(o.jsx)("h2",{children:"Welcome to Grapher!"}),Object(o.jsx)("p",{children:"Enter a title for your graph, and the values to be plotted. Values should be in integer or decimal form with a comma seperating individual values. Then press 'Generate'. Use the blue buttons to toggle the type of graph."}),Object(o.jsxs)("label",{className:"form-component",children:[Object(o.jsx)("span",{className:"input-text",children:"Title"}),Object(o.jsx)("input",{className:"input-entry",type:"text",minLength:"1",maxLength:"50",name:"title",placeholder:"Cars sold in Feb...",value:t.title,onChange:n,required:!0}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("label",{className:"form-component",children:[Object(o.jsx)("span",{className:"input-text",children:"Values"}),Object(o.jsx)("input",{className:"input-entry",type:"text",minLength:"1",name:"values",placeholder:"10,90,30,50...",value:t.values,onChange:n}),Object(o.jsx)("br",{})]}),Object(o.jsx)("span",{className:"form-component",children:Object(o.jsx)("button",{id:"input-submit",type:"submit",value:"Generate",children:"Generate"})})]})})},u=n(6),b=function(e){return Object(o.jsx)("h1",{children:e.title})},d=function(e){var t=584,n=e.values.length,s=Math.max.apply(Math,Object(u.a)(e.values));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:e.title}),Object(o.jsx)("div",{className:"graph-container",children:Object(o.jsxs)("svg",{className:"graph-content graph",viewBox:"0 0 800 500",preserveAspectRatio:"xMinYMin meet",children:[Object(o.jsxs)("title",{children:[e.title," line graph."]}),Object(o.jsx)("g",{class:"grid grid-lines",children:Object(o.jsx)("line",{x1:"90",x2:"90",y1:"5",y2:"371"})}),Object(o.jsx)("g",{class:"grid grid-lines",children:Object(o.jsx)("line",{x1:"90",x2:"705",y1:"370",y2:"370"})}),Object(o.jsxs)("g",{class:"grid grid-values",children:[Object(o.jsx)("polyline",{points:e.values.map((function(e,a){return 91+t/(n+1)*(1.1*a)+t/(n+1)/2+","+(373-358/s*e)})).toString()}),e.values.map((function(e,a){return Object(o.jsx)("circle",{class:"grid grid-values grid-values-circles",cx:(91+t/(n+1)*(1.1*a)+t/(n+1)/2).toString(),cy:(373-358/s*e).toString()})}))]}),Object(o.jsx)("g",{className:"labels x-labels",children:e.values.map((function(e,s){return Object(o.jsx)("text",{x:(91+t/(n+1)*(1.1*s)+t/(n+1)/2).toString(),y:"400",children:s})}))}),Object(o.jsx)("g",{className:"labels y-labels",children:new Array(6).fill(0).map((function(e,t){return Object(o.jsx)("text",{x:"80",y:(15+71*t).toString(),children:Math.round(10*(s-s/5*t))/10})}))})]})})]})},x=function(e){var t=584,n=e.values.length,s=Math.max.apply(Math,Object(u.a)(e.values));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:e.title}),Object(o.jsx)("div",{className:"graph-container",children:Object(o.jsxs)("svg",{className:"graph-content graph",viewBox:"0 0 800 500",preserveAspectRatio:"xMinYMin meet",children:[Object(o.jsxs)("title",{children:[e.title," line graph."]}),Object(o.jsx)("g",{className:"grid grid-lines",children:Object(o.jsx)("line",{x1:"90",x2:"90",y1:"5",y2:"371"})}),Object(o.jsx)("g",{className:"grid grid-lines",children:Object(o.jsx)("line",{x1:"90",x2:"705",y1:"370",y2:"370"})}),Object(o.jsx)("g",{className:"grid grid-values",children:e.values.map((function(e,a){return Object(o.jsx)("g",{className:"grid grid-values grid-values-bars",transform:"translate("+(91+t/(n+1)*(1.1*a)).toString()+","+(11+358/s*(s-e)).toString()+")",children:Object(o.jsx)("rect",{height:(358/s*e).toString(),width:(t/(n+1)).toString()})},a.toString())}))}),Object(o.jsx)("g",{className:"labels x-labels",children:e.values.map((function(e,s){return Object(o.jsx)("text",{x:(91+t/(n+1)*(1.1*s)+t/(n+1)/2).toString(),y:"400",children:s},s.toString())}))}),Object(o.jsx)("g",{className:"labels y-labels",children:new Array(6).fill(0).map((function(e,t){return Object(o.jsx)("text",{x:"80",y:(15+71*t).toString(),children:Math.round(10*(s-s/5*t))/10},t.toString())}))})]})})]})},p=function(){var e=Object(s.useState)({title:"",values:[]}),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)({title:"",values:[]}),r=Object(j.a)(i,2),u=r[0],b=r[1],p=Object(s.useState)({name:"Graphs",showHideBarGraph:!0,showHideLineGraph:!1}),g=Object(j.a)(p,2),O=g[0],m=g[1],v=function(e){switch(e){case"showHideLineGraph":m({showHideLineGraph:!O.showHideLineGraph});break;case"showHideBarGraph":m({showHideBarGraph:!O.showHideBarGraph})}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{value:[u,n],onChange:function(e){b(Object(l.a)(Object(l.a)({},u),{},Object(c.a)({},e.target.name,e.target.value)))},onSubmit:function(e){e.preventDefault();var t=u.values.split(",");t=t.map((function(e){return parseInt(e)})),a(Object(l.a)(Object(l.a)({},n),{},{title:u.title,values:t}))}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{id:"bar-button",className:"button",onClick:function(){return v("showHideBarGraph")},children:"BAR GRAPH"}),Object(o.jsx)("button",{id:"line-button",className:"button",onClick:function(){return v("showHideLineGraph")},children:"LINE GRAPH"})]})]}),Object(o.jsxs)("div",{className:"graph-wrapper",children:[O.showHideBarGraph&&Object(o.jsx)(x,{title:n.title,values:n.values}),O.showHideLineGraph&&Object(o.jsx)(d,{title:n.title,values:n.values})]})]})};var g=function(){return Object(o.jsx)("div",{className:"page-wrapper",children:Object(o.jsx)(p,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.0f7cd0a0.chunk.js.map