

// // const obj = {
// //   key: ''
// // }

// class Person {
//     name ;
//     age;

//     constructor(name,age){
//         this.name = name;
//         this.age = age

//     }

//     greet(){
//         console.log('i am ',this.name)

//     }

//     // 
//     static print () {
//         console.log('Hello from class')
//     }
// }

// const person1 = new Person('Alice',28) 
// // const person2 = new Person('Bob',48)

// Person.print()
// person1.greet()
// // console.log(person2)
// // person2.greet()


// // class expression
// let Animal = class {

// }


// class Animal {
//     name;
//     constructor(name){
//         this.name = name
//     }

//     speak(){
//         console.log(this.name,'speaks')
//     }

// }

// class Dog extends Animal {
//     legs;
//     constructor(name,legs){
//         super(name)
//         this.legs = legs
//     }

// }

// const dog = new Dog('tommy',4)

// console.log(dog)
// dog.speak()


// class Rectangle {
//     length;
//     width;

//     constructor(length,width){
//         this.length = length;
//         this.width = width;
//     }

//     set (length,width){
//         this.length = length;
//         this.width = width
//     }

//     get (){
//         return {
//             length:this.length,
//             width:this.width,
//             area :Rectangle.calculateArea(this.length,this.width)

//         }
//     }
//     // private
//     static calculateArea (length,width){
//         return  length * width
//     }

// }

// const rect1 = new Rectangle(10,20)
// // console.log(rect1.set(20,40))
// rect1.set(20,30)
// console.log(Rectangle.calculateArea(10,20))


// console.log(rect1.get())


// class Person {
//     name;
//     // private property
//     #password


//     constructor(name,password){
//         this.name = name;
//         this.#password = password
//     }

//     getPassword(){
//         return this.#password
//     }
// }


// const user = new Person('Sam','123456s')
// console.log(user.getPassword())


// account -> class (accHolderName,initialAmount)

// Person , Teacher , Student



// this -> 

// var name=''


// console.log(this)

// function func (){
//     console.log(this)
//     const arrow = () => {
//         console.log(this)
//     }
//     arrow()
// }



// arrow()

// func()

// let person = {
//     name:'Shyam',
//     getName (){
//         const func =() =>{
//             console.log(this.name)
//         }
//         func()
//     }
// }
// person.getName()


