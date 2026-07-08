 // Loop 
// A loop is used to repeat a block of code multiple times until a condition becomes false.
// 1. Conditional loop ---------> based on condition it will be execute

// while loop -------> entry check loop
// It will execute continuously until the condition comes false.
// Once the condition comes fail means it will terminate the loop.

let a = 1

while (a <= 5) {
    console.log(a)   // 1 2 3 4 5
    a++              // a + 1
}

console.log("------------------------------")

// do while loop ---------> exit check loop

let n = 1

do {
    console.log(n)   // 1 2 3 4 5
    n++
} while (n <= 5)

console.log("------------------------------")

// for loop

for (let i = 1; i <= 3; i++) {
    console.log(i)
}


// 2. Iterate loop ---------> Based on value it will be execute.
// iterate loop -----> It execute loop as step by step process.


// foreach ---------> It especially for array -> Also known as array method

const arr = ['apple', 'orange', 'mango', 'papaya', 'greps']

console.log("Normal Array:", arr)

arr.forEach(value => {
    console.log(value)
})


// for of ----------> It especially for run string

const str = "Hello"

console.log("Normal String:", str)

for (let s of str) {
    console.log(s)
}


// for in ----------> It especially for run object

const obj = {
    name: "subash",
    age: 28,
    city: "chennai"
}

console.log(obj)

for (let o in obj) {
    console.log(o, obj[o])
}