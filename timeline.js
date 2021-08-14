
//This function is resposible for evaluating whether the viewport has been scrolled enough to accomodate a new list item
var items = document.querySelectorAll(".timeline li");
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


 //callbackFunc() code goes here.

function callbackFunc() {
 for (var i=0;i<items.length; i++ ){
   if(isElementInViewport(items[i])) {
     items[i].classList.add("in-view")
   }
 } 
}

//add the eventListerner to call the callbackFunc if scroll is detected on the window
window.addEventListener("scroll",callbackFunc)