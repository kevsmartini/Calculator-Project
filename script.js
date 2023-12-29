const numberOne = 3
const numberTwo = 5
const operator = ''

const display = document.querySelector('.display')
const btnOne = document.querySelector('.one')
const bntTwo = document.querySelector('.two')

/////////////OPERATORS//////////

const add = (n1, n2) => {
   return n1+n2
}

const subtract = (n1, n2) => {

}

const multiply = (n1, n2) => {

}

const divide = (n1, n2) => {

}



const operate= (n1, n2)=>{
    return add(n1,n2)
}

console.log(operate(numberOne,numberTwo))


//////BUTTONS///

btnOne.addEventListener('click',(event)=>{
display.textContent = 1
})

bntTwo.addEventListener('click',(event)=>{
    display.textContent = 2
    })