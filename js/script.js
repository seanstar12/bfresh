/*
*  File: script.js
*  Purpose: Adds Progress Bar to bottom and Allows for refresh
*  ToDo: Combine this into /js/functions.js
*/

function enable() {
  addProgressBar();
  var bFresh = setInterval( function() {
    var totalHeight, currentScroll, visibleHeight;
        
    if (document.documentElement.scrollTop) { 
      currentScroll = document.documentElement.scrollTop; 
    } else { 
      currentScroll = document.body.scrollTop; 
    }
            
    totalHeight = document.body.offsetHeight;
    visibleHeight = document.documentElement.clientHeight;
    
    var temp = ((currentScroll+visibleHeight) / totalHeight)*100;
    if (temp < 100) {
      if (temp >= 95){
        var scale =  (temp - 95) * 20 ;
        document.getElementById('bfreshProgress').style.width = scale + "%";    
      }
      document.getElementById('bfresh').innerHTML = temp + "%";    
    } else {
      document.getElementById('bfreshProgress').style.width = "100%";    
      document.getElementById('bfresh').innerHTML = "Refreshing Page...";    
    }
    if (totalHeight <= currentScroll + visibleHeight ) {
      clearInterval(bFresh);
      window.location = window.location.href;
    }
  }, 80);
};

function addProgressBar() {
  
  var progressBar = document.createElement('div');
  progressBar.style.width = '100%';
  progressBar.style.backgroundColor = '#A20F0F';
  progressBar.id = 'bfreshBar';

  var progressBarProgress = document.createElement('div');
  progressBarProgress.style.height = '85px';
  progressBarProgress.style.width = '0%';
  progressBarProgress.style.backgroundColor = '#28DD8E';
  progressBarProgress.id = 'bfreshProgress';

  var progressBarText = document.createElement('div');
  progressBarText.style.height = '85px';
  progressBarText.style.fontSize = '70px';
  progressBarText.style.color = '#fff';
  progressBarText.id = 'bfresh';
 
  var buffer = document.createElement('div');
  buffer.style.height = '275px';
  buffer.id = 'bFreshBuffer';
 
  document.body.appendChild(progressBar);
  document.body.appendChild(buffer);
  document.getElementById('bfreshBar').appendChild(progressBarProgress);
  document.getElementById('bfreshProgress').appendChild(progressBarText);
};

window.addEventListener('DOMContentLoaded', enable, false);
