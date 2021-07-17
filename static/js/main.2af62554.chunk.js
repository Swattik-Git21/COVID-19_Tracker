(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{100:function(e,t,a){e.exports={container:"Chart_container__rBN2g"}},101:function(e,t,a){e.exports={formControl:"Country_formControl__fqu1U"}},23:function(e,t,a){e.exports={container:"Cards_container__1xNXL",card:"Cards_card__1uXB_",infected:"Cards_infected__-RFZI",recovered:"Cards_recovered__3QI9T",deaths:"Cards_deaths__dgv1U"}},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),o=a.n(c),s=a(12),i=a.n(s),u=a(18),d=a(4),l=a(2),j=a(7),p=a(6),f=a(258),h=a(262),b=a(259),v=a(260),x=a(23),m=a.n(x),O=a(45),g=a.n(O),y=a(46),C=a.n(y),_=a(3),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:m.a.container,children:Object(_.jsxs)(f.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.infected),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:" Infected "}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(g.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:" Number of active cases in Covid-19 "})]})}),Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.recovered),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:" Recovered "}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(g.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(_.jsxs)(v.a,{color:"textSecondary",children:[" ",new Date(c).toDateString()," "]}),Object(_.jsx)(v.a,{variant:"body2",children:" Number of recoveries from Covid-19 "})]})}),Object(_.jsx)(f.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.deaths),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:" Deaths "}),Object(_.jsxs)(v.a,{variant:"h5",children:[" ",Object(_.jsx)(g.a,{start:0,end:r.value,duration:2.5,separator:","})," "]}),Object(_.jsxs)(v.a,{color:"textSecondary",children:[" ",new Date(c).toDateString()," "]}),Object(_.jsx)(v.a,{variant:"body2",children:" Number of death caused by Covid-19 "})]})})]})}):"Loading..."},S=a(31),k=a(47),N=a.n(k),D="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(64),A=a(100),M=a.n(A),R=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=e.country,s=Object(n.useState)([]),d=Object(S.a)(s,2),l=d[0],j=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=l.length?Object(_.jsx)(E.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),labels:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),labels:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;console.log(a,r,c);var f=a?Object(_.jsx)(E.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 225, 0.5)","rgba(0,225,0,0.5)","rgba(225, 0, 0,0.5)"],data:[a.value,r.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(_.jsx)("div",{className:M.a.container,children:o?f:p})},X=a(263),J=a(261),L=a(101),V=a.n(L),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(S.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(_.jsx)(X.a,{className:V.a.formControl,children:Object(_.jsxs)(J.a,{defaultValue:"",onChange:function(e){t(e.target.value)},children:[Object(_.jsx)("option",{vlaue:" ",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},F=a(63),G=a.n(F),K=a.p+"static/media/image.9e5d4fc7.png",Q=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:G.a.container,children:[Object(_.jsx)(w,{data:t}),Object(_.jsx)(R,{data:t,country:a}),Object(_.jsx)(q,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)("img",{className:G.a.image,src:K,alt:"COVID-19"})]})}}]),a}(r.a.Component);o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(Q,{})}),document.getElementById("root"))},63:function(e,t,a){e.exports={container:"App_container__2yXiE",image:"App_image__2KtM7"}}},[[240,1,2]]]);
//# sourceMappingURL=main.2af62554.chunk.js.map