(()=>{"use strict";var n,e,t,r,o,a,c,i,s,f,l,u,p,d,m={890:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),f=new URL(t(253),t.b),l=new URL(t(136),t.b),u=new URL(t(833),t.b),p=c()(o()),d=s()(f),m=s()(l),h=s()(u);p.push([n.id,'@font-face {\n  font-family: "Meddon";\n  src: url('+d+');\n  font-weight: 200;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "RobotoSlab";\n  src: url('+m+');\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: "RobotoSlab";\n  background: url('+h+');\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.header {\n  background-color: #000000aa;\n  display: flex;\n  justify-content: center;\n}\n\n.menu {\n  background-color: #000000aa;\n  display: flex;\n  justify-content: center;\n  padding:  0 0 20px 0;\n}\n\nh1 {\n  font-family: "Meddon";\n  font-size: 48px;\n  color: #ffffff;\n  margin: 40px 0 0 0;\n\n}\n\n.menu ul {\n  display: flex;\n  gap: 50px;\n  padding: 0;\n}\n\n.menu ul li {\n  list-style-type: none;\n}\n\n.menu ul li a {\n  text-decoration: none;\n  font-size: 18px;\n  color: #cccccc;\n  padding: 5px 10px;\n}\n\n.menu ul li a:hover {\n  color: #ffffff;\n  background-color: #ffffff33;\n}\n\n.main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main p {\n  flex: 0 1 500px;\n  padding: 50px;\n  background-color: #000000aa;\n  color: #cccccc;\n  text-align: justify;\n}\n\n.footer {\n  background-color: #000000aa;\n  display: flex;\n  justify-content: center;\n  padding:  10px;\n}\n\n.footer span {\n  color: #666666;\n}\n\n',""]);const v=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],f=r.base?s[0]+r.base:s[0],l=a[f]||0,u="".concat(f," ").concat(l);a[f]=l+1;var p=t(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var m=o(d,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),f=0;f<a.length;f++){var l=t(a[f]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},253:(n,e,t)=>{n.exports=t.p+"ca3085ff6b976f7ea3a8.ttf"},136:(n,e,t)=>{n.exports=t.p+"18ac64f1a3ff6c68e6c7.ttf"},833:(n,e,t)=>{n.exports=t.p+"67552834f3aa1adce3f2.jpg"}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,v),t.exports}v.m=m,v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),a=v.n(o),c=v(565),i=v.n(c),s=v(216),f=v.n(s),l=v(589),u=v.n(l),p=v(890),(d={}).styleTagTransform=u(),d.setAttributes=i(),d.insert=a().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=f(),e()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals})();