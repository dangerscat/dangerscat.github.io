window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    console.log("registered worker");
    navigator.serviceWorker
             .register('./sw.js');
    displayNotification();
  }
}

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Hey bbp!');
    });
  }
}
