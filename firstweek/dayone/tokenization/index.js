/* 
 flow of the code 
 1. select all required elements and wrape them into event listner ( event is DOMcontentLoaded )
 2. add event listner on button when i click on that 
 3. have to write that call back fn which i used on the click event 
*/

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    button: document.getElementById("submit-button"),
    alert: document.getElementById("alert-message"),
    alpha: document.getElementById("output-alpha"),
    nums: document.getElementById("output-nums"),
    tokenCount: document.getElementById("token"),
    inputBox: document.getElementById("user-input"),
  };

  elements.button.addEventListener("click", () => handleInput(elements));
});

const handleInput = (elements) => {
  /*
   fetch those elements
   than trim than sentence
   we need to validate that input if it empty than call another function their work is to show the error ( handle error )
   hide the alert display
   and at the end i wrote the fn to tokenization of the valid input 
  */
  const { inputBox, alert, alpha, nums, tokenCount } = elements;
  const inputValue = inputBox.value.trim();

  if (inputValue === "") {
    showAlert(alert, inputBox, "Input field is empty");
    return;
  }

  alert.style.display = "none";
  processInput(inputValue, { alpha, nums, tokenCount });
};

// the reason i write this different fucntion is i can handle error easily means suppose if tomorrow i want to add anything so i can add & remove rather than changes in main function
const showAlert = (alertBox, inputBox, message) => {
  alertBox.style.display = "block";
  alertBox.textContent = message;
  inputBox.value = "";
};

// this fn is also same as showAlert function like make seperate and inside i wrote 1 more function
// but at first point i need to seperate that sentence in single word and yes this is regular expression from js
// than pass that array into another function
// and last point is to set all values with their elements
const processInput = (text, { alpha, nums, tokenCount }) => {
  const tokens = text.match(/\w+|[,.]/g) || [];
  const encoded = encodeTokens(tokens);

  tokenCount.textContent = tokens.length;
  alpha.innerHTML = `&lt;start&gt; <span id="output-alpha-display">${text}</span> &lt;end&gt;`;
  nums.textContent = encoded.join(" | ");
};

// in this fn i spred that array into single character, after this again iterate over this and use charCodeAt method which give me code instead of that particluar word ( also attached one diagram, i dry run below code )
const encodeTokens = (tokens) =>
  tokens.map((word) => [...word].map((char) => char.charCodeAt(0)).join(""));
