
// class Calculator {
//     constructor(inputBeforeOperator, inputAfterOperator) {
//         this.inputBeforeOperator = inputBeforeOperator
//         this.inputAfterOperator = inputAfterOperator
//     }

//     updateDisplay(existNum,num) {
        
//     }

// }
const numButton = document.querySelectorAll(".number-button")
const operatorButton = document.querySelectorAll(".operator-button")
const displayInput = document.querySelector("#displayInput")
const displayOutput = document.querySelector("#displayOutput")

let previousOperand = ""
let currentOperand = ""
let operator = undefined
let result
const stack = []

function addNumber(numElem) {
    displayInput.innerText += numElem.innerText
    currentOperand += numElem.innerText
}

function addOperation(operatorElem) {

    if (["+","-","×","÷"].includes(displayInput.innerText.slice(-1))) {
        displayInput.innerText = displayInput.innerText.slice(0, -1) + operatorElem.innerText
        return
    }
    if (previousOperand === "") {
        previousOperand = currentOperand
    }
    else {previousOperand = result.toString()}
    
    currentOperand = ""
    displayInput.innerText += operatorElem.innerText
    operator = operatorElem.getAttribute("id")
}

function compute() {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operator) {
      case 'plus':
        result = prev + current
        break
      case 'minus':
        result = prev - current
        break
      case 'multiply':
        result = prev * current
        break
      case 'divide':
        result = prev / current
        break
      default:
        return
    }

    displayOutput.innerText = result
}

numButton.forEach((elem) => {
    elem.addEventListener("click", function() {
        addNumber(elem)
        compute()
    })
})

operatorButton.forEach((elem) => {
    elem.addEventListener("click", function() {
       addOperation(elem)
    })
})


