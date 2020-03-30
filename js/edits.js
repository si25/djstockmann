
var hover = getElementByClassName(hover);
var currentPage = getElementByClassName(selected);

for(let i=0;i<hover.lenght; i++) {
  panels[i].addEventListener("mouseOver", hoverCSS);
  panels[i].addEventListener("mouseLeave", noHoverCSS);
}

function hoverCSS(){
  var hoverChange = hover.style.borderBottom = '1px solid #151515';
//  hoverChange =+ hover.style.color = '#151515';
  var currentPageChange = currentPage.style.borderBottom = 'none'; 
//  currentPageChange =+ currentPage.style.color = '#a9a9a9';
}

//function noHoverCSS(){
//  var hoverChange = hover.style.borderBottom = 'none';
//  hoverChange =+ hover.style.color = '#a9a9a9';
//  var currentPageChange = curren
//}




//
//var panels = document.getElementsByClassName('hoverButton');
//
//for(let i=0; i<panels.length; i++) {
//panels[i].addEventListener("mouseover", moveIt);
//panels[i].addEventListener("mouseleave", dontMoveIt);
//}
//
//function moveIt() {
//  var blah = this.parentElement.nextElementSibling;
//  blah.style.display = 'block';
//}
//
//function dontMoveIt () {
//  var blah = this.parentElement.nextElementSibling;
//  blah.style.display = 'none';
//}





//$(document).ready(function(){
//     $("#a").mouseover(function(){
//         $("#b").css("background-color", "red");
//     });
//});