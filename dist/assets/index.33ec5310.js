var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const r="Readeer";var i=/([:*])(\w+)/g,s=/\*/g,c=/\/\?/g;function l(e){return void 0===e&&(e="/"),y()?location.pathname+location.search+location.hash:e}function d(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function u(e){return"string"==typeof e}function m(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function p(e){var t=d(e).split(/\?(.*)?$/);return[d(t[0]),t.slice(1).join("")]}function h(e){for(var t={},n=e.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(""!==o[0]){var r=decodeURIComponent(o[0]);t[r]?(Array.isArray(t[r])||(t[r]=[t[r]]),t[r].push(decodeURIComponent(o[1]||""))):t[r]=decodeURIComponent(o[1]||"")}}return t}function f(e,t){var n,a=p(d(e.currentLocationPath)),o=a[0],r=a[1],l=""===r?null:h(r),f=[];if(u(t.path)){if(n="(?:/^|^)"+d(t.path).replace(i,(function(e,t,n){return f.push(n),"([^/]+)"})).replace(s,"?(?:.*)").replace(c,"/?([^/]+|)")+"$",""===d(t.path)&&""===d(o))return{url:o,queryString:r,hashString:m(e.to),route:t,data:null,params:l}}else n=t.path;var v=new RegExp(n,""),g=o.match(v);if(g){var y=u(t.path)?function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce((function(e,n,a){return null===e&&(e={}),e[t[a]]=decodeURIComponent(n),e}),null):null}(g,f):g.groups?g.groups:g.slice(1);return{url:d(o.replace(new RegExp("^"+e.instance.root),"")),queryString:r,hashString:m(e.to),route:t,data:y,params:l}}return!1}function v(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function g(e,t){return void 0===e[t]||!0===e[t]}function y(){return"undefined"!=typeof window}function b(e,t){return void 0===e&&(e=[]),void 0===t&&(t={}),e.filter((function(e){return e})).forEach((function(e){["before","after","already","leave"].forEach((function(n){e[n]&&(t[n]||(t[n]=[]),t[n].push(e[n]))}))})),t}function E(e,t,n){var a=t||{},o=0;!function t(){e[o]?Array.isArray(e[o])?(e.splice.apply(e,[o,1].concat(e[o][0](a)?e[o][1]:e[o][2])),t()):e[o](a,(function(e){void 0===e||!0===e?(o+=1,t()):n&&n(a)})):n&&n(a)}()}function C(e,t){void 0===e.currentLocationPath&&(e.currentLocationPath=e.to=l(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function L(e,t){for(var n=0;n<e.instance.routes.length;n++){var a=f(e,e.instance.routes[n]);if(a&&(e.matches||(e.matches=[]),e.matches.push(a),"ONE"===e.resolveOptions.strategy))return void t()}t()}function w(e,t){e.navigateOptions&&(void 0!==e.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==e.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function k(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}E.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var N=y(),_=v();function O(e,t){if(g(e.navigateOptions,"updateBrowserURL")){var n=("/"+e.to).replace(/\/\//g,"/"),a=N&&e.resolveOptions&&!0===e.resolveOptions.hash;_?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",a?"#"+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout((function(){if(!a){var t=location.hash;location.hash="",location.hash=t}e.instance.__freezeListening=!1}),1))):N&&(window.location.href=e.to)}t()}function T(e,t){var n=e.instance;n.lastResolved()?E(n.lastResolved().map((function(t){return function(n,a){if(t.route.hooks&&t.route.hooks.leave){var o=!1,r=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);if("*"!==t.route.path)o=!r;else o=!(!!e.matches&&e.matches.find((function(e){return t.route.path===e.route.path})));g(e.navigateOptions,"callHooks")&&o?E(t.route.hooks.leave.map((function(t){return function(n,a){return t((function(t){!1===t?e.instance.__markAsClean(e):a()}),e.matches&&e.matches.length>0?1===e.matches.length?e.matches[0]:e.matches:void 0)}})).concat([function(){return a()}])):a()}else a()}})),{},(function(){return t()})):t()}function H(e,t){g(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var M=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach((function(t){t.route.hooks&&t.route.hooks.already&&g(e.navigateOptions,"callHooks")&&t.route.hooks.already.forEach((function(t){return t(e.match)}))})),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&g(e.navigateOptions,"callHooks")?E(e.match.route.hooks.before.map((function(t){return function(n,a){return t((function(t){!1===t?e.instance.__markAsClean(e):a()}),e.match)}})).concat([function(){return t()}])):t()},function(e,t){g(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&g(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach((function(t){return t(e.match)})),t()}],P=[T,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var a=p(e.currentLocationPath),o=a[0],r=a[1],i=m(e.to);n.path=d(o);var s={url:n.path,queryString:r,hashString:i,data:null,route:n,params:""!==r?h(r):null};e.matches=[s],e.match=s}t()},E.if((function(e){return e.notFoundHandled}),M.concat([H]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&void 0!==e.resolveOptions.noMatchWarning||console.warn('Navigo: "'+e.currentLocationPath+"\" didn't match any of the registered routes."),t()},function(e,t){e.instance._setCurrent(null),t()}])];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){var n=0;T(e,(function a(){n!==e.matches.length?E(M,A({},e,{match:e.matches[n]}),(function(){n+=1,a()})):H(e,t)}))}function R(e){e.instance.__markAsClean(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){var n,a=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:"[data-navigo]"},o=this,r="/",i=null,s=[],c=!1,g=v(),N=y();function _(e){return e.indexOf("#")>=0&&(e=!0===a.hash?e.split("#")[1]||"/":e.split("#")[0]),e}function T(e){return d(r+"/"+d(e))}function H(e,t,n,a){return e=u(e)?T(e):e,{name:a||d(String(e)),path:e,handler:t,hooks:b(n)}}function M(e,t){if(!o.__dirty){o.__dirty=!0,e=e?d(r)+"/"+d(e):void 0;var n={instance:o,to:e,currentLocationPath:e,navigateOptions:{},resolveOptions:S({},a,t)};return E([C,L,E.if((function(e){var t=e.matches;return t&&t.length>0}),x,P)],n,R),!!n.matches&&n.matches}o.__waiting.push((function(){return o.resolve(e,t)}))}function A(e,t){if(o.__dirty)o.__waiting.push((function(){return o.navigate(e,t)}));else{o.__dirty=!0,e=d(r)+"/"+d(e);var n={instance:o,to:e,navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:a,currentLocationPath:_(e)};E([w,k,L,E.if((function(e){var t=e.matches;return t&&t.length>0}),x,P),O,R],n,R)}}function I(){if(N)return function(){if(N)return[].slice.call(document.querySelectorAll(a.linksSelector||"[data-navigo]"));return[]}().forEach((function(e){"false"!==e.getAttribute("data-navigo")&&"_blank"!==e.getAttribute("target")?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&"a"===t.target.tagName.toLowerCase())return!1;var n=e.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var a=new URL(n);n=a.pathname+a.search}catch(i){}var r=function(e){if(!e)return{};var t,n=e.split(","),a={};return n.forEach((function(e){var n=e.split(":").map((function(e){return e.replace(/(^ +| +$)/g,"")}));switch(n[0]){case"historyAPIMethod":a.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":t||(t={}),t.strategy=n[1];break;case"resolveOptionsHash":t||(t={}),t.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[n[0]]="true"===n[1]}})),t&&(a.resolveOptions=t),a}(e.getAttribute("data-navigo-options"));c||(t.preventDefault(),t.stopPropagation(),o.navigate(d(n),r))},e.addEventListener("click",e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener("click",e.navigoHandler)})),o}function j(e,t,n){var a=s.find((function(t){return t.name===e})),o=null;if(a){if(o=a.path,t)for(var i in t)o=o.replace(":"+i,t[i]);o=o.match(/^\//)?o:"/"+o}return o&&n&&!n.includeRoot&&(o=o.replace(new RegExp("^/"+r),"")),o}function F(e){var t=p(d(e)),a=t[0],o=t[1],r=""===o?null:h(o);return{url:a,queryString:o,hashString:m(e),route:H(a,(function(){}),[n],a),data:null,params:r}}function B(e,t,n){return"string"==typeof t&&(t=D(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter((function(e){return e!==n}))}):(console.warn("Route doesn't exists: "+t),function(){})}function D(e){return"string"==typeof e?s.find((function(t){return t.name===T(e)})):s.find((function(t){return t.handler===e}))}e?r=d(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=r,this.routes=s,this.destroyed=c,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,a){var o=this;return"object"!=typeof e||e instanceof RegExp?("function"==typeof e&&(a=t,t=e,e=r),s.push(H(e,t,[n,a])),this):(Object.keys(e).forEach((function(t){if("function"==typeof e[t])o.on(t,e[t]);else{var a=e[t],r=a.uses,i=a.as,c=a.hooks;s.push(H(t,r,[n,c],i))}})),this)},this.off=function(e){return this.routes=s=s.filter((function(t){return u(e)?d(t.path)!==d(e):"function"==typeof e?e!==t.handler:String(t.path)!==String(e)})),this},this.resolve=M,this.navigate=A,this.navigateByName=function(e,t,n){var a=j(e,t);return null!==a&&(A(a.replace(new RegExp("^/?"+r),""),n),!0)},this.destroy=function(){this.routes=s=[],g&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=c=!0},this.notFound=function(e,t){return o._notFoundRoute=H("*",e,[n,t],"__NOT_FOUND__"),this},this.updatePageLinks=I,this.link=function(e){return"/"+r+"/"+d(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return p(_(e))},this.lastResolved=function(){return i},this.generate=j,this.getLinkPath=function(e){return e.getAttribute("href")},this.match=function(e){var t={instance:o,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:a};return L(t,(function(){})),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){void 0===t||void 0!==n&&!n||(t=T(t));var a={instance:o,to:t,currentLocationPath:t};C(a,(function(){})),"string"==typeof e&&(e=void 0===n||n?T(e):e);var r=f(a,{name:String(e),path:e,handler:function(){},hooks:{}});return r||!1},this.getCurrentLocation=function(){return F(d(l(r)).replace(new RegExp("^"+r),""))},this.addBeforeHook=B.bind(this,"before"),this.addAfterHook=B.bind(this,"after"),this.addAlreadyHook=B.bind(this,"already"),this.addLeaveHook=B.bind(this,"leave"),this.getRoute=D,this._pathToMatchObject=F,this._clean=d,this._checkForAHash=_,this._setCurrent=function(e){return i=o.current=e},function(){g&&(this.__popstateListener=function(){o.__freezeListening||M()},window.addEventListener("popstate",this.__popstateListener))}.call(this),I.call(this)}const j=(e,t)=>{const n=document.createElement("div");if(n.appendChild((e=>{const t=document.createElement("nav");t.className="navbar";for(const n of e){const e=document.createElement("a");e.innerHTML=n.name,e.href=n.path,e.setAttribute("data-navigo",""),t.appendChild(e)}return t})(t)),"function"==typeof e)n.appendChild(e());else{if(!(e instanceof Element))throw new TypeError("body is not a function or a DOM element");n.appendChild(e)}return n.appendChild((()=>{const e=document.createElement("div");return e.className="bottom",e.innerHTML="footer",e})()),n};const F="",B="",D=async(e,t,n,a,o,r,i)=>await(async(e,t)=>{const n=`${window.location.origin}/api/${e}`,a=encodeURI(n),o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${B}`,Email:F},body:JSON.stringify(t)});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}\n--\x3e${n}`);return await o.json()})("/register",{email:e,username:t,password:n,firstName:a,lastName:o,birthday:r,city:i}),q=e=>{const t=document.createElement("DIV");return t.id="resultMessageDiv",t.innerHTML=e,t.style.display="block",t.classList="alert alert-danger",t},U=e=>{e.preventDefault(),e.stopPropagation(),J.navigate("/login")};const $=async e=>{e.preventDefault(),e.stopPropagation();const t=e.target[0],n=e.target[1],a=e.target[2],o=e.target[3],r=e.target[4],i=e.target[5],s=e.target[6],c=e.target[7],l=document.getElementById("registerSubmitButton");l.disabled=!0,setTimeout((()=>{l.disabled=!1}),2e3);const d=/\b([A-zÀ-ÿ][-,A-z. ']+[ ]*)+/;if(!d.test(t.value)){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("First name should start with a capital letter and should not contain numbers.")),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(!d.test(n.value)){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("Last name should start with a capital letter and should not contain numbers.")),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(!d.test(o.value)){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("City name should start with a capital letter and should not contain numbers.")),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(s.value.length<=5){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("Password should be at least 6 characters long.")),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(s.value.length>=15){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("Password should not be longer than 15 characters.")),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(s.value!==c.value){const e=document.getElementById("statusMessageDiv");return e.appendChild(q("Passwords do not match!")),void setTimeout((()=>{e.innerHTML=""}),3e3)}const u=await D(r.value,a.value,s.value,t.value,n.value,i.value,o.value);if(u.error){const e=document.getElementById("statusMessageDiv");return e.appendChild(q(`<i class="fa fa-times-circle"></i> ${u.error}`)),void setTimeout((()=>{e.innerHTML=""}),3e3)}if(u.username){const e=document.getElementById("divContainer");e.innerHTML="",e.appendChild((e=>{const t=document.createElement("div");t.classList="card card-primary text-center w-75";const n=document.createElement("div");n.className="card-header bg-success";const a=document.createElement("img");a.src="./assets/party.849ccd0f.png",a.className="rounded",a.style.maxWidth="20%",n.appendChild(a);const o=document.createElement("div");o.className="card-body";const r=document.createElement("h3");r.classList="card-title h3",r.textContent=`Thank you for joining us, ${e}!`;const i=document.createElement("p");i.className="card-text",i.textContent="Welcome to Readeer!";const s=document.createElement("button");return s.className="btn btn-success",s.textContent="Log in",s.addEventListener("click",U),o.appendChild(r),r.appendChild(i),o.appendChild(s),t.appendChild(n),t.appendChild(o),t})(u.username))}};const W=(e={})=>null===e||"object"!=typeof e?{}:Object.fromEntries(Object.entries(e).filter((e=>"undefined"!==e[1])).map((e=>[e[0],""===e[1]||Number.isNaN(Number(e[1]))?"true"===e[1]||"false"!==e[1]&&("null"===e[1]?null:e[1]):Number(e[1])]))),z=[],K=e=>({params:r,data:i})=>{const s=z.filter((e=>"name"in e));((e,r)=>{for(var i in r||(r={}))n.call(r,i)&&o(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&o(e,i,r[i])})({},i),i&&"id"in i&&i.id;const c=document.getElementById("root");c.innerHTML="",c.appendChild(j(e(W(i),W(r)),s))};[{name:"home",path:"/",callback:K((()=>{const e=document.createElement("div");return e.className="body",e.appendChild(document.createTextNode("Welcome to HomePage!")),e.appendChild(document.createElement("br")),e.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("form");t.className="d-flex",e.appendChild(t);const n=document.createElement("input");n.className="form-control me-5",n.type="search",n.placeholder="Let's search a book",n.ariaLabel="Search",t.appendChild(n);const a=document.createElement("button");return a.className="btn btn-outline-success",a.type="submit",a.innerHTML="Search",t.appendChild(a),e})()),e.appendChild((()=>{const e=document.createElement("div");e.classList="container-lg py-5 w-75 margin-left:4rem",e.style.marginLeft="150px",e.id="divContainer";const t=document.createElement("div");t.id="infoDiv",t.className="row p-3 rounded";const n=document.createElement("div");n.className="col-6";const a=document.createElement("div");a.className="col-6";const o=document.createElement("img");o.src="./assets/little-girl.7b2192ef.png",o.className="img-fluid",o.style.maxWidth="70%",n.appendChild(o);const r=document.createElement("h1");r.textContent="What is Readeer?",r.className="h1",r.style.paddingTop="100px";const i=document.createElement("p");i.className="p fs-3",i.textContent="Readeer is a platform for exchange of children's books in your neighbourhood. Currently available only in Belgium.";const s=document.createElement("br");return a.appendChild(r),a.appendChild(i),e.appendChild(n),e.appendChild(a),e.appendChild(t),t.appendChild(n),t.appendChild(a),e.appendChild(s),e})()),e}))},{name:"login",path:"/login",callback:K((()=>{const e=document.createElement("div");return e.className="body",e.innerHTML="Welcome to the login page.",e}))},{name:"register",path:"/register",callback:K((()=>{const e=document.createElement("div");return e.className="body",e.appendChild((()=>{const e=document.createElement("div");e.classList="container py-5 w-75",e.id="divContainer";const t=document.createElement("div");t.className="row p-3 rounded",t.style.backgroundColor="#9ed7f0";const n=document.createElement("div");n.className="col-3";const a=document.createElement("div");a.className="col-9";const o=document.createElement("img");o.src="./assets/lion_reading.c9cc7951.png",o.className="rounded",o.style.maxWidth="70%",n.appendChild(o);const r=document.createElement("h1");r.textContent="Join Readeer to find a book for your child!",r.className="h1",r.style.color="white",a.appendChild(r),t.appendChild(n),t.appendChild(a),e.appendChild(t),document.createElement("div").className="card-body";const i=document.createElement("form");i.action="/api/register",i.method="POST",i.addEventListener("submit",$);const s=document.createElement("div");s.className="form-row";const c=document.createElement("div");c.classList="form-group col-md-6";const l=document.createElement("label");l.htmlFor="firstName",l.innerHTML="First name",l.classList="col-form-label";const d=document.createElement("input");d.type="text",d.className="form-control",d.name="firstName",d.id="firstName",d.placeholder="First name",d.required=!0,c.appendChild(l),c.appendChild(d);const u=document.createElement("div");u.classList="form-group col-md-6";const m=document.createElement("label");m.htmlFor="lastName",m.innerHTML="Last name",m.classList="col-form-label";const p=document.createElement("input");p.type="text",p.className="form-control",p.name="lastName",p.id="lastName",p.placeholder="Last name",p.required=!0,u.appendChild(m),u.appendChild(p),s.appendChild(c),s.appendChild(u);const h=document.createElement("div");h.className="form-row";const f=document.createElement("div");f.classList="form-group col-md-6";const v=document.createElement("label");v.htmlFor="username",v.innerHTML="Username",v.classList="col-form-label";const g=document.createElement("input");g.type="text",g.className="form-control",g.name="username",g.id="username",g.placeholder="Username",g.autocomplete="nope",g.required=!0,f.appendChild(v),f.appendChild(g);const y=document.createElement("div");y.classList="form-group col-md-6";const b=document.createElement("label");b.htmlFor="city",b.innerHTML="City",b.classList="col-form-label";const E=document.createElement("input");E.type="text",E.className="form-control",E.name="city",E.id="city",E.placeholder="City",E.required=!0,y.appendChild(b),y.appendChild(E),h.appendChild(f),h.appendChild(y);const C=document.createElement("div");C.className="form-row";const L=document.createElement("div");L.classList="form-group col-md-6";const w=document.createElement("label");w.htmlFor="email",w.innerHTML="E-mail",w.classList="col-form-label";const k=document.createElement("input");k.type="email",k.className="form-control",k.name="email",k.id="email",k.placeholder="E-mail",k.required=!0,L.appendChild(w),L.appendChild(k);const N=document.createElement("div");N.classList="form-group col-md-6";const _=document.createElement("label");_.htmlFor="birthday",_.className="form-label",_.innerHTML="Date of birth",_.classList="col-form-label";const O=document.createElement("div"),T=document.createElement("div");T.id="datepicker";const H=document.createElement("input");H.type="date",H.min="1920-01-01",H.max="2021-10-20",H.className="form-control",H.name="birthday",H.id="birthday",H.placeholder="Choose the date of birth",H.required=!0,T.appendChild(H),O.appendChild(T),N.appendChild(_),N.appendChild(O),C.appendChild(L),C.appendChild(N);const M=document.createElement("div");M.className="form-row";const P=document.createElement("div");P.classList="form-group col-md-6",P.id="passwordField";const A=document.createElement("label");A.htmlFor="password",A.innerHTML="Password (6-15 symbols)",A.classList="col-form-label";const x=document.createElement("input");x.type="password",x.className="form-control",x.name="password",x.id="password",x.placeholder="Password",x.required=!0,P.appendChild(A),P.appendChild(x),M.appendChild(P);const R=document.createElement("div");R.classList="form-group col-md-6";const S=document.createElement("label");S.htmlFor="inputPswConf",S.innerHTML="Confirm password",S.classList="col-form-label";const I=document.createElement("input");I.type="password",I.className="form-control",I.name="inputPswConf",I.id="inputPswConf",I.placeholder="Confirm password",I.required=!0,R.appendChild(S),R.appendChild(I),M.appendChild(R);const j=document.createElement("div");j.className="form-check";const F=document.createElement("label");F.className="form-check-label",F.for="validcheck",F.innerHTML="Agree to terms and conditions";const B=document.createElement("input");B.className="form-check-input",B.type="checkbox",B.value="",B.id="validcheck",B.required=!0,j.appendChild(B),j.appendChild(F);const D=document.createElement("div");D.classList="form-group col-md-6",D.appendChild(j);const q=document.createElement("DIV");q.id="statusMessageDiv",q.className="p-3";const U=document.createElement("div");U.className="form-row";const W=document.createElement("BUTTON");W.classList="btn btn-primary",W.type="submit",W.value="submit",W.innerHTML="Register",W.id="registerSubmitButton";const z=document.createElement("div");z.classList="m-3";const K=document.createElement("p"),J=document.createElement("a");return J.href="/login",J.setAttribute("data-navigo",!0),J.textContent="Do you have an account? Sign in",K.appendChild(J),z.appendChild(J),U.appendChild(W),U.appendChild(z),i.appendChild(s),i.appendChild(h),i.appendChild(C),i.appendChild(M),i.appendChild(D),i.appendChild(U),i.appendChild(q),e.appendChild(i),e})()),e}))},{name:"about",path:"/about",callback:K((()=>{const e=document.createElement("div");return e.className="body",e.innerHTML="Welcome to the about us page.",e}))}].forEach((e=>z.push(e)));const J=window.location.href.includes(r)?new I(`/${r}`):new I("/");for(const V of z)J.on(V.path,V.callback);J.resolve();
