/*
*  File: functions.js
*  Purpose: Holds Classes and Functions related to DOM objects
*/



/*
*  Class: imageControl
*  Purpose: Handles all image related actions
*/
var imageControl = {
  expandAll: function() {
    var aLinks = document.getElementsByClassName('fileThumb');
    for (var i=0; i<aLinks.length; i++) ImageExpansion.expand(aLinks[i].childNodes[0]);
  },
  contractAll: function() {
    var aLinks = document.getElementsByClassName('fileThumb');
    for (var i=0; i<aLinks.length; i++) {
      if (aLinks[i].href.indexOf('.webm') > 4){
        contractWebm(aLinks[i]);
      } else {
        ImageExpansion.contract(aLinks[i].childNodes[1]);
      }
    } 
  }
}

/*
*  General Functions
*/
function contractWebm(a){ 
  var b;
  a.removeEventListener("click",ImageExpansion.collapseWebm,!1);
  b=a.parentNode.parentNode.getElementsByClassName("expandedWebm")[0];
  (a.parentNode.childNodes[1]).style.display="";                      // brings back the image thumb
  a.previousElementSibling.childNodes[3].remove();                    // removes [Close]
  b.parentNode.removeChild(b);                                        // removes webm file
}
