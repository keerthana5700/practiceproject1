 // if statement -------------> Conditional statement
// Because the execution based on the condition


// if else

const a = 4

if (a >= 5) {
    console.log("Yes Grater") // if block ------> If condition comes true means if block will execute
} else {
    console.log("No It's not Grater") // else block ------> If condition get false means else block will execute
}

// else if else ------> It called as (nested if)

const mark = 50
if (mark >= 90) {
    console.log("A Grade")
} else if (mark >= 70) {
    console.log("B Grade")
} else if (mark >= 50) {
    console.log("C Grade")
} else {
    console.log("Fail")
}


// Operator

// 1. Arithmetic Operator (+, -, *, /, %, **)

let n = 5

n = n ** 2

console.log(n)


// 2. Assignment Operator (=, +=, -=, *=, /=, %=)

let m = 5

m += 2 // m = m + 2

console.log(m)


// 3. Comparison Operator (>, <, >=, <=, ==, ===, !=, !==)

// == loose equality ---------> it checks both the value are equal or not

const s = 5
const p = '5'

if (s == p) {
    console.log("Equal")
} else {
    console.log("Not Equal")
}


// === strict equality -------> it checks both value and datatype equal or not

// const s = 5
// const p = '5'

if (s === p) {
    console.log("Equal")
} else {
    console.log("Not Equal")
}


// != Not equal ----------> It check both value are not equal or not

// const s = 5
// const p = '5'

if (s != p) {
    console.log("Yes")
} else {
    console.log("No")
}


// !== Not equal ----------> It check both value are not equal or not

// const s = 5
// const p = '5'

if (s !== p) {
    console.log("Yes")
} else {
    console.log("No")
}


// 4. Logical Operator (&&, ||, !)

const st = 5
const td = 10

// And && -------> It will execute both condition are true

if (st >= 5 && td >= 12) {
    console.log("Satisfied") // if block ------> true block
} else {
    console.log("Un Satisfied") // else block ------> false block
}


// OR || -------> If one condition comes true means it will execute

if (st >= 5 || td >= 12) {
    console.log("Satisfied") // if block ------> true block
} else {
    console.log("Un Satisfied") // else block ------> false block
}


// NOT ! -------------> It gives opposite term

if (!(st >= 5)) {
    console.log("Yes")
} else {
    console.log("NO")
}


// 5. Ternary Operator (? :)
// ? true block
// : false block
const ter = (st >= 6)? "Condition Satisfied": (st >= 5) ? "Yes" : "NO"
console.log(ter)


// TODAY TASK 
 
const mark1 = 20
const ter1 = (mark1 >= 60) ?"Grade A": (mark1 >= 30)? "grade B":"fail"
console.log(ter1)
