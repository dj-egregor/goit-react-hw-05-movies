"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[571],{450:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(689),i=r(791),o=r(407),p="reviews_list__BCK8P",l="reviews_listItem__CMu1Z",f="reviews_listWrap__+8d5B",v="reviews_listName__7R8tH",h="reviews_error__3cS1r",d=r(184),w=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],w=(0,i.useState)(!0),m=(0,a.Z)(w,2),_=m[0],x=m[1],g=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,o.tx)(g);case 4:t=e.sent,r=t.results,c(r),x(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,x(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,d.jsx)(d.Fragment,{children:_?"Loading...":r&&r.length>0?(0,d.jsx)("div",{className:f,children:(0,d.jsx)("ul",{className:p,children:r.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,d.jsxs)("li",{className:l,children:[(0,d.jsx)("p",{className:v,children:t}),r&&r]},n)}))})}):(0,d.jsx)("p",{className:h,children:"No reviews found"})})}},407:function(e,t,r){r.d(t,{Df:function(){return s},M1:function(){return l},TP:function(){return o},qF:function(){return d},tx:function(){return v}});var n=r(861),a=r(757),c=r.n(a),u=r(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function s(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,u.get("/trending/movie/week");case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(t),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=571.17f1ac9c.chunk.js.map