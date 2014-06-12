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

function link(text,trigger) {
  this.text = text;
  this.trigger = trigger;
  this.create();
  this.add();
}

link.prototype.create = function() {
  var link = document.createElement('a');
  link.innerHTML = this.text;
  link.style.paddingRight='5px';
  link.id = 'bfresh_'+this.text;
  link.onclick = function(){
    this.trigger();
  }.bind(this);
  this.elm = link;
}

link.prototype.add = function() {
  var nav = document.getElementsByClassName('navLinks')[1];
  nav.appendChild(this.elm);
}

/*
*  General Functions
*/

function addLink() { 
  new link('Expand',imageControl.expandAll);
  new link('Contract',imageControl.contractAll);
}


function contractWebm(a){ 
  var b;
  a.removeEventListener("click",ImageExpansion.collapseWebm,!1);
  b=a.parentNode.parentNode.getElementsByClassName("expandedWebm")[0];
  (a.parentNode.childNodes[1]).style.display="";                      // brings back the image thumb
  a.previousElementSibling.childNodes[3].remove();                    // removes [Close]
  b.parentNode.removeChild(b);                                        // removes webm file
}
