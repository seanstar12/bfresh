//https://stackoverflow.com/questions/9263671/google-chrome-application-shortcut-how-to-auto-load-javascript/9310273#9310273
var s = document.createElement('script');
s.src = chrome.extension.getURL('js/script.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
