//Object -------->{} key and value -------> property
//key and value pair called as a property
//Object format --------> json format

const studDetail = {
    name: "mukil",
    age: 29,
    city: "chennai"
}

console.log(studDetail)

studDetail.tool = "playwright"   // add property
console.log(studDetail)

studDetail.city = "Coimbatore"   // change value
console.log(studDetail)

delete studDetail.tool   // delete property from object
console.log(studDetail)

console.log(Object.keys(studDetail)) // shows all keys from object

console.log(Object.values(studDetail)) // shows all values from object

console.log(studDetail) // show both all key and value 