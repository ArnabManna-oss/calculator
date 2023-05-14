// select the HTML elements
const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

// add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // handle the button click
    const value = button.innerText;
    if (value === "AC") {
      input.value = "";
    } else if (value === "=") {
      const result = eval(input.value);
      input.value = result;
    } else {
      input.value += value;
    }
  });
});