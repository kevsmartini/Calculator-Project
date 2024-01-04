const display = document.querySelector('.display')
const acumulator = document.querySelector('.acumulator')


const clear = document.querySelector('.clear')
const remove = document.querySelector('.remove')
const decimal = document.querySelector('.decimal')
const equals = document.querySelector('.equals')



const btnNumbers = document.querySelectorAll('.number')
const btnOperators = document.querySelectorAll('.operator')


let numberOne = parseInt(acumulator.textContent)
let numberTwo = parseInt(display.value)  
let operator = ''
let currentNumber = ''
let acumulatorNumber = ''






//////BUTTONS///

btnNumbers.forEach((number) => number.addEventListener('click',(e) => {
 
  numberClicked(e.target.textContent)
  display.value = currentNumber
  

}))

btnOperators.forEach((operator) => operator.addEventListener('click',(e)=>{
  
  if(currentNumber != '' ){
    
    operatorClicked( e.target.textContent)

}
  
  



}))

clear.addEventListener('click',()=>{

  display.value = ''
  acumulator.textContent = ''
  currentNumber = ''
  operator= ''
  acumulatorNumber = ''


})

equals.addEventListener('click',()=>{

  if(currentNumber != '' && acumulatorNumber != ''){
      operate()

    display.value = acumulatorNumber
    acumulator.textContent = ''
    currentNumber = ''

  }

  


})

remove.addEventListener('click',()=>{

  display.value = display.value.slice(0,-1)

  currentNumber = display.value

})


decimal.addEventListener('click',()=>{

  if(currentNumber != ''){
    currentNumber += '.'
  }

})


//////////FUNCTIONS///////


const numberClicked = (number) => {
  currentNumber += number

}

const operatorClicked = (op) => {

  operator = op
  acumulatorNumber = currentNumber
  currentNumber = ''
  acumulator.textContent = acumulatorNumber + operator
  display.value = currentNumber

}

const operate = () =>{

  currentNumber = Number(currentNumber)
  acumulatorNumber = Number(acumulatorNumber)

  if(operator === '+') acumulatorNumber += currentNumber;
  if(operator === '-') acumulatorNumber -= currentNumber;
  if(operator === 'x') acumulatorNumber *= currentNumber;
  if(operator === '÷') acumulatorNumber /= currentNumber;


  //acumulatorNumber = acumulatorNumber.toFixed(2)
  acumulatorNumber = Math.round(acumulatorNumber * 100)/100
  currentNumber = currentNumber.toString()
  acumulatorNumber = acumulatorNumber.toString()
 
}









