window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    console.log("registered worker");
    navigator.serviceWorker
             .register('./sw.js');
  }
}
