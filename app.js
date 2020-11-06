let calculatorArray = [`+`, `-`, `*`, `/`, 7, 8, 9, 4, 5, 6, 1, 2, 3];
let calc = "";

const calculatorButtons = document.querySelector(".calculator-btns");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#reset");
const resultBtn = document.querySelector("#result-btn");
const comma = document.querySelector(".float");
const delBtn = document.querySelector(".del");

createButtons();

function createButtons() {
  calculatorArray.forEach((x) => {
    var newButtton = document.createElement("div");
    newButtton.innerHTML = `${x}`;
    newButtton.classList.add("btn", "btn-c");
    newButtton.value = `${x}`;
    calculatorButtons.appendChild(newButtton);
  });
}

var buttons = document.querySelectorAll(".btn-c");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calc += `${btn.value}`;
    result.value = `${calc}`;
  });
});

resetBtn.addEventListener("click", () => {
  calc = "";
  result.value = 0;
});

resultBtn.addEventListener("click", () => {
  calc = eval(calc);
  result.value = calc;
});

comma.addEventListener("click", () => {
  calc += ".";
  result.value = calc;
});

delBtn.addEventListener("click", () => {
  calc = calc.slice(0, -1);
  if (calc === "") result.value = 0;
  else result.value = calc;
});

result.addEventListener("keyup", (x) => {
  if (x.keyCode === 13) {
    calc = result.value;
    calc = eval(calc);
    result.value = calc;
  }
});
