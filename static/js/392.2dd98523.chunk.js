"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[392],{392:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(689),i=r(791),o=r(407),p="cast_listImg__tVnM6",l="cast_list__bULim",f="cast_listItem__Km70l",h="cast_listName__6beV9",v="cast_listCharacter__oFnba",m="cast_listWrap__U34ca",d="cast_error__hduCn",_=r(184),w=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],w=(0,i.useState)(!0),x=(0,a.Z)(w,2),g=x[0],b=x[1],k=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,(0,o.M1)(k);case 4:e=t.sent,r=e.cast,c(r),b(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,b(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),(0,_.jsx)(_.Fragment,{children:g?"Loading...":r&&r.length>0?(0,_.jsx)("div",{className:m,children:(0,_.jsx)("ul",{className:l,children:r.map((function(t){var e=t.name,r=t.character,n=t.profile_path,a=t.id;return(0,_.jsxs)("li",{className:f,children:[n&&(0,_.jsx)("img",{className:p,alt:e,src:"https://image.tmdb.org/t/p/w92".concat(n)}),(0,_.jsx)("p",{className:h,children:e}),(0,_.jsx)("p",{className:v,children:r})]},a)}))})}):(0,_.jsx)("p",{className:d,children:"No data found"})})}},407:function(t,e,r){r.d(e,{Df:function(){return u},M1:function(){return l},TP:function(){return o},qF:function(){return m},tx:function(){return h}});var n=r(861),a=r(757),c=r.n(a),s=r(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function u(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,s.get("/trending/movie/week");case 4:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/search/movie?query=".concat(e),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=392.2dd98523.chunk.js.map