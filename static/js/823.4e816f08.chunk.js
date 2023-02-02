"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[823],{823:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(87),u=r(689),o=r(791),l=r(407),p="movie-details_img__UYao0",v="movie-details_imgWrap__QwrQy",d="movie-details_descrWrap__IVz6P",h="movie-details_btn__7lR9k",f="movie-details_btnList__Md0xQ",m="movie-details_castBtn__r+sEV",x="movie-details_reviewsBtn__LHOT7",_="movie-details_descrTitle__KpWvr",w=r(652),g=r(184),j=function(){var e,t,r=(0,u.UO)().movieId,s=(0,o.useState)(null),j=(0,a.Z)(s,2),b=j[0],k=j[1],y=(0,o.useState)(!0),N=(0,a.Z)(y,2),Z=N[0],U=N[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,(0,l.TP)(r);case 4:t=e.sent,k(t),U(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,U(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var L,S,T=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.rU,{className:h,to:T,children:"Go Back"}),Z?"Loading...":(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:v,children:[b.poster_path?(0,g.jsx)("img",{className:p,alt:b.original_title,src:"https://image.tmdb.org/t/p/w500".concat(b.poster_path)}):(0,g.jsx)("img",{className:p,src:w,alt:"not available"}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)("h1",{children:[b.original_title," (",(S=b.release_date,new Date(S).getFullYear()),")"]}),(0,g.jsxs)("p",{className:_,children:["User Score: ",~~(10*b.vote_average),"%"]}),(0,g.jsx)("p",{className:_,children:"Overview"}),(0,g.jsx)("p",{children:b.overview}),(0,g.jsx)("p",{className:_,children:"Genres"}),(0,g.jsx)("p",{children:(L=b.genres,L.map((function(e){return e.name})).join(", "))})]})]}),(0,g.jsx)("div",{children:(0,g.jsxs)("ul",{className:f,children:[(0,g.jsx)("li",{children:(0,g.jsx)(i.rU,{to:"cast",state:{from:T},children:(0,g.jsx)("button",{className:m,children:"Cast"})})}),(0,g.jsx)("li",{children:(0,g.jsx)(i.rU,{to:"reviews",state:{from:T},children:(0,g.jsx)("button",{className:x,children:"Reviews"})})})]})}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading subpage..."}),children:(0,g.jsx)(u.j3,{})})]})]})}},407:function(e,t,r){r.d(t,{Df:function(){return i},M1:function(){return p},TP:function(){return o},qF:function(){return f},tx:function(){return d}});var n=r(861),a=r(757),s=r.n(a),c=r(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week");case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},652:function(e,t,r){e.exports=r.p+"static/media/no-poster-available.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=823.4e816f08.chunk.js.map