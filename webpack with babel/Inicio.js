(()=>{var r={4963:r=>{r.exports=function(r){if("function"!=typeof r)throw TypeError(r+" is not a function!");return r}},6793:(r,n,e)=>{"use strict";var t=e(4496)(!0);r.exports=function(r,n,e){return n+(e?t(r,n).length:1)}},7007:(r,n,e)=>{var t=e(5286);r.exports=function(r){if(!t(r))throw TypeError(r+" is not an object!");return r}},1488:(r,n,e)=>{var t=e(2032),o=e(6314)("toStringTag"),i="Arguments"==t(function(){return arguments}());r.exports=function(r){var n,e,a;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(e=function(r,n){try{return r[n]}catch(r){}}(n=Object(r),o))?e:i?t(n):"Object"==(a=t(n))&&"function"==typeof n.callee?"Arguments":a}},2032:r=>{var n={}.toString;r.exports=function(r){return n.call(r).slice(8,-1)}},5645:r=>{var n=r.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},741:(r,n,e)=>{var t=e(4963);r.exports=function(r,n,e){if(t(r),void 0===n)return r;switch(e){case 1:return function(e){return r.call(n,e)};case 2:return function(e,t){return r.call(n,e,t)};case 3:return function(e,t,o){return r.call(n,e,t,o)}}return function(){return r.apply(n,arguments)}}},1355:r=>{r.exports=function(r){if(null==r)throw TypeError("Can't call method on  "+r);return r}},7057:(r,n,e)=>{r.exports=!e(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:(r,n,e)=>{var t=e(5286),o=e(3816).document,i=t(o)&&t(o.createElement);r.exports=function(r){return i?o.createElement(r):{}}},2985:(r,n,e)=>{var t=e(3816),o=e(5645),i=e(7728),a=e(7234),c=e(741),s=function(r,n,e){var u,l,p,f,d=r&s.F,v=r&s.G,h=r&s.S,g=r&s.P,x=r&s.B,m=v?t:h?t[n]||(t[n]={}):(t[n]||{}).prototype,y=v?o:o[n]||(o[n]={}),b=y.prototype||(y.prototype={});for(u in v&&(e=n),e)p=((l=!d&&m&&void 0!==m[u])?m:e)[u],f=x&&l?c(p,t):g&&"function"==typeof p?c(Function.call,p):p,m&&a(m,u,p,r&s.U),y[u]!=p&&i(y,u,f),g&&b[u]!=p&&(b[u]=p)};t.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,r.exports=s},4253:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},8082:(r,n,e)=>{"use strict";e(8269);var t=e(7234),o=e(7728),i=e(4253),a=e(1355),c=e(6314),s=e(1165),u=c("species"),l=!i((function(){var r=/./;return r.exec=function(){var r=[];return r.groups={a:"7"},r},"7"!=="".replace(r,"$<a>")})),p=function(){var r=/(?:)/,n=r.exec;r.exec=function(){return n.apply(this,arguments)};var e="ab".split(r);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();r.exports=function(r,n,e){var f=c(r),d=!i((function(){var n={};return n[f]=function(){return 7},7!=""[r](n)})),v=d?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===r&&(e.constructor={},e.constructor[u]=function(){return e}),e[f](""),!n})):void 0;if(!d||!v||"replace"===r&&!l||"split"===r&&!p){var h=/./[f],g=e(a,f,""[r],(function(r,n,e,t,o){return n.exec===s?d&&!o?{done:!0,value:h.call(n,e,t)}:{done:!0,value:r.call(e,n,t)}:{done:!1}})),x=g[0],m=g[1];t(String.prototype,r,x),o(RegExp.prototype,f,2==n?function(r,n){return m.call(r,this,n)}:function(r){return m.call(r,this)})}}},3218:(r,n,e)=>{"use strict";var t=e(7007);r.exports=function(){var r=t(this),n="";return r.global&&(n+="g"),r.ignoreCase&&(n+="i"),r.multiline&&(n+="m"),r.unicode&&(n+="u"),r.sticky&&(n+="y"),n}},18:(r,n,e)=>{r.exports=e(3825)("native-function-to-string",Function.toString)},3816:r=>{var n=r.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},9181:r=>{var n={}.hasOwnProperty;r.exports=function(r,e){return n.call(r,e)}},7728:(r,n,e)=>{var t=e(9275),o=e(681);r.exports=e(7057)?function(r,n,e){return t.f(r,n,o(1,e))}:function(r,n,e){return r[n]=e,r}},1734:(r,n,e)=>{r.exports=!e(7057)&&!e(4253)((function(){return 7!=Object.defineProperty(e(2457)("div"),"a",{get:function(){return 7}}).a}))},5286:r=>{r.exports=function(r){return"object"==typeof r?null!==r:"function"==typeof r}},4461:r=>{r.exports=!1},9275:(r,n,e)=>{var t=e(7007),o=e(1734),i=e(1689),a=Object.defineProperty;n.f=e(7057)?Object.defineProperty:function(r,n,e){if(t(r),n=i(n,!0),t(e),o)try{return a(r,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(r[n]=e.value),r}},681:r=>{r.exports=function(r,n){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:n}}},7234:(r,n,e)=>{var t=e(3816),o=e(7728),i=e(9181),a=e(3953)("src"),c=e(18),s="toString",u=(""+c).split(s);e(5645).inspectSource=function(r){return c.call(r)},(r.exports=function(r,n,e,c){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),r[n]!==e&&(s&&(i(e,a)||o(e,a,r[n]?""+r[n]:u.join(String(n)))),r===t?r[n]=e:c?r[n]?r[n]=e:o(r,n,e):(delete r[n],o(r,n,e)))})(Function.prototype,s,(function(){return"function"==typeof this&&this[a]||c.call(this)}))},7787:(r,n,e)=>{"use strict";var t=e(1488),o=RegExp.prototype.exec;r.exports=function(r,n){var e=r.exec;if("function"==typeof e){var i=e.call(r,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==t(r))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(r,n)}},1165:(r,n,e)=>{"use strict";var t,o,i=e(3218),a=RegExp.prototype.exec,c=String.prototype.replace,s=a,u=(t=/a/,o=/b*/g,a.call(t,"a"),a.call(o,"a"),0!==t.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(s=function(r){var n,e,t,o,s=this;return l&&(e=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),u&&(n=s.lastIndex),t=a.call(s,r),u&&t&&(s.lastIndex=s.global?t.index+t[0].length:n),l&&t&&t.length>1&&c.call(t[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(t[o]=void 0)})),t}),r.exports=s},3825:(r,n,e)=>{var t=e(5645),o=e(3816),i="__core-js_shared__",a=o[i]||(o[i]={});(r.exports=function(r,n){return a[r]||(a[r]=void 0!==n?n:{})})("versions",[]).push({version:t.version,mode:e(4461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},4496:(r,n,e)=>{var t=e(1467),o=e(1355);r.exports=function(r){return function(n,e){var i,a,c=String(o(n)),s=t(e),u=c.length;return s<0||s>=u?r?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?r?c.charAt(s):i:r?c.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},1467:r=>{var n=Math.ceil,e=Math.floor;r.exports=function(r){return isNaN(r=+r)?0:(r>0?e:n)(r)}},875:(r,n,e)=>{var t=e(1467),o=Math.min;r.exports=function(r){return r>0?o(t(r),9007199254740991):0}},508:(r,n,e)=>{var t=e(1355);r.exports=function(r){return Object(t(r))}},1689:(r,n,e)=>{var t=e(5286);r.exports=function(r,n){if(!t(r))return r;var e,o;if(n&&"function"==typeof(e=r.toString)&&!t(o=e.call(r)))return o;if("function"==typeof(e=r.valueOf)&&!t(o=e.call(r)))return o;if(!n&&"function"==typeof(e=r.toString)&&!t(o=e.call(r)))return o;throw TypeError("Can't convert object to primitive value")}},3953:r=>{var n=0,e=Math.random();r.exports=function(r){return"Symbol(".concat(void 0===r?"":r,")_",(++n+e).toString(36))}},6314:(r,n,e)=>{var t=e(3825)("wks"),o=e(3953),i=e(3816).Symbol,a="function"==typeof i;(r.exports=function(r){return t[r]||(t[r]=a&&i[r]||(a?i:o)("Symbol."+r))}).store=t},8269:(r,n,e)=>{"use strict";var t=e(1165);e(2985)({target:"RegExp",proto:!0,forced:t!==/./.exec},{exec:t})},9357:(r,n,e)=>{"use strict";var t=e(7007),o=e(508),i=e(875),a=e(1467),c=e(6793),s=e(7787),u=Math.max,l=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(8082)("replace",2,(function(r,n,e,v){return[function(t,o){var i=r(this),a=null==t?void 0:t[n];return void 0!==a?a.call(t,i,o):e.call(String(i),t,o)},function(r,n){var o=v(e,r,this,n);if(o.done)return o.value;var p=t(r),f=String(this),d="function"==typeof n;d||(n=String(n));var g=p.global;if(g){var x=p.unicode;p.lastIndex=0}for(var m=[];;){var y=s(p,f);if(null===y)break;if(m.push(y),!g)break;""===String(y[0])&&(p.lastIndex=c(f,i(p.lastIndex),x))}for(var b,w="",E=0,S=0;S<m.length;S++){y=m[S];for(var T=String(y[0]),j=u(l(a(y.index),f.length),0),A=[],M=1;M<y.length;M++)A.push(void 0===(b=y[M])?b:String(b));var k=y.groups;if(d){var I=[T].concat(A,j,f);void 0!==k&&I.push(k);var C=String(n.apply(void 0,I))}else C=h(T,f,j,A,k,n);j>=E&&(w+=f.slice(E,j)+C,E=j+T.length)}return w+f.slice(E)}];function h(r,n,t,i,a,c){var s=t+r.length,u=i.length,l=d;return void 0!==a&&(a=o(a),l=f),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return r;case"`":return n.slice(0,t);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var f=p(l/10);return 0===f?e:f<=u?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c}))}}))},9140:(r,n,e)=>{"use strict";e.d(n,{Z:()=>c});var t=e(8081),o=e.n(t),i=e(3645),a=e.n(i)()(o());a.push([r.id,"footer {\r\n  width: 100%;\r\n  height: 70px;\r\n  margin-top: -0px;\r\n  background-color: #283618;\r\n  color: #fefae0;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  letter-spacing: -1px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n",""]);const c=a},5034:(r,n,e)=>{"use strict";e.d(n,{Z:()=>c});var t=e(8081),o=e.n(t),i=e(3645),a=e.n(i)()(o());a.push([r.id,"header{\r\n    width: 100%;\r\n    height: 70px;\r\n    margin-top: -0px;\r\n    background-color: #283618;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.link {\r\n    color: #fefae0;\r\n    width: 150px;\r\n    font-family: Arial;\r\n    margin: 0 auto 0 auto;\r\n    font-size: 45px;\r\n    font-weight: 900;\r\n    letter-spacing: -2px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}",""]);const c=a},9366:(r,n,e)=>{"use strict";e.d(n,{Z:()=>c});var t=e(8081),o=e.n(t),i=e(3645),a=e.n(i)()(o());a.push([r.id,"html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody{\r\n    background: #fefae0;\r\n    display: felx;\r\n    margin: 0px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.perspective-text {\r\n    color: #fefae0;\r\n    width: 425px;\r\n    height: 315px;\r\n    font-family: Arial;\r\n    font-size: 58px;\r\n    font-weight: 900;\r\n    letter-spacing: -2px;\r\n    text-transform: uppercase;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-top: 20%;\r\n    z-index: -1;\r\n\r\n  }\r\n  \r\n  .perspective-line {\r\n    position: absolute;\r\n    height: 50px;\r\n    width: 365px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin-left: -58px;\r\n    z-index: -1;\r\n  }\r\n  \r\n  p {\r\n    margin: 0;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n  \r\n  .perspective-line:nth-child(odd) {\r\n    transform: skew(60deg, -30deg) scaleY(0.667);\r\n    color: #606c38;\r\n    text-align: center; \r\n  }\r\n  \r\n  .perspective-line:nth-child(even) {\r\n    transform: skew(0deg, -30deg) scaleY(1.337);\r\n  }\r\n  \r\n  .perspective-text:hover p {\r\n    transform: translate(0, -50px);\r\n  }\r\n  \r\n  .perspective-line:nth-child(1) {\r\n    left: 29px;\r\n  }\r\n  \r\n  .perspective-line:nth-child(2) {\r\n    left: 58px;\r\n    background: #283618;\r\n    text-align: center; \r\n  }\r\n  \r\n  .perspective-line:nth-child(3) {\r\n    left: 87px;\r\n    background: #fefae0;\r\n  }\r\n  \r\n  .perspective-line:nth-child(4) {\r\n    left: 116px;\r\n    background: #283618;\r\n  }\r\n  \r\n  .perspective-line:nth-child(5) {\r\n    left: 145px;\r\n  }\r\n  \r\n\r\nh1 { color: #606c38; \r\n    font-family: 'Raleway',sans-serif; \r\n    font-size: 62px; \r\n    font-weight: 800; \r\n    line-height: 72px; \r\n    margin: 150px 0 24px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n}\r\n.text { color: #606c38;\r\n    font-family: 'Raleway',sans-serif; \r\n    font-size: 18px; \r\n    font-weight: 800; \r\n    line-height: 32px; \r\n    margin: 0 0 10px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n}\r\n\r\n.personajes {\r\n  width: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg{\r\n  margin: 100px 20px 100px 20px;\r\n}\r\n\r\n.sender{\r\n  cursor: pointer;\r\n}\r\n\r\n",""]);const c=a},3645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<r.length;u++){var l=[].concat(r[u]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},8081:r=>{"use strict";r.exports=function(r){return r[1]}},3379:r=>{"use strict";var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],u=t.base?s[0]+t.base:s[0],l=i[u]||0,p="".concat(u," ").concat(l);i[u]=l+1;var f=e(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var v=o(d,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=t(r,o),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:r=>{"use strict";var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},9216:r=>{"use strict";r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},3565:(r,n,e)=>{"use strict";r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},7795:r=>{"use strict";r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},4589:r=>{"use strict";r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},2188:(r,n,e)=>{"use strict";r.exports=e.p+"6444c6c89f826a26300d.png"},3962:(r,n,e)=>{"use strict";r.exports=e.p+"f9894819ea3f6d9ce5b3.png"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{"use strict";e(9357);var r=e(3379),n=e.n(r),t=e(7795),o=e.n(t),i=e(569),a=e.n(i),c=e(3565),s=e.n(c),u=e(9216),l=e.n(u),p=e(4589),f=e.n(p),d=e(9140),v={};v.styleTagTransform=f(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals;var h=e(5034),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var x=e(9366),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(x.Z,m),x.Z&&x.Z.locals&&x.Z.locals,window.onload=function(){document.body.insertAdjacentElement("afterbegin",(()=>{const r=document.createElement("header"),n=document.createElement("div");return n.id="lnk",n.className="link",n.innerHTML="Inicio",r.appendChild(n),n.addEventListener("click",(function(){"./Inicio.html"==window.location.pathname?window.scrollTo(0,700):window.location.replace("./Inicio.html")})),r})()),document.body.insertAdjacentElement("afterend",(()=>{const r=document.createElement("footer");return r.innerHTML="\n        @Copyright Juan Carlos Baján Castro 20109 - All Right Reserved.  \n    ",r})()),document.getElementById("personajes").innerHTML='<img id="mono" class="sender" src="'.concat(e(2188),'">\n    <img id="leon" class="sender" src="').concat(e(3962),'">'),y()};const y=()=>{document.getElementById("mono").addEventListener("click",(function(){window.location.replace("./Mono.html")})),document.getElementById("leon").addEventListener("click",(function(){window.location.replace("./Leon.html")}))}})()})();