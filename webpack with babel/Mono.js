(()=>{var e={4963:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},6793:(e,n,r)=>{"use strict";var t=r(4496)(!0);e.exports=function(e,n,r){return n+(r?t(e,n).length:1)}},7007:(e,n,r)=>{var t=r(5286);e.exports=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e}},1488:(e,n,r)=>{var t=r(2032),o=r(6314)("toStringTag"),a="Arguments"==t(function(){return arguments}());e.exports=function(e){var n,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),o))?r:a?t(n):"Object"==(i=t(n))&&"function"==typeof n.callee?"Arguments":i}},2032:e=>{var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},5645:e=>{var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},741:(e,n,r)=>{var t=r(4963);e.exports=function(e,n,r){if(t(e),void 0===n)return e;switch(r){case 1:return function(r){return e.call(n,r)};case 2:return function(r,t){return e.call(n,r,t)};case 3:return function(r,t,o){return e.call(n,r,t,o)}}return function(){return e.apply(n,arguments)}}},1355:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},7057:(e,n,r)=>{e.exports=!r(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:(e,n,r)=>{var t=r(5286),o=r(3816).document,a=t(o)&&t(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},2985:(e,n,r)=>{var t=r(3816),o=r(5645),a=r(7728),i=r(7234),c=r(741),s=function(e,n,r){var l,u,d,p,f=e&s.F,v=e&s.G,h=e&s.S,g=e&s.P,m=e&s.B,y=v?t:h?t[n]||(t[n]={}):(t[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),b=x.prototype||(x.prototype={});for(l in v&&(r=n),r)d=((u=!f&&y&&void 0!==y[l])?y:r)[l],p=m&&u?c(d,t):g&&"function"==typeof d?c(Function.call,d):d,y&&i(y,l,d,e&s.U),x[l]!=d&&a(x,l,p),g&&b[l]!=d&&(b[l]=d)};t.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},4253:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},8082:(e,n,r)=>{"use strict";r(8269);var t=r(7234),o=r(7728),a=r(4253),i=r(1355),c=r(6314),s=r(1165),l=c("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,n,r){var p=c(e),f=!a((function(){var n={};return n[p]=function(){return 7},7!=""[e](n)})),v=f?!a((function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[p](""),!n})):void 0;if(!f||!v||"replace"===e&&!u||"split"===e&&!d){var h=/./[p],g=r(i,p,""[e],(function(e,n,r,t,o){return n.exec===s?f&&!o?{done:!0,value:h.call(n,r,t)}:{done:!0,value:e.call(r,n,t)}:{done:!1}})),m=g[0],y=g[1];t(String.prototype,e,m),o(RegExp.prototype,p,2==n?function(e,n){return y.call(e,this,n)}:function(e){return y.call(e,this)})}}},3218:(e,n,r)=>{"use strict";var t=r(7007);e.exports=function(){var e=t(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},18:(e,n,r)=>{e.exports=r(3825)("native-function-to-string",Function.toString)},3816:e=>{var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},9181:e=>{var n={}.hasOwnProperty;e.exports=function(e,r){return n.call(e,r)}},7728:(e,n,r)=>{var t=r(9275),o=r(681);e.exports=r(7057)?function(e,n,r){return t.f(e,n,o(1,r))}:function(e,n,r){return e[n]=r,e}},1734:(e,n,r)=>{e.exports=!r(7057)&&!r(4253)((function(){return 7!=Object.defineProperty(r(2457)("div"),"a",{get:function(){return 7}}).a}))},5286:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},4461:e=>{e.exports=!1},9275:(e,n,r)=>{var t=r(7007),o=r(1734),a=r(1689),i=Object.defineProperty;n.f=r(7057)?Object.defineProperty:function(e,n,r){if(t(e),n=a(n,!0),t(r),o)try{return i(e,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[n]=r.value),e}},681:e=>{e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},7234:(e,n,r)=>{var t=r(3816),o=r(7728),a=r(9181),i=r(3953)("src"),c=r(18),s="toString",l=(""+c).split(s);r(5645).inspectSource=function(e){return c.call(e)},(e.exports=function(e,n,r,c){var s="function"==typeof r;s&&(a(r,"name")||o(r,"name",n)),e[n]!==r&&(s&&(a(r,i)||o(r,i,e[n]?""+e[n]:l.join(String(n)))),e===t?e[n]=r:c?e[n]?e[n]=r:o(e,n,r):(delete e[n],o(e,n,r)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[i]||c.call(this)}))},7787:(e,n,r)=>{"use strict";var t=r(1488),o=RegExp.prototype.exec;e.exports=function(e,n){var r=e.exec;if("function"==typeof r){var a=r.call(e,n);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==t(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,n)}},1165:(e,n,r)=>{"use strict";var t,o,a=r(3218),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,l=(t=/a/,o=/b*/g,i.call(t,"a"),i.call(o,"a"),0!==t.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(s=function(e){var n,r,t,o,s=this;return u&&(r=new RegExp("^"+s.source+"$(?!\\s)",a.call(s))),l&&(n=s.lastIndex),t=i.call(s,e),l&&t&&(s.lastIndex=s.global?t.index+t[0].length:n),u&&t&&t.length>1&&c.call(t[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(t[o]=void 0)})),t}),e.exports=s},3825:(e,n,r)=>{var t=r(5645),o=r(3816),a="__core-js_shared__",i=o[a]||(o[a]={});(e.exports=function(e,n){return i[e]||(i[e]=void 0!==n?n:{})})("versions",[]).push({version:t.version,mode:r(4461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},4496:(e,n,r)=>{var t=r(1467),o=r(1355);e.exports=function(e){return function(n,r){var a,i,c=String(o(n)),s=t(r),l=c.length;return s<0||s>=l?e?"":void 0:(a=c.charCodeAt(s))<55296||a>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):a:e?c.slice(s,s+2):i-56320+(a-55296<<10)+65536}}},1467:e=>{var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},875:(e,n,r)=>{var t=r(1467),o=Math.min;e.exports=function(e){return e>0?o(t(e),9007199254740991):0}},508:(e,n,r)=>{var t=r(1355);e.exports=function(e){return Object(t(e))}},1689:(e,n,r)=>{var t=r(5286);e.exports=function(e,n){if(!t(e))return e;var r,o;if(n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!t(o=r.call(e)))return o;if(!n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3953:e=>{var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},6314:(e,n,r)=>{var t=r(3825)("wks"),o=r(3953),a=r(3816).Symbol,i="function"==typeof a;(e.exports=function(e){return t[e]||(t[e]=i&&a[e]||(i?a:o)("Symbol."+e))}).store=t},8269:(e,n,r)=>{"use strict";var t=r(1165);r(2985)({target:"RegExp",proto:!0,forced:t!==/./.exec},{exec:t})},9357:(e,n,r)=>{"use strict";var t=r(7007),o=r(508),a=r(875),i=r(1467),c=r(6793),s=r(7787),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;r(8082)("replace",2,(function(e,n,r,v){return[function(t,o){var a=e(this),i=null==t?void 0:t[n];return void 0!==i?i.call(t,a,o):r.call(String(a),t,o)},function(e,n){var o=v(r,e,this,n);if(o.done)return o.value;var d=t(e),p=String(this),f="function"==typeof n;f||(n=String(n));var g=d.global;if(g){var m=d.unicode;d.lastIndex=0}for(var y=[];;){var x=s(d,p);if(null===x)break;if(y.push(x),!g)break;""===String(x[0])&&(d.lastIndex=c(p,a(d.lastIndex),m))}for(var b,w="",E=0,T=0;T<y.length;T++){x=y[T];for(var S=String(x[0]),A=l(u(i(x.index),p.length),0),j=[],L=1;L<x.length;L++)j.push(void 0===(b=x[L])?b:String(b));var M=x.groups;if(f){var I=[S].concat(j,A,p);void 0!==M&&I.push(M);var C=String(n.apply(void 0,I))}else C=h(S,p,A,j,M,n);A>=E&&(w+=p.slice(E,A)+C,E=A+S.length)}return w+p.slice(E)}];function h(e,n,t,a,i,c){var s=t+e.length,l=a.length,u=f;return void 0!==i&&(i=o(i),u=p),r.call(c,u,(function(r,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,t);case"'":return n.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return r;if(u>l){var p=d(u/10);return 0===p?r:p<=l?void 0===a[p-1]?o.charAt(1):a[p-1]+o.charAt(1):r}c=a[u-1]}return void 0===c?"":c}))}}))},9140:(e,n,r)=>{"use strict";r.d(n,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),i=r.n(a)()(o());i.push([e.id,"footer {\r\n  width: 100%;\r\n  height: 70px;\r\n  margin-top: -0px;\r\n  background-color: #283618;\r\n  color: #fefae0;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  letter-spacing: -1px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n",""]);const c=i},2558:(e,n,r)=>{"use strict";r.d(n,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),i=r.n(a)()(o());i.push([e.id,"html {\r\n    scroll-behavior: smooth;\r\n  }\r\n  \r\nbody{\r\n    background: #fefae0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 150px;\r\n}\r\n\r\n.imgs{\r\n    width: 100%;\r\n    align-items: center;\r\n    margin-bottom: 50px;\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n\r\n.icon {\r\n    width: 160px;\r\n    height: 180px;\r\n    margin: 0 25px 0 25px;\r\n}\r\n\r\n.sl{\r\n    height: 300px;\r\n    align-items: initial;\r\n}\r\n\r\n.sender{\r\n    cursor: pointer;\r\n  }\r\n\r\nh1 { color: #606c38; \r\n    font-family: 'Raleway',sans-serif; \r\n    font-size: 62px; \r\n    font-weight: 800; \r\n    line-height: 72px; \r\n    margin: 0px 0 24px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n}\r\n\r\nh2{\r\n    font-family: 'Raleway',sans-serif;  \r\n    font-weight: 500;\r\n    color: #606c38; \r\n    line-height: 40px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n    margin: 50px 50px 50px;\r\n}\r\n\r\n.fin{\r\n    height: 200px;\r\n}",""]);const c=i},5034:(e,n,r)=>{"use strict";r.d(n,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),i=r.n(a)()(o());i.push([e.id,"header{\r\n    width: 100%;\r\n    height: 70px;\r\n    margin-top: -0px;\r\n    background-color: #283618;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.link {\r\n    color: #fefae0;\r\n    width: 150px;\r\n    font-family: Arial;\r\n    margin: 0 auto 0 auto;\r\n    font-size: 45px;\r\n    font-weight: 900;\r\n    letter-spacing: -2px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}",""]);const c=i},3645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},3379:e=>{"use strict";var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{"use strict";var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},9216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,r)=>{"use strict";e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},991:(e,n,r)=>{"use strict";e.exports=r.p+"975b708912f9a0ba2479.png"},3024:(e,n,r)=>{"use strict";e.exports=r.p+"694dec74688c2e2f64bb.png"},2188:(e,n,r)=>{"use strict";e.exports=r.p+"6444c6c89f826a26300d.png"},5671:(e,n,r)=>{"use strict";e.exports=r.p+"4a097d05730afa18a5a8.png"},4850:(e,n,r)=>{"use strict";e.exports=r.p+"faf62b19f391c87c9960.png"},7277:(e,n,r)=>{"use strict";e.exports=r.p+"c89ae93d74d108fe353f.png"},4354:(e,n,r)=>{"use strict";e.exports=r.p+"44ab6dbaf4b389b93aa6.png"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(3379),n=r.n(e),t=r(7795),o=r.n(t),a=r(569),i=r.n(a),c=r(3565),s=r.n(c),l=r(9216),u=r.n(l),d=r(4589),p=r.n(d),f=r(9140),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,r(9357);var h=r(5034),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var m=r(2558),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=u(),n()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;var x=document.getElementById("content");const b=r(991),w=r(3024),E=r(5671),T=r(2188),S=r(4354),A=r(7277),j=r(4850);var L=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"TITLE",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;var c='\n    <div class="imgs">\n        <img class="icon" src="'.concat(e,'">\n    </div>\n    <h1>').concat(n,"</h1>\n    <h2>").concat(r,"</h2>\n    "),s='\n        <h1>Selecciona a donde quieres ir</h1>\n        <div class="imgs sl">\n            <img id="'.concat(o,'" class="icon sender" src="').concat(t,'">\n            <img id="').concat(i,'" class="icon sender" src="').concat(a,'">\n        </div>\n    ');const l='\n        <h1>Continuar</h1>\n        <div class="imgs sl">\n            <img id="'.concat(o,'" class="icon sender" src="').concat(t,'">\n        </div>\n    '),u='<h1 class="fin">Fin.</h1>';return c+(null!=t&&null!=a?s:null!=t&&null==a?l:u)},M=[["Has aparecido, ahora eres un mono","Poco a poco la sabana africana se ha vuelto más caliente y los árboles luchan por sobrevivir. Tu familia es un grupo de monos nómadas que \n        buscan frutas en los pocos árobles que quedan. Eres un mono muy curioso y, a pesar de ser pequeño, te atrae todo. No has decidido que área \n        del árbol explorar primero."],["Copa del Árbol","Observas aves de rapiña en el cielo, están volando sobre los restosviejos de una cebra. A lo lejos hay hienas, ellas no suelen \n        acercarse al área donde están los monos porque la población de machos es alta y, en conjunto, son muy agresivos."],["Ramas bajas","Observas un tronco podrido tirado en el suelo. Es normal encontrar insectos ricos para los monos cuando se rompe la corteza. Es un poco \n        grande y tratar de romperlo podría ser difícil para ti. También obervas una línea de hormigas dirigiéndose al interior del árbol donde los \n        monos se resguardan. Parece que tienen un nido muy grande por dentro."],["Nido Líder","Entre todos hablan que las hienas se están acercando mucho al área donde donde se encuentran y la mitad de los monos machos no han \n        regresado de recolectar ramas para seguir construyendo más nidos. De pronto sientes por detrás que algo te muerde violentamente y te \n        lleva arrastrado a toda velocidad hacia el campo donde no podrás escapar. Las hienas te atraparon."],["Tronco Podrido","El mono baja del árbol hacia el tronco, ve que se está moviendo y te llama la atención a lo lejos se escuchan pequeños chillidos y ve \n        que hay un gran hueco en uno de los costados. Parece que hay un animal dentro que está atorado. Con todas las fuerzas se rompe el tronco \n        y se observa que hay un pequeño león siendo estrangulado por una serpiente grande y robusta. <br>\n        <br>\n        De emergencia el mono llama al líder de la manada para que salve al leoncito. El líder toma a la serpiente y la lanza lejos salvando al \n        pequeño león. <br>\n        <br>\n        Llega un grupo de leónes a toda velocidad y observan que los monos encontraron a el leoncito perdido. Agradecidos se lo llevan y prometen \n        protegerlos por siempre."],["¡AYUDA!","El león padre aparece de pronto y se lanza sobre las hienas rasgándolas a todas con sus grandes garras salvando al pobre mono. <br><br>\n        En ese momento llegan todos los monos a toda velocidad asustados por lo que había pasado, agradecidos con el león por haber salvado al \n        pequeño mono prometieron apoyar a los leones en todo lo que necesitaran."]];window.onload=function(){document.body.insertAdjacentElement("afterbegin",(()=>{const e=document.createElement("header"),n=document.createElement("div");return n.id="lnk",n.className="link",n.innerHTML="Inicio",e.appendChild(n),n.addEventListener("click",(function(){"./Inicio.html"==window.location.pathname?window.scrollTo(0,700):window.location.replace("./Inicio.html")})),e})()),document.body.insertAdjacentElement("beforeend",(()=>{const e=document.createElement("footer");return e.innerHTML="\n        @Copyright Juan Carlos Baján Castro 20109 - All Right Reserved.  \n    ",e})()),x.innerHTML=L(E,M[0][0],M[0][1],b,"CopaArbol",w,"Branch"),I()};const I=()=>{document.getElementById("CopaArbol").addEventListener("click",(function(){x.innerHTML=L(T,M[1][0],M[1][1],S,"treeHouse",w,"Branch"),window.scrollTo(0,0),C()})),document.getElementById("Branch").addEventListener("click",(function(){x.innerHTML=L(T,M[2][0],M[2][1],b,"CopaArbol",A,"Log"),window.scrollTo(0,0),q()}))},C=()=>{document.getElementById("treeHouse").addEventListener("click",(function(){x.innerHTML=L(T,M[3][0],M[3][1],j,"Leon"),window.scrollTo(0,0),k()})),document.getElementById("Branch").addEventListener("click",(function(){x.innerHTML=L(T,M[2][0],M[2][1],b,"CopaArbol",A,"Log"),window.scrollTo(0,0),q()}))},q=()=>{document.getElementById("Log").addEventListener("click",(function(){x.innerHTML=L(T,M[4][0],M[4][1]),window.scrollTo(0,0)})),document.getElementById("CopaArbol").addEventListener("click",(function(){x.innerHTML=L(T,M[1][0],M[1][1],S,"treeHouse",w,"Branch"),window.scrollTo(0,0),C()}))},k=()=>{document.getElementById("Leon").addEventListener("click",(function(){x.innerHTML=L(T,M[5][0],M[5][1]),window.scrollTo(0,0)}))}})()})();