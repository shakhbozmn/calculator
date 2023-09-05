const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const devideBtn = document.getElementById("devide")
const multiplicateBtn = document.getElementById("multiplicate")
const submitBtn = document.getElementById("submit")
const resultElement = document.getElementById("result") 
let action = "+"

plusBtn.onclick=function() {
    action = "+"
}
minusBtn.onclick=function() {
    action = "-"
}

devideBtn.onclick=function(){
    action = "/"
}
multiplicateBtn.onclick=function(){
    action = "*"
}



function calculateNumbersWithAction(input1, input2, action) {
   const numb1 = Number(input1.value)
   const numb2 = Number(input2.value)
    
   if (action == "+") {
     return   numb1 + numb2
    } 
    
    else if (action == '-') {
       return numb1 - numb2
    }

    else if (action == '/') {
    return    numb1 / numb2
    }

    else if(action == '*'){
      return  numb1 * numb2
    }
}

submitBtn.onclick=function(){
    const result = calculateNumbersWithAction(input1, input2, action)
    printResult(result)
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color ="red"
    }

    else{
        resultElement.style.color = "green"
    }
     resultElement.textContent = result
    
}