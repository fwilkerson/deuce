var $jscomp={scope:{},owns:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(t,e,n,r){if(e){for(n=$jscomp.global,t=t.split("."),r=0;r<t.length-1;r++){var o=t[r];o in n||(n[o]={}),n=n[o]}t=t[t.length-1],r=n[t],e=e(r),e!=r&&null!=e&&$jscomp.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Object.assign",function(t){return t||function(t,e){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var o in r)$jscomp.owns(r,o)&&(t[o]=r[o])}return t}},"es6-impl","es3"),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(t){return $jscomp.SYMBOL_PREFIX+(t||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var t=$jscomp.global.Symbol.iterator;t||(t=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&$jscomp.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(t){var e=0;return $jscomp.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},$jscomp.iteratorPrototype=function(t){return $jscomp.initSymbolIterator(),t={next:t},t[$jscomp.global.Symbol.iterator]=function(){return this},t},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(t,e){$jscomp.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var o=n++;return{value:e(o,t[o]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},$jscomp.polyfill("Array.prototype.keys",function(t){return t||function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3"),$jscomp.findInternal=function(t,e,n){t instanceof String&&(t=String(t));for(var r=t.length,o=0;o<r;o++){var i=t[o];if(e.call(n,i,o,t))return{i:o,v:i}}return{i:-1,v:void 0}},$jscomp.polyfill("Array.prototype.find",function(t){return t||function(t,e){return $jscomp.findInternal(this,t,e).v}},"es6-impl","es3"),function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){function r(t,e,n,r){if("on"==e.slice(0,2))e=e.toLowerCase().substring(2),n?r||t.addEventListener(e,o):t.removeEventListener(e,o),t._listeners=t._listeners||{},t._listeners[e]=n;else if("style"==e)if(n){e=Object.assign({},r,n);for(var i in e)t.style[i]=n[i]||""}else t.style.cssText="";else{try{t[e]=n}catch(t){}n?t.setAttribute(e,n):t.removeAttribute(e)}}function o(t){return this._listeners[t.type](t)}function i(t){if("string"==typeof t)return document.createTextNode(t);var e=document.createElement(t.type);return t.children.forEach(function(t){return e.appendChild(i(t))}),Object.keys(t.attributes).forEach(function(n){return r(e,n,t.attributes[n])}),e}function c(t,e,n,r){if(r=t.childNodes[r||0]||t.childNodes[t.childNodes.length-1],!n&&e)t.appendChild(i(e));else if(e){if(typeof e!=typeof n||"string"==typeof e&&e!==n||e.type!==n.type)t.replaceChild(i(e),r);else if(e.type){a(r,e.attributes,n.attributes),e.children=[].concat(e.children),t=Math.max(e.children.length,n.children.length);for(var o=0;o<t;o++)c(r,e.children[o],n.children[o],o)}}else t.removeChild(r)}function a(t,e,n){var o=Object.assign({},n,e);Object.keys(o).forEach(function(o){return r(t,o,e[o],n[o])})}function s(t,e){return{getModel:function(){return t},setModel:function(n,r){t=Object.assign({},t,n),l(t),e&&r&&e(r,n)}}}function u(t,e,n){for(var r=[],o=2;o<arguments.length;++o)r[o-2]=arguments[o];var i,c=[];for(e=e||{},o=r.length;o--;)p.push(r[o]);for(;p.length;)if((i=p.pop())&&void 0!==i.pop)for(o=i.length;o--;)p.push(i[o]);else null!=i&&!0!==i&&!1!==i&&("number"==typeof i&&(i=String(i)),c.push(i));return"function"==typeof t?t(Object.assign({},e,{children:c})):{type:t,attributes:e,children:c}}n.d(e,"c",function(){return s}),n.d(e,"b",function(){return u});var l,p=[];e.a=function(t,e,n){var r;l=function(e){e=t(e),c(n,e,r),r=e},r=t(e),c(n,r)}},function(t,e,n){function r(t){u({isBusy:!0}),i.a.querySubreddit("r/javascript",t).then(function(t){u({articles:t,isBusy:!1})})}function o(t){var e=s(),n={path:"/type",type:t};history.pushState(n,"/type/"+t,"/type/"+t),u({type:t,route:n}),e.type===t&&0!==e.articles.length||r(t)}n.d(e,"a",function(){return c}),n.d(e,"d",function(){return a}),e.b=r,e.f=o,e.c=function(t){var e={path:"/comments",id:t};history.pushState(e,"/comments/"+t,"/comments/"+t),u({route:e})},e.e=function(t){var e=s(),n=e.type,e=e.articles;t.state&&t.state.type&&(t.state.type!==n||0===e.length)?o(t.state.type):u({route:t.state||{path:window.location.pathname}})},t=n(0);var i=n(3),c={hot:"hot",new:"new",controversial:"controversial"};n=function(t){if(history.state)return history.state;if("/"===window.location.pathname){var e={path:"/type",type:t};return history.pushState(e,"/type/"+t,"/type/"+t),e}return{path:window.location.pathname}}(c.hot);var a={articles:[],type:n.type||c.hot,isBusy:!1,route:n};n=Object(t.c)(a);var s=n.getModel,u=n.setModel},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),t=n(0),e=n(1),n=n(4),Object(t.a)(n.a,e.d,document.getElementById("root")),"/type"===e.d.route.path&&Object(e.b)(e.d.type)},function(t,e,n){function r(t){return t.map(function(t){return{id:t.data.id,author:t.data.author,comments:t.data.num_comments,created:t.data.created,score:t.data.score,subreddit:t.data.subreddit,title:t.data.title,url:t.data.url}})}e.a={querySubreddit:function(t,e){return fetch("https://www.reddit.com/"+t+"/"+e+".json?limit=10").then(function(t){return t.json()}).then(function(t){return r(t.data.children)}).catch(function(t){return console.error(t)})}}},function(t,e,n){var r=n(0),o=n(1),i=n(5),c={display:"flex"},a={position:"fixed",bottom:"2rem",right:"2rem",zIndex:1},s={margin:"auto"},u=function(t){return Object(r.b)("div",{style:a},Object(r.b)("span",{class:"icon is-large has-text-primary"},Object(r.b)("i",{class:"fa fa-spinner fa-3x fa-pulse"})))},l=function(t){return Object(r.b)("nav",{class:"navbar has-shadow"},Object(r.b)("div",{class:"container",style:c},Object(r.b)("div",{class:"navbar-tabs",style:s},Object.keys(o.a).map(function(e){return Object(r.b)(p,{active:t.active,text:e})}))))},p=function(t){return Object(r.b)("a",{class:t.active===t.text?"navbar-item is-tab is-active":"navbar-item is-tab",onClick:function(){return Object(o.f)(t.text)}},t.text)},f=function(t){return Object(r.b)("section",{class:"section"},Object(r.b)("div",{class:"container"},t.articles.map(function(t){return Object(r.b)(b,t)})))},b=function(t){return Object(r.b)("article",{class:"media box"},Object(r.b)("figure",{class:"media-left has-text-grey"},Object(r.b)("span",{class:"icon"},Object(r.b)("i",{class:"fa fa-arrow-up"})),Object(r.b)("br",null),Object(r.b)("p",{class:"has-text-centered"},t.score),Object(r.b)("span",{class:"icon"},Object(r.b)("i",{class:"fa fa-arrow-down"}))),Object(r.b)("div",{class:"media-content"},Object(r.b)("div",{class:"content"},Object(r.b)("p",null,Object(r.b)("a",{href:t.url,target:"_blank"},t.title),Object(r.b)("br",null),Object(r.b)("small",{class:"is-size-7"},"submitted on ",new Date(new Date(0).setSeconds(t.created)).toLocaleDateString()," by "),Object(r.b)("em",{class:"size-is-7"},"/u/",t.author),Object(r.b)("br",null),Object(r.b)("small",null,Object(r.b)("a",{onClick:function(){return Object(o.c)(t.id)},class:"has-text-grey"},t.comments," comments"))))))},d=function(t){return Object(r.b)("section",{class:"section"},Object(r.b)("div",{class:"container"},Object(r.b)("h2",{class:"title"},"Comments for post ",t.route.id)))};e.a=function(t){return Object(r.b)("main",null,Object(r.b)(l,{active:t.type}),Object(r.b)(i.b,{model:t,routeChanged:o.e},Object(r.b)(i.a,{path:"/type/:type",view:f}),Object(r.b)(i.a,{path:"/comments/:id",view:d})),t.isBusy&&Object(r.b)(u,null))}},function(t,e,n){function r(t){var e=window.location.pathname;return t.exact?e===t.path:e.match(/[^\/]+/g)[0]===t.path.match(/[^\/]+/g)[0]}n.d(e,"a",function(){return o}),e.b=function(t){if(t.children){window.onpopstate||(window.onpopstate=t.routeChanged);var e=t.children.find(r);if(e)return e.view(t.model)}};var o=function(t){return t}}]);