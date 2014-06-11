function enable() {
  var aids = document.createElement('div');
  aids.style.height = '400px';
  aids.style.fontSize = '80px';
  aids.id = 'bfresh';
  aids.innerHTML = "Keep Scrolling For Justice";
  document.body.appendChild(aids);

  setInterval( function() {
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
      document.getElementById('bfresh').innerHTML = temp + "%";    
    } else {
      document.getElementById('bfresh').innerHTML = "Refreshing Page...";    
    }
    if (totalHeight <= currentScroll + visibleHeight ) {
      window.location = "http://boards.4chan.org/b/";
    }
  }, 100);
};

window.addEventListener('DOMContentLoaded', enable, false);
