(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(25),i=t.n(r),c=(t(74),t(75),t(31)),l=t(21),s=t(28),d=t(36),u=t(37),f=t.n(u),p=t(60),b=t(108),g=t(105),v=t(102),w=t(103),m=t(109),h=t(23),O=t(104),j=t(107),y=Object(v.a)(function(n,e){return Object(w.a)(Object(m.a)(n,Object(h.a)(e)),Object(O.a)(e))}),E=function(n){return n.replace(/_/g," ").replace(/-/g," ").replace(/(?:^\w|[A-Z]|_|\b\w)/g,function(n,e){return 0===e?n.toLowerCase():n.toUpperCase()}).replace(/\s+/g,"")},L=function n(e){return Object(g.a)(Array,e)?Object(m.a)(n,e):Object(g.a)(Object,e)?Object(j.a)(Object(m.a)(n),y(E))(e):e},k=function(n,e){var t=Object(p.a)(["content-type"],e);return Object(b.a)("application/json",t)?L(JSON.parse(n)):Object(g.a)(Object,n)||Object(g.a)(Array,n)?L(n):n},x=t(106),S=t(38),A=t(61),N=t.n(A);function W(){var n=Object(d.a)(["\n    display: none;\n    padding: 10px 20px;\n    font-size: 20px;\n    border: #f9dc9e 1px solid;\n    background: transparent;\n    border-radius: 8px;\n    color: #f9dc9e;\n    \n    :active {\n      background-color: #42484a;\n    }\n"]);return W=function(){return n},n}function I(){var n=Object(d.a)(["\n    width: 100%;\n    padding: 20px;\n    box-sizing: border-box;\n"]);return I=function(){return n},n}function B(){var n=Object(d.a)(["\n  background-color: #303435;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFF;\n  font-size: 30px;\n"]);return B=function(){return n},n}var C=S.a.div(B()),J=S.a.img(I()),R=S.a.button(W()),U=[{component:function(n){var e=o.a.useState(null),t=Object(s.a)(e,2),a=t[0],r=t[1],i=o.a.useState(!0),c=Object(s.a)(i,2),l=c[0],d=c[1];return o.a.useEffect(function(){a||(f.a.defaults.baseURL="https://swapi.co/api",f.a.defaults.transformResponse=[k],f.a).get("/people/1/").then(function(n){var e,t,a=Object(x.a)("data",n);r(a),d(!1),e="data",t=a,localStorage.setItem(e,JSON.stringify(t))}).catch(function(n){r(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=localStorage.getItem(n);if(t)try{return JSON.parse(t)}catch(a){}return e}("data")),d(!1)})}),o.a.createElement(C,null,o.a.createElement("div",null,o.a.createElement("div",null,a&&a.gender," ",l&&"Loading..."),o.a.createElement(J,{src:N.a,alt:""}),o.a.createElement(R,{id:"addBtn"},"Installed")))},path:"/"},{component:function(n){return o.a.createElement("div",null,"Login",o.a.createElement(c.b,{to:"/"},"Home"))},path:"/login"}];var z=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,{basename:""},U.map(function(n,e){return o.a.createElement(l.a,Object.assign({key:e},n,{exact:!0}))})))},F=t(27);var H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(n,e){navigator.serviceWorker.register(n).then(function(n){console.warn("HEELLL",n),n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(F.a.notify("New content is available and will be used when all"),console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var T;t(99);window.addEventListener("load",function(){var n=document.getElementById("addBtn");function e(e){console.warn(n),navigator.onLine?(F.a.notify("Online"),document.body.classList.remove("offline")):(F.a.notify("Offline"),document.body.classList.add("offline"))}window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),T=e,n.style.display="inline-block"}),n.addEventListener("click",function(e){n.style.display="none",T.prompt(),F.a.notify("Installing")}),window.addEventListener("online",e),window.addEventListener("offline",e)}),i.a.render(o.a.createElement(z,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/sw.js");H?(function(n,e){fetch(n).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):P(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):P(e,n)})}}()},61:function(n,e,t){n.exports=t.p+"static/media/logo.73f300bf.png"},69:function(n,e,t){n.exports=t(100)},74:function(n,e,t){},75:function(n,e,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.d804b69f.chunk.js.map