import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'

// . let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
	console.warn('INSTALLL')
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  //e.preventDefault();
  // Stash the event so it can be triggered later.
  //deferredPrompt = e;
});

window.addEventListener("load", () => {
	console.warn('LOADED')
  function handleNetworkChange(event) {
    if (navigator.onLine) {
      toast.notify('Online')
      document.body.classList.remove("offline");
    } else {
      toast.notify('Offline')
      document.body.classList.add("offline");
    }
  }
  window.addEventListener("online", handleNetworkChange);
  window.addEventListener("offline", handleNetworkChange);
});


ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
