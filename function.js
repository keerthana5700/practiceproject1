//function--------------->Reusable methaods
//1.Regular function or function Declaration
function fruite() {
    console.log('apple')
    console.log('orange')
    console.log('Mango')
}

fruite()

//passing parameter-------------------->It help to change the value out of function 

function fruite1(item1,item2) {
    console.log(item1)
    console.log(item2)
}

fruite1("Jackfruite","Mango")`  `

//using return keyword

//return---------->It help to perform some action based on the condition

function studMark(sub1,sub2) {
    return sub1 + sub2
}
console.log(studMark(35,45))
//2. function Expression ----------------------------------------
// A Function Expression is a function that is created and assigned to a variable.

const car = function () {
    console.log("Hundai")
    console.log("Indica")
}

car()

//passing parameter

const car1 = function (item1,item2) {
    console.log(item1)
    console.log(item2)
}
car1("Benz","volva")

//return keyword 

const car2 = function (item){
    return item
}
console.log(car2("Audi"))

// 3. Arrow function ---------------------------------------------
// Arrow symbol => 
// An Arrow Function is a shorter way to write a function in JavaScript.

    const Bike = () =>{ 

    console.log('NS200')
    console.log('KTM360')
    }
    Bike()

    // passing parameter

    const Bike1 = (item1,item2) =>{

        console.log(item1)
        console.log(item2)
    }
    Bike1("pulsar","Tvs")

    // return function

    const Bike2 = (item) =>{

      return item
    }
    console.log(Bike2("splendor"))



// TODAY TASK ----------------------------------
// using arrow function need to pass parameter with return keyword
      
const veg = (item) =>{
    return item
} 
console.log(veg('tomato'))
