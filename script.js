// Array of texts to cycle through
var texts = ["A CALL TO SOMALI ART", "A CALL TO SOMALI POETRY", "A CALL TO SOMALI CULTURE"];
var count = 0;

// Function to change text every 3 seconds
function changeText() {
  var dynamicText = document.getElementById('dynamic-text');
  dynamicText.innerHTML = texts[count % texts.length];
  count++;
  fadeIn(dynamicText);
}

// Fade in effect for the text
function fadeIn(element) {
  var op = 0.1;  // initial opacity
  element.style.opacity = 0;
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

// Initial call and interval setup
changeText();
setInterval(changeText, 3000); // Change every 3 seconds
