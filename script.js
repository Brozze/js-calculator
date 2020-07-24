let prevNumber = ''
let calculationOperator = ''
let secondOperator
let currentNumber = '0'
let tempNumber = ''

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}


const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    } 
    calculationOperator = operator
    currentNumber = '0'
    flag = false
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})


const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    if (flag == false) {
        let result = ''
        switch(calculationOperator) {
            case "+":
                result = parseFloat(prevNumber) + parseFloat(currentNumber)
                break
            case "-":
                result = parseFloat(prevNumber) - parseFloat(currentNumber)
                break
            case "*":
                result = parseFloat(prevNumber) * parseFloat(currentNumber)
                break
            case "/":
                result = parseFloat(prevNumber) / parseFloat(currentNumber)
                break
            default:
                break
        }
    tempNumber = currentNumber
    currentNumber = result
    secondOperator = calculationOperator
    calculationOperator = ''
    flag = true
    } else if (flag == true) {
        result = currentNumber
        switch(secondOperator) {
            case "+":
                result = result + parseFloat(tempNumber)
                break
            case "-":
                result = result - parseFloat(tempNumber)
                break
            case "*":
                result = result * parseFloat(tempNumber)
                break
            case "/":
                result = result / parseFloat(tempNumber)
                break
            default:
                break
        }       
    currentNumber = result
    }
}

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})


const clearBtn = document.querySelector('.all-clear')

const clearAll = (clearBtn) => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    flag = false
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener("click", () => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percentage = document.querySelector('.percentage')

const calcPercentage = (percentage) => {
    currentNumber = currentNumber / 100
}

percentage.addEventListener("click", () => {
    calcPercentage()
    updateScreen(currentNumber)
})
