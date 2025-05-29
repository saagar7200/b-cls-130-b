// // {} 
// // let person = {
// //     firstName:'Sita',
// //     age:28,
// //     isStudent:false,
// //     address:{
// //         city:'ktm',
// //         street:12
// //     },
// //     // greet: function () {
// //     //     console.log('Hello from',this.firstName ,this.age)
// //     // }

// // }

// // person.greet = function () {
// //     console.log('Hello')
// // }

// // person.greet()

// // let city = person.address.city
// // console.log(city)

// // new keyword
// // let car = new Object()
// // car.year = 2015


// // dot notation
// // console.log(person["firstName"])
// // let key = 'age'
// // console.log(person[key])

// // bracket notation

// // console.log(person["address"])

// // add 
// // person.address = 'Kathmandu'

// // modify

// // person.firstName = 'Gita'

// // delete
// // delete person.firstName

// // console.log(person)



// let x = 'hello'

// let y = x
// y = 'hi'
// console.log(x,y)
// //  ={}

// let person = {
//     firstName:'Sita',
//     age:28,
//     isStudent:false,   
// }

// let  obj = person

// obj.firstName = 'Ram'


// console.log(obj,person)
// // stack
// // x ----> hello
// // y -----> hi
// // person --> add_01
// // obj --> add_01


// // heap 

// // add_01 --- > {..}







let student = {
    name:'Shyam',
    age:30,
    location:'',
    grade:10
}

let key = 'grade'

// dot notation
console.log(student.key)

// bracket
console.log(student[key])

// modify 

student[key] = 80


// 
student.grade = 9

console.log(student)


// delete

delete student.location
console.log(student)




