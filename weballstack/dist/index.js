!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!A[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--g&&0===v&&j()}(e,t),n&&n(e,t)};var t,r=!0,o="68571dbf8a6cebad23fd",i={},a=[],s=[];function c(e){var n=H[e];if(!n)return M;var r=function(r){return n.hot.active?(H[r]?-1===H[r].parents.indexOf(e)&&H[r].parents.push(e):(a=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),M(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&f("prepare"),v++,M.e(e).then(n,(function(e){throw n(),e}));function n(){v--,"prepare"===u&&(y[e]||S(e),0===v&&0===g&&j())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}function d(n){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[n]=e[n],f("ready");break;case"ready":D(n);break;case"prepare":case"check":case"dispose":case"apply":(b=b||[]).push(n)}},check:x,apply:P,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[n]};return t=void 0,r}var l=[],u="idle";function f(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,h,m,b,g=0,v=0,y={},w={},A={};function k(e){return+e+""===e?+e:e}function x(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+"7cd7675-wps-hmr.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f(L()?"ready":"idle"),null;w={},y={},A=e.c,m=e.h,f("prepare");var n=new Promise((function(e,n){p={resolve:e,reject:n}}));h={};return S(0),"prepare"===u&&0===v&&0===g&&j(),n}));var n}function S(e){A[e]?(w[e]=!0,g++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+"7cd7675-"+e+"-wps-hmr.js",document.head.appendChild(n)}(e)):y[e]=!0}function j(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then((function(){return P(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(k(t));e.resolve(n)}}function P(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(r){var s,c,d,l,u;function p(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((l=H[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<l.parents.length;s++){var c=l.parents[s],d=H[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([c]),moduleId:i,parentId:c};-1===n.indexOf(c)&&(d.hot._acceptedDependencies[i]?(t[c]||(t[c]=[]),g(t[c],[i])):(delete t[c],n.push(c),r.push({chain:a.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}L();var v={},y=[],w={},x=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var j;u=k(S),j=h[S]?p(u):{type:"disposed",moduleId:S};var P=!1,D=!1,C=!1,O="";switch(j.chain&&(O="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(P=new Error("Aborted because of self decline: "+j.moduleId+O));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+O));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(P=new Error("Aborted because "+u+" is not accepted"+O));break;case"accepted":r.onAccepted&&r.onAccepted(j),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),C=!0;break;default:throw new Error("Unexception type "+j.type)}if(P)return f("abort"),Promise.reject(P);if(D)for(u in w[u]=h[u],g(y,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,u)&&(v[u]||(v[u]=[]),g(v[u],j.outdatedDependencies[u]));C&&(g(y,[j.moduleId]),w[u]=x)}var E,I=[];for(c=0;c<y.length;c++)u=y[c],H[u]&&H[u].hot._selfAccepted&&w[u]!==x&&!H[u].hot._selfInvalidated&&I.push({module:u,parents:H[u].parents.slice(),errorHandler:H[u].hot._selfAccepted});f("dispose"),Object.keys(A).forEach((function(e){!1===A[e]&&function(e){delete installedChunks[e]}(e)}));var q,B,N=y.slice();for(;N.length>0;)if(u=N.pop(),l=H[u]){var Y={},R=l.hot._disposeHandlers;for(d=0;d<R.length;d++)(s=R[d])(Y);for(i[u]=Y,l.hot.active=!1,delete H[u],delete v[u],d=0;d<l.children.length;d++){var T=H[l.children[d]];T&&((E=T.parents.indexOf(u))>=0&&T.parents.splice(E,1))}}for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(l=H[u]))for(B=v[u],d=0;d<B.length;d++)q=B[d],(E=l.children.indexOf(q))>=0&&l.children.splice(E,1);f("apply"),void 0!==m&&(o=m,m=void 0);for(u in h=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var F=null;for(u in v)if(Object.prototype.hasOwnProperty.call(v,u)&&(l=H[u])){B=v[u];var W=[];for(c=0;c<B.length;c++)if(q=B[c],s=l.hot._acceptedDependencies[q]){if(-1!==W.indexOf(s))continue;W.push(s)}for(c=0;c<W.length;c++){s=W[c];try{s(B)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:B[c],error:e}),r.ignoreErrored||F||(F=e)}}}for(c=0;c<I.length;c++){var Z=I[c];u=Z.module,a=Z.parents,t=u;try{M(u)}catch(e){if("function"==typeof Z.errorHandler)try{Z.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),r.ignoreErrored||F||(F=n),F||(F=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||F||(F=e)}}if(F)return f("fail"),Promise.reject(F);if(b)return n(r).then((function(e){return y.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return f("idle"),new Promise((function(e){e(y)}))}(n=n||{})}function L(){if(b)return h||(h={}),b.forEach(D),b=void 0,!0}function D(n){Object.prototype.hasOwnProperty.call(h,n)||(h[n]=e[n])}var H={};function M(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:d(n),parents:(s=a,a=[],s),children:[]};return e[n].call(t.exports,t,t.exports,c(n)),t.l=!0,t.exports}M.m=e,M.c=H,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/assets/",M.h=function(){return o},c(8)(M.s=8)}([function(e,n){const{error:t,info:r,warn:o}=console,i={error:t.bind(console,"⬡ wps:"),info:r.bind(console,"⬡ wps:"),refresh:"Please refresh the page",warn:o.bind(console,"⬡ wps:")},a=()=>{},s={error:a,info:a,warn:a};e.exports=()=>window.webpackPluginServe.silent?s:i},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!0);o.push([e.i,".foo {\r\n    color: red;\r\n}","",{version:3,sources:["webpack://src/views/foo/style.css"],names:[],mappings:"AAAA;IACI,UAAU;AACd",sourcesContent:[".foo {\r\n    color: red;\r\n}"],sourceRoot:""}]),n.default=o},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!0);o.push([e.i,".bar {\r\n    color: blue;\r\n}","",{version:3,sources:["webpack://src/views/bar/style.css"],names:[],mappings:"AAAA;IACI,WAAW;AACf",sourcesContent:[".bar {\r\n    color: blue;\r\n}"],sourceRoot:""}]),n.default=o},function(e,n){e.exports={addCss:e=>{const n=document.createElement("style");n.type="text/css",e.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),document.head.appendChild(n)},addHtml:(e,n)=>{const t=document.createElement("div"),r=[];for(t.innerHTML=e.trim();t.firstChild;)r.push((n||document.body).appendChild(t.firstChild));return r},socketMessage:(e,n)=>{e.addEventListener("message",e=>{const{action:t,data:r={}}=JSON.parse(e.data);n(t,r)})}}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:b(f,n),references:1}),r.push(l)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function b(e,n){var t,r,o;if(n.singleton){var i=m++;t=h||(h=d(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){var r=t(9),o=t(10),i=t(11),a='<div class="foo"> <h1>Page Foo</h1> <a href="javascript:" class=".foo__gobar">goto /bar</a> <p> <img src="'+r(o)+'" alt="smallpic"> </p> <p> <img src="'+r(i)+'" alt="largepic"> </p> </div>';e.exports=a},function(e,n){e.exports='<div class="bar"> <h1>Page Bar</h1> <a href="javascript:" class="bar__gofoo">goto /foo</a> </div>'},function(e,n,t){t(21),e.exports=t(14)},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"592eaa13bc9f15ba0bfb887e506a4451.png"},function(e,n,t){var r=t(5),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=r(o,i);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(2,(function(){"string"==typeof(o=(o=t(2)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(s,o.locals)?(s=o.locals,a(o)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=o.locals||{}},function(e,n,t){var r=t(5),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=r(o,i);if(!o.locals||e.hot.invalidate){var s=o.locals;e.hot.accept(3,(function(){"string"==typeof(o=(o=t(3)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,n){if(!e&&n||e&&!n)return!1;var t;for(t in e)if(e[t]!==n[t])return!1;for(t in n)if(!e[t])return!1;return!0}(s,o.locals)?(s=o.locals,a(o)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=o.locals||{}},function(e,n,t){(()=>{const{run:e}=t(15);let n,r="<unknown>";try{n={compress:null,headers:null,historyFallback:!1,hmr:!0,host:null,liveReload:!1,log:{level:"info",prefix:{template:"{{level}}"},name:"webpack-plugin-serve"},open:!1,port:55555,progress:!0,ramdisk:!1,secure:!1,static:["D:\\11_Work\\github\\webInterview\\weballstack"],status:!0,address:"[::]:55555",compilerName:null,wpsId:"7cd7675"}}catch(e){const{log:n}=t(0);n.error("The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.")}try{r=t.h()}catch(e){}e(r,n)})()},function(e,n,t){e.exports={run:(e,n)=>{const{address:r,client:o={},progress:i,secure:a,status:s}=n;n.firstInstance=!window.webpackPluginServe,window.webpackPluginServe=window.webpackPluginServe||{compilers:{}},window.webpackPluginServe.silent=!!o.silent;const{ClientSocket:c}=t(16),{replace:d}=t(17),{error:l,info:u,warn:f}=t(0)(),p=new c(o,`${a?"wss":"ws"}://${o.address||r}/wps`),{compilerName:h}=n;if(window.webpackPluginServe.compilers[h]={},window.addEventListener("beforeunload",()=>p.close()),p.addEventListener("message",t=>{const{action:r,data:o={}}=JSON.parse(t.data),{errors:i,hash:a="<?>",warnings:s}=o||{},c=a.slice(0,7),p=n.compilerName?`(Compiler: ${n.compilerName}) `:"",m=window.webpackPluginServe.compilers[h],{wpsId:b}=o;switch(r){case"build":m.done=!1;break;case"connected":u("WebSocket connected "+p);break;case"done":m.done=!0;break;case"problems":o.errors.length&&l(`${p}Build ${c} produced errors:\n`,i),o.warnings.length&&f(`${p}Build ${c} produced warnings:\n`,s);break;case"reload":window.location.reload();break;case"replace":b&&b===n.wpsId&&d(e,a)}}),n.firstInstance){if("minimal"===i){const{init:e}=t(18);e(n,p)}else if(i){const{init:e}=t(19);e(n,p)}if(s){const{init:e}=t(20);e(n,p)}u("Hot Module Replacement is active"),n.liveReload&&u("Live Reload taking precedence over Hot Module Replacement")}}}},function(e,n,t){const{error:r,refresh:o,warn:i}=t(0)(),a=[1008,1011];e.exports={ClientSocket:class{constructor(e,...n){this.args=n,this.attempts=0,this.eventHandlers=[],this.options=e,this.retrying=!1,this.connect()}addEventListener(...e){this.eventHandlers.push(e),this.socket.addEventListener(...e)}close(){this.socket.close()}connect(){if(this.socket&&delete this.socket,this.connecting=!0,this.socket=new WebSocket(...this.args),this.options.retry?this.socket.addEventListener("close",e=>{a.includes(e.code)||(this.retrying||i("The WebSocket was closed and will attempt to reconnect"),this.reconnect())}):this.socket.onclose=()=>i("The client WebSocket was closed. "+o),this.socket.addEventListener("open",()=>{this.attempts=0,this.retrying=!1}),this.eventHandlers.length)for(const[e,n]of this.eventHandlers)this.socket.addEventListener(e,n)}reconnect(){if(this.attempts+=1,this.retrying=!0,this.attempts>10)return r("The WebSocket could not be reconnected. "+o),void(this.retrying=!1);const e=1e3*this.attempts**2;setTimeout(()=>this.connect(this.args),e)}removeEventListener(...e){const[,n]=e;this.eventHandlers=this.eventHandlers.filter(([,e])=>e===n),this.socket.removeEventListener(...e)}}}},function(e,n,t){const{error:r,info:o,refresh:i,warn:a}=t(0)();let s=!0;const c={onUnaccepted(e){a("Change in unaccepted module(s):\n",e),a(e)},onDeclined(e){a("Change in declined module(s):\n",e)},onErrored(e){r("Error in module(s):\n",e)}};e.exports={replace:async(n,t)=>{const{apply:r,check:d,status:l}=e.hot;if(t&&(s=t.includes(n)),!s){const e=l();if("abort"===e||"fail"===e)return void a(`An HMR update was triggered, but ${e}ed. ${i}`);let n;try{n=await d(!1)}catch(e){return}if(!n)return void a("No modules found for replacement. "+i);n=await r(c),n&&(s=!0,o(`Build ${t.slice(0,7)} replaced:\n`,n))}}}},function(e,n,t){const{addCss:r,addHtml:o}=t(4),i="wps-progress-minimal",a=`\n<div id="${i}" class="${i}-hidden">\n  <div id="${i}-bar"></div>\n</div>\n`,s=`\n#${i} {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 100vw;\n  z-index: 2147483645;\n}\n\n#${i}-bar {\n  width: 0%;\n  height: 4px;\n  background-color: rgb(186, 223, 172);\n  transition: width 1s ease-in-out;\n}\n\n.${i}-hidden{\n  display: none;\n}\n`,c=e=>{document.querySelector(`#${i}-bar`).style.width=e+"%"};e.exports={init:(e,n)=>{e.firstInstance&&document.addEventListener("DOMContentLoaded",()=>{r(s),o(a)}),n.addEventListener("message",e=>{const{action:n,data:t}=JSON.parse(e.data);if("progress"!==n)return;const r=Math.floor(100*t.percent),o=document.querySelector("#"+i);o.classList.remove(i+"-hidden"),1===t.percent&&setTimeout(()=>(e=>{e.classList.add(i+"-hidden"),setTimeout(()=>c(0),1e3)})(o),5e3),c(r)})}}},function(e,n,t){const{addCss:r,addHtml:o}=t(4),i="wps-progress",a=`\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n\n#${i}{\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  right: 5%;\n  top: 5%;\n  transition: opacity .25s ease-in-out;\n  z-index: 2147483645;\n}\n\n#${i}-bg {\n  fill: #282d35;\n}\n\n#${i}-fill {\n  fill: rgba(0, 0, 0, 0);\n  stroke: rgb(186, 223, 172);\n  stroke-dasharray: 219.99078369140625;\n  stroke-dashoffset: -219.99078369140625;\n  stroke-width: 10;\n  transform: rotate(90deg)translate(0px, -80px);\n  transition: stroke-dashoffset 1s;\n}\n\n#${i}-percent {\n  font-family: 'Open Sans';\n  font-size: 18px;\n  fill: #ffffff;\n}\n\n#${i}-percent-value {\n  dominant-baseline: middle;\n  text-anchor: middle;\n}\n\n#${i}-percent-super {\n  fill: #bdc3c7;\n  font-size: .45em;\n  baseline-shift: 10%;\n}\n\n.${i}-noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n@keyframes ${i}-hidden-display {\n\t0% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t\t-webkit-transform: scale(1);\n\t}\n\t99% {\n\t\tdisplay: inline-flex;\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t}\n\t100% {\n\t\tdisplay: none;\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t\t-webkit-transform: scale(0);\n\t}\n}\n\n.${i}-hidden {\n  animation: ${i}-hidden-display .3s;\n  animation-fill-mode:forwards;\n  display: inline-flex;\n}\n\n.${i}-hidden-onload {\n  display: none;\n}\n`,s=`\n<svg id="${i}" class="${i}-noselect ${i}-hidden-onload" x="0px" y="0px" viewBox="0 0 80 80">\n  <circle id="${i}-bg" cx="50%" cy="50%" r="35"></circle>\n  <path id="${i}-fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />\n  <text id="${i}-percent" x="50%" y="51%"><tspan id="${i}-percent-value">0</tspan><tspan id="${i}-percent-super">%</tspan></text>\n</svg>\n`,c=e=>{const n=document.querySelector(`#${i}-percent-value`),t=(100-e)/100*-219.99078369140625;document.querySelector(`#${i}-fill`).setAttribute("style","stroke-dashoffset: "+t),n.innerHTML=e.toString()};e.exports={init:(e,n)=>{e.firstInstance&&document.addEventListener("DOMContentLoaded",()=>{r(a),o(s)}),n.addEventListener("message",e=>{const{action:n,data:t}=JSON.parse(e.data);if("progress"!==n)return;const r=Math.floor(100*t.percent),o=document.querySelector("#"+i);o&&(o.classList.remove(i+"-hidden",i+"-hidden-onload"),1===t.percent&&setTimeout(()=>(e=>{e.classList.add(i+"-hidden"),setTimeout(()=>c(0),1e3)})(o),5e3),c(r))})}}},function(e,n,t){const{addCss:r,addHtml:o,socketMessage:i}=t(4),a="wps-status",s=`\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n\n#${a} {\n  background: #282d35;\n  border-radius: 0.6em;\n  display: flex;\n  flex-direction: column;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n\tfont-size: 10px;\n  height: 90%;\n  min-height: 20em;\n  left: 50%;\n  opacity: 1;\n  overflow: hidden;\n  padding-bottom: 3em;\n  position: absolute;\n  top: 2rem;\n  transform: translateX(-50%);\n  transition: opacity .25s ease-in-out;\n  width: 95%;\n  z-index: 2147483645;\n}\n\n@keyframes ${a}-hidden-display {\n\t0% {\n\t\topacity: 1;\n\t}\n\t99% {\n\t\tdisplay: inline-flex;\n\t\topacity: 0;\n\t}\n\t100% {\n\t\tdisplay: none;\n\t\topacity: 0;\n\t}\n}\n\n#${a}.${a}-hidden {\n  animation: ${a}-hidden-display .3s;\n  animation-fill-mode:forwards;\n  display: none;\n}\n\n#${a}.${a}-min {\n  animation: minimize 10s;\n  bottom: 2em;\n  cursor: pointer;\n  height: 6em;\n  left: auto;\n  min-height: 6em;\n  padding-bottom: 0;\n  position: absolute;\n  right: 2em;\n  top: auto;\n  transform: none;\n  width: 6em;\n}\n\n#${a}.${a}-min #${a}-beacon {\n  display: block;\n}\n\n#${a}-title {\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: normal;\n  margin: 0;\n  padding: 0.6em 0;\n  text-align: center;\n  width: 100%;\n}\n\n#${a}.${a}-min #${a}-title {\n  display: none;\n}\n\n#${a}-title-errors {\n  color: #ff5f58;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${a}-title-warnings {\n  color: #ffbd2e;\n  font-style: normal;\n  padding-left: 1em;\n}\n\n#${a}-problems {\n  overflow-y: auto;\n  padding: 1em 2em;\n}\n\n#${a}-problems pre {\n  color: #ddd;\n  background: #282d35;\n  display: block;\n  font-size: 1.3em;\n\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  white-space: pre-wrap;\n}\n\n#${a}-problems pre em {\n  background: #ff5f58;\n  border-radius: 0.3em;\n  color: #641e16;\n  font-style: normal;\n  line-height: 3em;\n  margin-right: 0.4em;\n  padding: 0.1em 0.4em;\n  text-transform: uppercase;\n}\n\npre#${a}-warnings em {\n  background: #ffbd2e;\n  color: #3e2723;\n}\n\npre#${a}-success {\n  display: none;\n  text-align: center;\n}\n\npre#${a}-success em {\n  background: #7fb900;\n  color: #004d40;\n}\n\n#${a}-problems.${a}-success #${a}-success {\n  display: block;\n}\n\n#${a}.${a}-min #${a}-problems {\n  display: none;\n}\n\n#${a}-nav {\n  opacity: 0.5;\n  padding: 1.2em;\n  position: absolute;\n}\n\n#${a}.${a}-min #${a}-nav {\n  display: none;\n}\n\n#${a}-nav:hover {\n  opacity: 1;\n}\n\n#${a}-nav div {\n  background: #ff5f58;\n  border-radius: 1.2em;\n  cursor: pointer;\n  display: inline-block;\n  height: 1.2em;\n  position: relative;\n  width: 1.2em;\n}\n\ndiv#${a}-min {\n  background: #ffbd2e;\n  margin-left: 0.8em;\n}\n\n#${a}-beacon {\n  border-radius: 3em;\n  display: none;\n  font-size: 10px;\n  height: 3em;\n  margin: 1.6em auto;\n  position: relative;\n  width: 3em;\n}\n\n#${a}-beacon:before, #${a}-beacon:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(127,185,0, 0.2);\n  border-radius: 3em;\n  opacity: 0;\n}\n\n#${a}-beacon:before {\n  animation: ${a}-pulse 3s infinite linear;\n  transform: scale(1);\n}\n\n#${a}-beacon:after {\n  animation: ${a}-pulse 3s 2s infinite linear;\n}\n\n\n@keyframes ${a}-pulse {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  33% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n#${a}-beacon mark {\n  background: rgba(127, 185, 0, 1);\n  border-radius: 100% 100%;\n  height: 1em;\n  left: 1em;\n  position: absolute;\n  top: 1em;\n  width: 1em;\n}\n\n#${a}-beacon.${a}-error mark {\n  background: #ff5f58;\n}\n\n#${a}-beacon.${a}-error:before, #${a}-beacon.error:after {\n  background: rgba(255, 95, 88, 0.2);\n}\n\n#${a}-beacon.${a}-warning mark {\n  background: #ffbd2e;\n}\n\n#${a}-beacon.${a}-warning:before, #${a}-beacon.warning:after {\n  background: rgba(255, 189, 46, 0.2);\n}\n`,c=`\n<aside id="${a}" class="${a}-hidden" title="build status">\n  <figure id="${a}-beacon">\n    <mark/>\n  </figure>\n  <nav id="${a}-nav">\n    <div id="${a}-close" title="close"></div>\n    <div id="${a}-min" title="minmize"></div>\n  </nav>\n  <h1 id="${a}-title">\n    build status\n    <em id="${a}-title-errors"></em>\n    <em id="${a}-title-warnings"></em>\n  </h1>\n  <article id="${a}-problems">\n    <pre id="${a}-success"><em>Build Successful</em></pre>\n    <pre id="${a}-errors"></pre>\n    <pre id="${a}-warnings"></pre>\n  </article>\n</aside>\n`;e.exports={init:(e,n)=>{const t=a+"-hidden";let d,l,u,f,p,h,m,b=!1;const g=()=>{f.innerHTML="",p.innerHTML="",u.classList.remove(a+"-success"),l.className="",h.innerText="",m.innerText=""};e.firstInstance&&document.addEventListener("DOMContentLoaded",()=>{r(s),[d]=o(c),l=document.querySelector(`#${a}-beacon`),u=document.querySelector(`#${a}-problems`),f=document.querySelector(`#${a}-errors`),p=document.querySelector(`#${a}-warnings`),h=document.querySelector(`#${a}-title-errors`),m=document.querySelector(`#${a}-title-warnings`);const e=document.querySelector(`#${a}-close`),n=document.querySelector(`#${a}-min`);d.addEventListener("click",()=>{d.classList.remove(a+"-min")}),e.addEventListener("click",()=>{d.classList.add(a+"-hidden")}),n.addEventListener("click",e=>{d.classList.add(a+"-min"),e.stopImmediatePropagation()})}),i(n,(e,n)=>{if(!d)return;const{compilers:r}=window.webpackPluginServe;switch(e){case"build":g();break;case"problems":(e=>{if(e.length){u.classList.remove(a+"-success"),l.classList.add(a+"-error");for(const n of e){o(`<div><em>Error</em> in ${n}</div>`,f)}h.innerText=e.length+" Error(s)"}else h.innerText="";d.classList.remove(t)})(n.errors),(e=>{if(e.length){u.classList.remove(a+"-success"),l.classList.contains(a+"-error")||l.classList.add(a+"-warning");for(const n of e){o(`<div><em>Warning</em> in ${n}</div>`,p)}m.innerText=e.length+" Warning(s)"}else m.innerText="";d.classList.remove(t)})(n.warnings),d.classList.remove(t),b=n.errors.length||n.warnings.length;break;case"replace":for(const e of Object.keys(r))if(!r[e])return;!b||f.children.length||p.children.length||(g(),b=!1,u.classList.add(a+"-success"),d.classList.remove(t),setTimeout(()=>d.classList.add(t),3e3))}})}}},function(e,n,t){"use strict";t.r(n);var r=t(6),o=t.n(r);t(12);function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"mount",value:function(e){document.title="foo",e.innerHTML=o.a,e.querySelector(".foo__gobar").addEventListener("click",(function(){f.go("/bar")}))}}])&&i(n.prototype,t),r&&i(n,r),e}(),s=t(7),c=t.n(s);t(13);function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u={"/foo":a,"/bar":function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"mount",value:function(e){document.title="bar",e.innerHTML=c.a,e.querySelector(".bar__gofoo").addEventListener("click",(function(){f.go("/foo")}))}}])&&d(n.prototype,t),r&&d(n,r),e}()},f=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"start",value:function(){var e=this;window.addEventListener("popstate",(function(){e.load(location.pathname)})),this.load(location.pathname)}},{key:"go",value:function(e){history.pushState({},"",e),this.load(e)}},{key:"load",value:function(e){"/"===e&&(e="/foo"),(new u[e]).mount(document.body)}}])&&l(n.prototype,t),r&&l(n,r),e}());f.start()}]);