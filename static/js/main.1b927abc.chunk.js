(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(25),i=t.n(r),c=(t(74),t(75),t(31)),s=t(21),l=t(27),u=t(40),f=t(36),d=t.n(f),p=t(60),g=t(108),w=t(105),b=t(102),v=t(103),m=t(109),h=t(23),O=t(104),j=t(107),y=Object(b.a)(function(e,n){return Object(v.a)(Object(m.a)(e,Object(h.a)(n)),Object(O.a)(n))}),E=function(e){return e.replace(/_/g," ").replace(/-/g," ").replace(/(?:^\w|[A-Z]|_|\b\w)/g,function(e,n){return 0===n?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")},S=function e(n){return Object(w.a)(Array,n)?Object(m.a)(e,n):Object(w.a)(Object,n)?Object(j.a)(Object(m.a)(e),y(E))(n):n},A=function(e,n){var t=Object(p.a)(["content-type"],n);return Object(g.a)("application/json",t)?S(JSON.parse(e)):Object(w.a)(Object,e)||Object(w.a)(Array,e)?S(e):e},L=t(106),k=t(41),x=t(61),U=t.n(x);function W(){var e=Object(u.a)(["\n    width: 100%;\n    padding: 20px;\n    box-sizing: border-box;\n"]);return W=function(){return e},e}function C(){var e=Object(u.a)(["\n  background-color: #303435;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFF;\n  font-size: 30px;\n"]);return C=function(){return e},e}var N=k.a.div(C()),H=k.a.img(W()),J=[{component:function(e){var n=a.a.useState(null),t=Object(l.a)(n,2),o=t[0],r=t[1],i=a.a.useState(!0),c=Object(l.a)(i,2),s=c[0],u=c[1];return a.a.useEffect(function(){o||(d.a.defaults.baseURL="https://swapi.co/api",d.a.defaults.transformResponse=[A],d.a).get("/people/1/").then(function(e){var n,t,o=Object(L.a)("data",e);r(o),u(!1),n="data",t=o,localStorage.setItem(n,JSON.stringify(t))}).catch(function(e){r(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(o){}return n}("data")),u(!1)})}),a.a.createElement(N,null,a.a.createElement("div",null,a.a.createElement("div",null,o&&o.name," ",s&&"Loading..."),a.a.createElement(H,{src:U.a,alt:""})))},path:"/"},{component:function(e){return a.a.createElement("div",null,"Login",a.a.createElement(c.b,{to:"/"},"Home"))},path:"/login"}];var R=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,{basename:"/pwa"},J.map(function(e,n){return a.a.createElement(s.a,Object.assign({key:n},e,{exact:!0}))})))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var z,B=t(28);t(99);window.addEventListener("beforeinstallprompt",function(e){B.a.notify("Installing"),e.preventDefault(),(z=e).prompt(),z.userChoice.then(function(e){"accepted"===e.outcome?(B.a.notify("User accepted the A2HS prompt"),console.log("User accepted the A2HS prompt")):(B.a.notify("User dismissed the A2HS prompt"),console.log("User dismissed the A2HS prompt")),z=null})}),window.addEventListener("load",function(){function e(e){navigator.onLine?(B.a.notify("Online"),document.body.classList.remove("offline")):(B.a.notify("Offline"),document.body.classList.add("offline"))}window.addEventListener("online",e),window.addEventListener("offline",e)}),i.a.render(a.a.createElement(R,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa","/service-worker.js");I?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):F(n,e)})}}()},61:function(e,n,t){e.exports=t.p+"static/media/logo.73f300bf.png"},69:function(e,n,t){e.exports=t(100)},74:function(e,n,t){},75:function(e,n,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.1b927abc.chunk.js.map