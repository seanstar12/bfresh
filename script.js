function enable() {
  var aids = document.createElement('div');
  aids.style.height = '350px';
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
    
    if (totalHeight <= currentScroll + visibleHeight ) {
      window.location = "http://boards.4chan.org/b/";
    }
  }, 100);
};

window.addEventListener('DOMContentLoaded', enable, false);
