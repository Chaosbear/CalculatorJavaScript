const displayInput = document.querySelector("#displayInput")
const displayOutput = document.querySelector("#displayOutput")
const numButton = document.querySelectorAll(".number-button")
const operatorButton = document.querySelectorAll(".operator-button")
const deleteButton = document.querySelector("#delete")
const clearButton = document.querySelector("#clear")
const equalButton = document.querySelector("#equal")

let previousOperand = ""
let currentOperand = ""
let result
let inputString =""
let isEqual = false

function addNumber(numElem) {
  if (isEqual === true) {
    displayInput.innerText = ""
    inputString = ""
    isEqual = false
  }
  displayInput.innerText += numElem.innerText
  inputString += numElem.innerText
}

function addOperation(operatorElem) {

    isEqual = false
    
    if (["+","-","×","÷"].includes(inputString.slice(-1))) {
        displayInput.innerText = displayInput.innerText.slice(0, -1) + operatorElem.innerText
        inputString = inputString.slice(0,-1) + operatorElem.getAttribute("id")
        return
    }
    
    displayInput.innerText += operatorElem.innerText
    inputString += operatorElem.getAttribute("id")
}

function compute() {
  if (inputString === "") {
    displayOutput.innerText = ""
    return
  }
  result = eval(inputString)
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

deleteButton.addEventListener("click", function() {
  displayInput.innerText = displayInput.innerText.slice(0, -1)
  inputString = inputString.slice(0, -1)
  compute()
})

clearButton.addEventListener("click", function() {
  displayInput.innerText = ""
  inputString = "" 
  compute()
})

equalButton.addEventListener("click", function() {
  displayInput.innerText = result.toString()
  displayOutput.innerText = ""
  inputString = result.toString()
  isEqual = true
})
