// Initial values
let subResult = undefined;
let strCurrentNumber = "";
let currentNumber = undefined;
let isThereANumber = false;
let currentOperator = undefined;


// Change display value to Operand button input
const operands = document.getElementsByClassName("digit");

const currentNumberDisplay = document.querySelector("#display-box");


for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", function() {
    
//     If length of strNumber is Less or Equal than 8
    if (strCurrentNumber.length < 8) {
      isThereANumber = true;
      strCurrentNumber += operands[i].value;
      currentNumberDisplay.innerHTML = strCurrentNumber;
      currentNumber = Number(strCurrentNumber);
      console.log(`Current Number: ${currentNumber}`);
    } else {
      alert("Maximum amount of digits is 8. Cannot add more.");
    }
  });
}

// if operator button is clicked, store value of display for calculation and show it on the top right corner of the previous display box

const operators = document.getElementsByClassName("operation");

let subResultDisplay = document.querySelector("#prev-display");

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
//     If decimal is only selected
    if (strCurrentNumber === ".") {
      alert("Cannot enter only a decimal. Must be accompanied by a number!");
    } else {
    // if there is a number previously entered     
      if (isThereANumber || currentOperator === "=") {
        console.log("You have entered a number");
        // if there isn't more than two numbers entered
        if (subResult === undefined) {
          console.log("No SubResult Stored")
          subResult = currentNumber;
          currentNumber = undefined;
          subResultDisplay.innerHTML = subResult;
          strCurrentNumber = "";
          currentNumberDisplay.innerHTML = "";
          isThereANumber = false;
          console.log(`Sub-Result = ${subResult}`);
          // if there is a value for subResult
        } 

        // if there is an operator previously selected
        if (currentOperator) {
          console.log(`There is a previous operator entered`);
          // carry out the previous operation
          switch(currentOperator) {
            case "+":
              subResult += currentNumber;
              break;
            case "-":
              subResult -= currentNumber;
              break;
            case "*":
              subResult *= currentNumber;
              break;
            case "/":
              subResult /= currentNumber;
              break;
            case "=":
              subResult = subResult;
              break;        
          } 
        } // if currentOperator end

          // Assign an operator the currentOperator variable
          console.log("Assigning an operator to the current operator variable");
          switch(operators[i].value) {
            case "+":
              currentOperator = "+";
              break;
            case "-":
              currentOperator = "-";
              break;
            case "*":
              currentOperator = "*";
              break;
            case "/":
              currentOperator = "/";
              break;
            case "=":
              currentOperator = "=";
              break;  
          }

          console.log(`Current Operator is ${currentOperator}`);

          console.log(`Sub Result = ${subResult}`);
          subResultDisplay.innerHTML = `${subResult} ${currentOperator}`;
          currentNumber = undefined;
          strCurrentNumber = "";
          currentNumberDisplay.innerHTML = "";
          
          if (currentOperator !== "=") {
            isThereANumber = false;
          }
          

        if (subResult === Infinity) {
          subResult = undefined;
          alert("Cannot continue any further, please start over");
        }
      // if there is a number end
      // switch current operator         
      } else if (currentOperator) {
        switch(operators[i].value) {
            case "+":
              currentOperator = "+";
              break;
            case "-":
              currentOperator = "-";
              break;
            case "*":
              currentOperator = "*";
              break;
            case "/":
              currentOperator = "/";
              break;
            case "=":
              currentOperator = "=";
              break;  
          }
        
        console.log(`Current Operator is ${currentOperator}`);

        console.log(`Sub Result = ${subResult}`);
        subResultDisplay.innerHTML = `${subResult} ${currentOperator}`;
      }  

      // if there is no number
      else {
           alert("There is no number in the queue, can't perform an operation!");
      }
    } // if there is not just a decimal end
  });
}

// Clear Button
let singleClear = document.querySelector("#single-clear");

singleClear.addEventListener("click", function() {
  console.log("Single Clear Button Clicked");
  currentNumber = undefined;
  strCurrentNumber = "";
  currentNumberDisplay.innerHTML = "";
  isThereANumber = false;
  
});

// All Clear Button
let allClear = document.querySelector("#all-clear");

allClear.addEventListener("click", function() {
  console.log("All Clear Button Clicked");
  currentNumber = undefined;
  strCurrentNumber = "";
  currentNumberDisplay.innerHTML = "";
  isThereANumber = false;
  subResult = undefined;
  subResultDisplay.innerHTML = "";
  currentOperator = undefined;
});