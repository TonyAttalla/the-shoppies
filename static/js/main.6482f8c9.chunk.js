(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{137:function(e,t,n){"use strict";n.r(t);var i=n(166),o=n(0),a=n(40),c=n.n(a),r=n(169),s=n(149),l=Object(s.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),d=n(13),b=n(3),h=n(94),j=n.n(h).a.create({baseURL:"".concat("https://www.omdbapi.com")});function u(e,t){return j.get("https://www.omdbapi.com/?s=".concat(t,"&apikey=8eda12ed&page=").concat(e,"&type=movie"))}var m=n(150),O=n(175),g=n(151),v=n(174),x=n(102),f=n(152),p=n(95),w=n(5);var S=function(e){var t=e.loading,n=e.getMovies,i=e.query,a=e.setQuery,c=e.liveSearch;Object(o.useEffect)((function(){c&&i.length>3&&n(1)}),[i,c,n]);var r=Object(p.debounce)((function(e){var t=e.target.value;a(t)}),300);return Object(w.jsx)(m.a,{width:"100%",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(g.a,{pointerEvents:"none",children:Object(w.jsx)(f.a,{color:"gray"})}),Object(w.jsx)(v.a,{type:"text",placeholder:"Title (4+ chars)",onChange:function(e){return r(e)}}),Object(w.jsx)(x.a,{hidden:c,isLoading:t,marginLeft:5,colorScheme:"green",disabled:i.length<3,onClick:function(){return n(1)},children:"Search"})]})})},k=n(74),C=n.n(k),y=n(98),I=n.n(y),T=n(168),M=n(170),N=n(162),D=n(176),E=n(157),Y=n(156),L=n(158),B=n(164),F=n(165),R=n(171),J=n(159),z=n(160),Q=n(161),W=n(173);var q=function(e){var t=e.name,n=e.isNominated,i=e.id,o=e.year,a=e.nominateMovie,c=e.removeMovie,r=e.nominees;return Object(w.jsx)(W.a,{initialScale:.9,in:!0,children:Object(w.jsx)(m.a,{borderWidth:"1px",borderRadius:"md",backgroundColor:"white",textColor:"black",p:5,marginTop:6,width:"95%",children:Object(w.jsxs)(Y.a,{alignItems:"center",children:[Object(w.jsxs)(E.a,{p:2,as:"h4",size:"md",children:[t," (",o,")"]}),Object(w.jsx)(L.a,{}),Object(w.jsx)(J.a,{colorScheme:r?"red":"green",icon:r?Object(w.jsx)(z.a,{}):Object(w.jsx)(Q.a,{}),disabled:!r&&n&&console.log(n),onClick:function(){r?c(i):a(i)}})]})})})};var P=function(){var e=JSON.parse(localStorage.getItem("nominees"))||[],t=Object(o.useState)([]),n=Object(b.a)(t,2),i=n[0],a=n[1],c=Object(o.useState)(e),r=Object(b.a)(c,2),s=r[0],l=r[1],h=Object(o.useState)(1),j=Object(b.a)(h,2),O=j[0],g=j[1],v=Object(o.useState)(!1),f=Object(b.a)(v,2),p=f[0],k=f[1],y=Object(o.useState)(0),J=Object(b.a)(y,2),z=J[0],Q=J[1],W=Object(o.useState)(0),P=Object(b.a)(W,2),U=P[0],X=P[1],A=Object(o.useState)(0),G=Object(b.a)(A,2),H=G[0],$=G[1],K=Object(o.useState)(""),V=Object(b.a)(K,2),Z=V[0],_=V[1],ee=Object(o.useState)(!1),te=Object(b.a)(ee,2),ne=te[0],ie=te[1],oe=Object(T.a)();Object(o.useEffect)((function(){localStorage.setItem("nominees",JSON.stringify(s))}),[s]),Object(o.useEffect)((function(){X(10*O-9),$(10*O-10+i.length)}),[O,i]);var ae=function(e){if(5===s.length)oe({title:"No more nominations available.",description:"You've already nominated 5 movies!",status:"error",duration:2e3,isClosable:!0});else{var t=C()(i,(function(t){return t.imdbID===e}));oe({title:"Nominee added.",description:"You've added '"+t.Title+"' to your nominations",status:"success",duration:2e3,isClosable:!0}),l([].concat(Object(d.a)(s),[t]))}},ce=function(e){console.log("unnominating");var t=Object(d.a)(s),n=I()(t,(function(t){return t.imdbID===e}))[0];console.log(n),console.log(t),l(Object(d.a)(t)),oe({title:"Nominee removed.",description:"You've removed '"+n.Title+"' from your nominations",status:"success",duration:2e3,isClosable:!0})},re=Object(o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;k(!0),g(e),u(e,Z).then((function(e){console.log("QUERY THAT GETS SENT IS: ",Z);var t=e.data.Search;Q(e.data.totalResults),t?a(t):(oe({title:"No results found.",description:"Couldn't find any movies with that search criteria.",status:"error",duration:2e3,isClosable:!0}),a([])),k(!1)}))}),[Z,oe]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(m.a,{width:"100%",children:Object(w.jsx)(N.a,{children:Object(w.jsxs)(m.a,{p:10,width:"90%",children:[Object(w.jsx)(S,{loading:p,getMovies:re,query:Z,setQuery:_,liveSearch:ne}),Object(w.jsxs)(D.a,{columns:[1,null,2],spacing:5,children:[Object(w.jsxs)(m.a,{height:"80vh",marginTop:5,marginBottom:5,children:[Object(w.jsxs)(E.a,{marginTop:7,as:"h2",size:"lg",children:[i.length>0&&!p&&"Search results ("+U+"-"+H+" of "+z+")",(0===i.length||p)&&"Movies"]}),Object(w.jsx)(m.a,{height:"70vh",overflow:"scroll",overflowX:"hidden",overflowY:"auto",css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{width:"6px"},"&::-webkit-scrollbar-thumb":{background:"white",borderRadius:"24px"}},children:Object(w.jsx)(M.a,{isLoaded:!p,children:i.map((function(e){return Object(w.jsx)(q,{name:e.Title,year:e.Year,id:e.imdbID,nominateMovie:ae,nominees:!1,isNominated:C()(s,(function(t){return t.imdbID===e.imdbID}))},e.imdbID)}))})}),Object(w.jsxs)(Y.a,{hidden:0===i.length,height:"12vh",alignItems:"center",children:[Object(w.jsx)(x.a,{disabled:1===O,colorScheme:"green",onClick:function(){re(O-1)},children:"Back"}),Object(w.jsx)(L.a,{}),Object(w.jsx)(x.a,{disabled:H===parseInt(z),colorScheme:"green",onClick:function(){re(O+1)},children:"Next"})]})]}),Object(w.jsxs)(m.a,{height:"80vh",marginTop:5,marginBottom:5,children:[Object(w.jsx)(E.a,{marginTop:7,as:"h2",size:"lg",children:"My Nominations"}),Object(w.jsx)(m.a,{height:"70vh",overflow:"scroll",overflowX:"hidden",overflowY:"auto",css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-track":{width:"6px"},"&::-webkit-scrollbar-thumb":{background:"white",borderRadius:"24px"}},children:s.map((function(e){return Object(w.jsx)(q,{name:e.Title,year:e.Year,id:e.imdbID,isNominated:!0,nominees:!0,removeMovie:ce},e.imdbID)}))}),Object(w.jsxs)(Y.a,{position:"absolute",right:5,alignItems:"center",children:[Object(w.jsx)(B.a,{htmlFor:"live-search",children:Object(w.jsx)(F.a,{children:" Live Search?"})}),Object(w.jsx)(R.a,{value:ne,onChange:function(e){ie(!ne)},colorScheme:"green",id:"live-search"})]})]})]})]})})})})};var U=function(){return Object(w.jsx)(r.a,{theme:l,children:Object(w.jsx)(P,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),a(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(w.jsxs)(o.StrictMode,{children:[Object(w.jsx)(i.a,{initialColorMode:l.config.initialColorMode}),Object(w.jsx)(U,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),X()}},[[137,1,2]]]);
//# sourceMappingURL=main.6482f8c9.chunk.js.map