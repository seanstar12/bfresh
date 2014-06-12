/*
*  File: onStart.js
*  Purpose: Injects css/js into the dom
*/

addScripts([
  'js/functions.js'
]);

function addScripts(files){
  var s = "";
  for (var i =0; i< files.length; i++){

    if (files[i].indexOf('js/') > -1){
      s = document.createElement('script');
      s.src = chrome.extension.getURL(files[i]);
    } 
    else if (files[i].indexOf('css/') > -1) {
      s = document.createElement('link');
      s.href = chrome.extension.getURL(files[i]);
      s.rel = 'stylesheet';
    }
    document.documentElement.insertBefore(s);  
  }
  delete s;
}

