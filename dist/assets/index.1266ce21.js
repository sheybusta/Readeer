var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const a="Readeer";var i=/([:*])(\w+)/g,c=/\*/g,s=/\/\?/g;function u(t){return void 0===t&&(t="/"),y()?location.pathname+location.search+location.hash:t}function l(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function h(t){return"string"==typeof t}function d(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function f(t){var e=l(t).split(/\?(.*)?$/);return[l(e[0]),e.slice(1).join("")]}function p(t){for(var e={},n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(""!==r[0]){var a=decodeURIComponent(r[0]);e[a]?(Array.isArray(e[a])||(e[a]=[e[a]]),e[a].push(decodeURIComponent(r[1]||""))):e[a]=decodeURIComponent(r[1]||"")}}return e}function m(t,e){var n,o=f(l(t.currentLocationPath)),r=o[0],a=o[1],u=""===a?null:p(a),m=[];if(h(e.path)){if(n="(?:/^|^)"+l(e.path).replace(i,(function(t,e,n){return m.push(n),"([^/]+)"})).replace(c,"?(?:.*)").replace(s,"/?([^/]+|)")+"$",""===l(e.path)&&""===l(r))return{url:r,queryString:a,hashString:d(t.to),route:e,data:null,params:u}}else n=e.path;var g=new RegExp(n,""),v=r.match(g);if(v){var y=h(e.path)?function(t,e){return 0===e.length?null:t?t.slice(1,t.length).reduce((function(t,n,o){return null===t&&(t={}),t[e[o]]=decodeURIComponent(n),t}),null):null}(v,m):v.groups?v.groups:v.slice(1);return{url:l(r.replace(new RegExp("^"+t.instance.root),"")),queryString:a,hashString:d(t.to),route:e,data:y,params:u}}return!1}function g(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function v(t,e){return void 0===t[e]||!0===t[e]}function y(){return"undefined"!=typeof window}function b(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(n){t[n]&&(e[n]||(e[n]=[]),e[n].push(t[n]))}))})),e}function k(t,e,n){var o=e||{},r=0;!function e(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),e()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,e()):n&&n(o)})):n&&n(o)}()}function L(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=u(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function _(t,e){for(var n=0;n<t.instance.routes.length;n++){var o=m(t,t.instance.routes[n]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void e()}e()}function w(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function O(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}k.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};var E=y(),C=g();function x(t,e){if(v(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),o=E&&t.resolveOptions&&!0===t.resolveOptions.hash;C?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var e=location.hash;location.hash="",location.hash=e}t.instance.__freezeListening=!1}),1))):E&&(window.location.href=t.to)}e()}function A(t,e){var n=t.instance;n.lastResolved()?k(n.lastResolved().map((function(e){return function(n,o){if(e.route.hooks&&e.route.hooks.leave){var r=!1,a=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);if("*"!==e.route.path)r=!a;else r=!(!!t.matches&&t.matches.find((function(t){return e.route.path===t.route.path})));v(t.navigateOptions,"callHooks")&&r?k(e.route.hooks.leave.map((function(e){return function(n,o){return e((function(e){!1===e?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return e()})):e()}function P(t,e){v(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var R=[function(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString)return n.forEach((function(e){e.route.hooks&&e.route.hooks.already&&v(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach((function(e){return e(t.match)}))})),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&v(t.navigateOptions,"callHooks")?k(t.match.route.hooks.before.map((function(e){return function(n,o){return e((function(e){!1===e?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return e()}])):e()},function(t,e){v(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&v(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(e){return e(t.match)})),e()}],S=[A,function(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var o=f(t.currentLocationPath),r=o[0],a=o[1],i=d(t.to);n.path=l(r);var c={url:n.path,queryString:a,hashString:i,data:null,route:n,params:""!==a?p(a):null};t.matches=[c],t.match=c}e()},k.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function H(){return(H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function N(t,e){var n=0;A(t,(function o(){n!==t.matches.length?k(R,H({},t,{match:t.matches[n]}),(function(){n+=1,o()})):P(t,e)}))}function T(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function M(t,e){var n,o=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:"[data-navigo]"},r=this,a="/",i=null,c=[],s=!1,v=g(),E=y();function C(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function A(t){return l(a+"/"+l(t))}function P(t,e,n,o){return t=h(t)?A(t):t,{name:o||l(String(t)),path:t,handler:e,hooks:b(n)}}function R(t,e){if(!r.__dirty){r.__dirty=!0,t=t?l(a)+"/"+l(t):void 0;var n={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,e)};return k([L,_,k.if((function(t){var e=t.matches;return e&&e.length>0}),N,S)],n,T),!!n.matches&&n.matches}r.__waiting.push((function(){return r.resolve(t,e)}))}function H(t,e){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,e)}));else{r.__dirty=!0,t=l(a)+"/"+l(t);var n={instance:r,to:t,navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:o,currentLocationPath:C(t)};k([w,O,_,k.if((function(t){var e=t.matches;return e&&e.length>0}),N,S),x,T],n,T)}}function M(){if(E)return function(){if(E)return[].slice.call(document.querySelectorAll(o.linksSelector||"[data-navigo]"));return[]}().forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var n=t.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(n);n=o.pathname+o.search}catch(i){}var a=function(t){if(!t)return{};var e,n=t.split(","),o={};return n.forEach((function(t){var n=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(n[0]){case"historyAPIMethod":o.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=n[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[n[0]]="true"===n[1]}})),e&&(o.resolveOptions=e),o}(t.getAttribute("data-navigo-options"));s||(e.preventDefault(),e.stopPropagation(),r.navigate(l(n),a))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,e,n){var o=c.find((function(e){return e.name===t})),r=null;if(o){if(r=o.path,e)for(var i in e)r=r.replace(":"+i,e[i]);r=r.match(/^\//)?r:"/"+r}return r&&n&&!n.includeRoot&&(r=r.replace(new RegExp("^/"+a),"")),r}function q(t){var e=f(l(t)),o=e[0],r=e[1],a=""===r?null:p(r);return{url:o,queryString:r,hashString:d(t),route:P(o,(function(){}),[n],o),data:null,params:a}}function U(t,e,n){return"string"==typeof e&&(e=B(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(n),function(){e.hooks[t]=e.hooks[t].filter((function(t){return t!==n}))}):(console.warn("Route doesn't exists: "+e),function(){})}function B(t){return"string"==typeof t?c.find((function(e){return e.name===A(t)})):c.find((function(e){return e.handler===t}))}t?a=l(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=a,this.routes=c,this.destroyed=s,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=e,e=t,t=a),c.push(P(t,e,[n,o])),this):(Object.keys(t).forEach((function(e){if("function"==typeof t[e])r.on(e,t[e]);else{var o=t[e],a=o.uses,i=o.as,s=o.hooks;c.push(P(e,a,[n,s],i))}})),this)},this.off=function(t){return this.routes=c=c.filter((function(e){return h(t)?l(e.path)!==l(t):"function"==typeof t?t!==e.handler:String(e.path)!==String(t)})),this},this.resolve=R,this.navigate=H,this.navigateByName=function(t,e,n){var o=I(t,e);return null!==o&&(H(o.replace(new RegExp("^/?"+a),""),n),!0)},this.destroy=function(){this.routes=c=[],v&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=s=!0},this.notFound=function(t,e){return r._notFoundRoute=P("*",t,[n,e],"__NOT_FOUND__"),this},this.updatePageLinks=M,this.link=function(t){return"/"+a+"/"+l(t)},this.hooks=function(t){return n=t,this},this.extractGETParameters=function(t){return f(C(t))},this.lastResolved=function(){return i},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(e,(function(){})),!!e.matches&&e.matches},this.matchLocation=function(t,e,n){void 0===e||void 0!==n&&!n||(e=A(e));var o={instance:r,to:e,currentLocationPath:e};L(o,(function(){})),"string"==typeof t&&(t=void 0===n||n?A(t):t);var a=m(o,{name:String(t),path:t,handler:function(){},hooks:{}});return a||!1},this.getCurrentLocation=function(){return q(l(u(a)).replace(new RegExp("^"+a),""))},this.addBeforeHook=U.bind(this,"before"),this.addAfterHook=U.bind(this,"after"),this.addAlreadyHook=U.bind(this,"already"),this.addLeaveHook=U.bind(this,"leave"),this.getRoute=B,this._pathToMatchObject=q,this._clean=l,this._checkForAHash=C,this._setCurrent=function(t){return i=r.current=t},function(){v&&(this.__popstateListener=function(){r.__freezeListening||R()},window.addEventListener("popstate",this.__popstateListener))}.call(this),M.call(this)}const I=(t,e)=>{const n=document.createElement("div");if(n.appendChild((t=>{const e=document.createElement("nav");e.className="navbar";for(const n of t){const t=document.createElement("a");t.innerHTML=n.name,t.href=n.path,t.setAttribute("data-navigo",""),e.appendChild(t)}return e})(e)),"function"==typeof t)n.appendChild(t());else{if(!(t instanceof Element))throw new TypeError("body is not a function or a DOM element");n.appendChild(t)}return n.appendChild((()=>{const t=document.createElement("div");return t.className="bottom",t.innerHTML="footer",t})()),n},q=(t={})=>null===t||"object"!=typeof t?{}:Object.fromEntries(Object.entries(t).filter((t=>"undefined"!==t[1])).map((t=>[t[0],""===t[1]||Number.isNaN(Number(t[1]))?"true"===t[1]||"false"!==t[1]&&("null"===t[1]?null:t[1]):Number(t[1])]))),U=[],B=t=>({params:a,data:i})=>{const c=U.filter((t=>"name"in t));((t,a)=>{for(var i in a||(a={}))n.call(a,i)&&r(t,i,a[i]);if(e)for(var i of e(a))o.call(a,i)&&r(t,i,a[i])})({},i),i&&"id"in i&&i.id;const s=document.getElementById("root");s.innerHTML="",s.appendChild(I(t(q(i),q(a)),c))};[{name:"home",path:"/",callback:B((()=>{const t=document.createElement("div");return t.className="body",t.appendChild(document.createTextNode("Welcome to HomePage!")),t.appendChild(document.createElement("br")),t.appendChild((()=>{const t=document.createElement("div"),e=document.createElement("form");e.className="d-flex",t.appendChild(e);const n=document.createElement("input");n.className="form-control me-5",n.type="search",n.placeholder="Let's search a book",n.ariaLabel="Search",e.appendChild(n);const o=document.createElement("button");return o.className="btn btn-outline-success",o.type="submit",o.innerHTML="Search",e.appendChild(o),t})()),t.appendChild((()=>{const t=document.createElement("div");t.classList="container";const e=document.createElement("div");e.classList=" d-flex flex-column justify-content-center align-items-center ";const n=document.createElement("h1");n.classList="h1";const o=document.createElement("p");o.classList="p_text",n.innerText="Goals of the project",o.innerText="Readeer promotes reading and exchange of children’s books and can be used both by parents and children.",t.appendChild(e),e.appendChild(n),e.appendChild(o);const r=document.createElement("div");r.classList="d-flex flex-row bd-highlight mb-2 justify-content-between align-items-center";const a=document.createElement("div");a.classList="p-2 bd-highlight";const i=document.createElement("h2");i.classList="h2",i.innerText="Social benefits";const c=document.createElement("p");c.classList="p_text",c.innerText="We think that using a book swap app is a nice way to involve children into sharing and exchanging activity as a part of socialization. Another goal is to make books more accessible: if you came from a different country, you may not be able to buy a book in your language or to find it in a library. But our app can help you. It is quite possible that you will find new acquaintances and friends for you and your child in your neighbourhood.",e.appendChild(r),r.appendChild(a),a.appendChild(i),a.appendChild(c);const s=document.createElement("div");s.classList="p-2 bd-highlight";const u=document.createElement("h2");u.classList="h2",u.innerText="Saving money";const l=document.createElement("p");l.classList="p_text",l.innerText="Books are getting more expensive, so exchange is a way to cooperate and help each other to save money. Instead of standing in the bookcase for years after reading, a book can bring joy to other children.",r.appendChild(s),s.appendChild(u),s.appendChild(l);const h=document.createElement("div");h.classList="d-flex flex-column justify-content-end align-items-end";const d=document.createElement("h2");d.classList="h2",d.innerText="Care for the environment";const f=document.createElement("p");return f.classList="p_text",f.innerText="As you know, printing books requires cutting trees, which is not good for nature and climate. But also, books are completely reusable. Thus, book sharing is an ecological way to live.",e.appendChild(h),h.appendChild(d),h.appendChild(f),t})()),t}))},{name:"login",path:"/login",callback:B((()=>{const t=document.createElement("div");return t.className="body",t.innerHTML="Welcome to the login page.",t}))},{name:"register",path:"/register",callback:B((()=>{const t=document.createElement("div");return t.className="body",t.innerHTML="Welcome to the Registration page.",t}))},{name:"about",path:"/about",callback:B((()=>{const t=document.createElement("div");return t.className="body",t.innerHTML="Welcome to the about us page.",t}))}].forEach((t=>U.push(t)));const F=window.location.href.includes(a)?new M(`/${a}`):new M("/");for(const W of U)F.on(W.path,W.callback);F.resolve();
