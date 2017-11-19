// Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.

// For example, after appendChildren is executed, the following divs:

// <div id="a">
//   <div id="b">
//   </div>
// </div>
// should take the following form (assuming decorateDiv does nothing):

// <div id="a">
//   <div id="b">
//     <div></div>
//   </div>
//   <div></div>
// </div>
// The code below should do the job, but for some reason it goes into an infinite loop. Fix the bugs.

// function appendChildren() {
//     var allDivs = document.getElementsByTagName("div");
  
//     for (var i = 0; i < allDivs.length; i++) {
//       var newDiv = document.createElement("div");
//       decorateDiv(newDiv);
//       allDivs[i].appendChild(newDiv);
//     }
//   }
  
//   // Mock of decorateDiv function for testing purposes
//   function decorateDiv(div) {}



// solution
function appendChildren() {
    var allDivs = document.getElementsByTagName("div");
    var len = allDivs.length;
  
    for (var i = 0; i < len; i++) {
      var newDiv = document.createElement("div");
      decorateDiv(newDiv);
      allDivs[i].appendChild(newDiv);
    }
  }
  
  // Mock of decorateDiv function for testing purposes
  function decorateDiv(div) {}