// String ---------> "apple" or 'apple'
// String is Case sensitive

const msg = " Hii buddy, hllo buddy "
console.log(msg)

// String methods
// length()
// console.log(msg.length) ---------> Direct way

const len = msg.length // ---------> Stored in reference or variable
console.log(len)


// toLowerCase()

const lower = msg.toLocaleLowerCase()
console.log(lower)

 
// toUpperCase()

const upper = msg.toUpperCase()
console.log(upper)


// replace('oldvalue', 'newvalue')
// ------------> It replace single element or value

const rep = msg.replace('buddy', 'Dude')
console.log(rep)

// replaceAll('oldvalue','newvalue') --------->
// If same value present in multiple time means it will replace all value at same time

const repall = msg.replaceAll('buddy', 'Dude')
console.log(repall)


// substring(startindex,endIndex) ---------> It similar to slice method or same as slice method

const sub = msg.substring(10, 20)
console.log(sub)


// slice(startindex,endindex) ---------> It is array method. But string accept this method to implementation

const sl = msg.slice(10, 20)
console.log(sl)


// concat() ---------> It help to join two string into single string

const first = "Hii"
const second = "Bro"

const con = first.concat(" ", second)
console.log(con)


// split() ---------> Based on condition it help to split the string into individual part

const sp = msg.split(",")
console.log(sp)

// trim() ---------> It help to remove unwanted space from front and back of the entire string

const tm = msg.trim()
console.log(tm)


// TODAY TASK :- 2
// consider const add="How are you?" need to add this string to msg string.
// expected result like>Hii buddy hello buddy how are you?

// concat
const first1 ="Hii buddy hello buddy"
const second1 ="how are you?"

const con1 = first1.concat(" ", second1)
console.log(con1)







