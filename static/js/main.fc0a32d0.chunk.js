(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,function(e,n,t){e.exports=t(14)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),i=t.n(r),c=(t(12),t(5)),s=t(3),l=t.n(s),u=t(4),d=t.n(u);t(13);var f=function(){var e=a.a.useState(null),n=Object(c.a)(e,2),t=n[0],o=n[1];return a.a.useEffect(function(){t||d()("https://swapi.co/api/people/1/").then(function(e){return e.text()}).then(function(e){return o(JSON.parse(e))})},[t]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,t&&t.name," ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}window.addEventListener("beforeinstallprompt",function(e){console.warn("INSTALLL")}),i.a.render(a.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(n,e)})}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.fc0a32d0.chunk.js.map