(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(25),i=t.n(r),c=(t(74),t(75),t(31)),l=t(21),s=t(27),u=t(36),d=t(37),f=t.n(d),p=t(60),g=t(108),b=t(105),v=t(102),w=t(103),m=t(109),h=t(23),y=t(104),O=t(107),j=Object(v.a)(function(n,e){return Object(w.a)(Object(m.a)(n,Object(h.a)(e)),Object(y.a)(e))}),E=function(n){return n.replace(/_/g," ").replace(/-/g," ").replace(/(?:^\w|[A-Z]|_|\b\w)/g,function(n,e){return 0===e?n.toLowerCase():n.toUpperCase()}).replace(/\s+/g,"")},k=function n(e){return Object(b.a)(Array,e)?Object(m.a)(n,e):Object(b.a)(Object,e)?Object(O.a)(Object(m.a)(n),j(E))(e):e},L=function(n,e){var t=Object(p.a)(["content-type"],e);return Object(g.a)("application/json",t)?k(JSON.parse(n)):Object(b.a)(Object,n)||Object(b.a)(Array,n)?k(n):n},x=t(106),A=t(38),S=t(61),N=t.n(S);function U(){var n=Object(u.a)(["\n    display: none;\n    padding: 10px 20px;\n    font-size: 20px;\n    border: #f9dc9e 1px solid;\n    background: transparent;\n    border-radius: 8px;\n    color: #f9dc9e;\n    \n    :active {\n      background-color: #42484a;\n    }\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n    width: 100%;\n    padding: 20px;\n    box-sizing: border-box;\n"]);return W=function(){return n},n}function C(){var n=Object(u.a)(["\n  background-color: #303435;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFF;\n  font-size: 30px;\n"]);return C=function(){return n},n}var I=A.a.div(C()),J=A.a.img(W()),R=A.a.button(U()),z=[{component:function(n){var e=a.a.useState(null),t=Object(s.a)(e,2),o=t[0],r=t[1],i=a.a.useState(!0),c=Object(s.a)(i,2),l=c[0],u=c[1];return a.a.useEffect(function(){o||(f.a.defaults.baseURL="https://swapi.co/api",f.a.defaults.transformResponse=[L],f.a).get("/people/1/").then(function(n){var e,t,o=Object(x.a)("data",n);r(o),u(!1),e="data",t=o,localStorage.setItem(e,JSON.stringify(t))}).catch(function(n){r(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(n);if(t)try{return JSON.parse(t)}catch(o){}return e}("data")),u(!1)})}),a.a.createElement(I,null,a.a.createElement("div",null,a.a.createElement("div",null,o&&o.gender," ",l&&"Loading..."),a.a.createElement(J,{src:N.a,alt:""}),a.a.createElement(R,{id:"add"}," INSTALL ")))},path:"/"},{component:function(n){return a.a.createElement("div",null,"Login",a.a.createElement(c.b,{to:"/"},"Home"))},path:"/login"}];var B=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,{basename:"/pwa"},z.map(function(n,e){return a.a.createElement(l.a,Object.assign({key:e},n,{exact:!0}))})))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var T=t(29);t(99);window.addEventListener("load",function(){var n,e=document.getElementById("add");function t(n){navigator.onLine?(T.a.notify("Online"),document.body.classList.remove("offline")):(T.a.notify("Offline"),document.body.classList.add("offline"))}window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),n=t,console.warn(e),console.warn(e.style),e.style.display="inline-block"}),window.addEventListener("online",t),window.addEventListener("offline",t),e.addEventListener("click",function(t){e.style.display="none",n.prompt(),n.userChoice.then(function(e){"accepted"===e.outcome?(T.a.notify("App is installing"),console.log("User accepted the A2HS prompt")):(T.a.notify("You can install app later from your settings"),console.log("User dismissed the A2HS prompt")),n=null})})}),i.a.render(a.a.createElement(B,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/pwa","/service-worker.js");F?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):H(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(e,n)})}}()},61:function(n,e,t){n.exports=t.p+"static/media/logo.73f300bf.png"},69:function(n,e,t){n.exports=t(100)},74:function(n,e,t){},75:function(n,e,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.45590d5e.chunk.js.map