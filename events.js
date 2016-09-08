// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
//var outputTarget = document.getElementById("output-target");
//var sections = document.getElementsByClassName("article-section");

var heading = documentGetElementById("page-header");
var title = documentGetElementById("page-title");
var articleElement = documentGetElementById("article-section");
var userInput = documentGetElementById("keypress-input");
var outputTarget = documentGetElementById("output-target");
var guineaPig = documentGetElementById("guinea-pig");
var colorBtn = documentGetElementById("add-color");
var hulkBtn = documentGetElementById("make-large");
var borderBtn = documentGetElementById("add-border");
var roundBtn = documentGetElementById("add-rounding");
var btns = document.getElementsByTagName("button");

title.addEventListener("mouseover", function(event) {
	outputTarget.innerHTML = "You moved your mouse over the header.";
});

title.addEventListener("mouseout", function(event) {
	outputTarget.innerHTML = "You left me!"
  
});

userInput.addEventListener("keyup", function(event) {
	outputTarget.innerHTML = userInput.value;
});

colorBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("red");
});

hulkBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("hulk");
});

borderBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("border");
});

roundBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("rounded");
});

for (var i = 0; i < articleElement.length; i++) {
	articleElement[0].classList.add("bold");
	articleElement[articleElement.length - 1].classList.add("italic");
}

for (var i = 0; i < btns.length; i++) {
	btns[i].classList.add("block");
}














