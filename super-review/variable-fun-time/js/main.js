//--- Easy
//create a variable and assign it a number
let num = 5

//minus 10 from that number
num = num -10


//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
// adding the word Number allows it to make sure we get a number
let numFromInput =Number(document.querySelector('dancdDanceRevolution').value)
//add 25 to that number
 numFromInput += 25
//alert that number
// alert(numFromInput)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo)

function addTwo(){
    // console.log(num + numFromInput)
    numFromInput += 25

    console.log(num + numFromInput)
}
