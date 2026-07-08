 // Array------------> It help to store multiple values
 // [] array brackets
 // It execute based on index value ---------> index starts with 0

 // const studDetails = ["mukil",29,"chennai"]
 // console.log(studDetails)

 const studMarks = [10,20,30,40,50]
 console.log(studMarks)

 // Array menthods

//push()-------> Add value to the end of the array
studMarks.push(55)
console.log(studMarks)

//pop()-------> Remove the value from end of an array
studMarks.pop()
console.log(studMarks)

//unshift()-------> Add value to the begnning of the array
studMarks.unshift(5)
console.log(studMarks)

//shift()---------> Remove value from begnning of the array 
studMarks.shift()
console.log(studMarks)

//splice(start index,delete count,item)----------> It help to add the value and remove value and replace the value from array
// using splice add value 
studMarks.splice(1,0,15)
console.log(studMarks)

// using splice remove value 
studMarks.splice(3,1)
console.log(studMarks)

// using splice replace value 
studMarks.splice(3,1,45)
console.log(studMarks)

// silce(start index,end index)--------->It has one rule last value will be excluded 
const sl = studMarks.slice(1,4)
console.log(sl)


//-----------------------------------------------------------

// TODAY TASK :- USE ARRAY STRING cont fruite =["apple","orange","banana","pine apple"]
 
 const fruite =["apple","orange", "banana","pine apple"]
 console.log(fruite)

 //push()
 fruite.push("grapes")
 console.log(fruite)

 //pop()
 fruite.pop()
 console.log(fruite)

 //unshift()
fruite.unshift("Mango")
console.log(fruite)

//shift()
fruite.shift()
console.log(fruite)

//splice()
// Add
fruite.splice(3,0,"mango")
console.log(fruite)

//remove
fruite.splice(1,2)
console.log(fruite)

//replace
fruite.splice(1,1,"orange")
console.log(fruite)

//slice
const sl1 = fruite.slice(1,3)
console.log(sl1)
