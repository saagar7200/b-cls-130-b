

// //  condition ? exp1 : exp2

// // let isStudent = false
// // let age = 10

// // console.log( age >= 18 ? 'Adult' : 'Minor' )


// // {
// //     // code 

// // }

// // function functionName (){
// //     // 

// // }

// // console.log('start')

// // declaration
// // function greet (){
// //     console.log('Hello world')
// // }

// // greet()
// // greet()


// // function with parameter
// // function greet (name,age,grade){
// //     console.log(`I am ${name}. ${age} years old. ${grade}`)
// // }

// // greet("alice",16,10)

// // function checkIsMinor  (age) {

// //     console.log(age < 18 ? 'minor' : 'Adult')
// // }


// // checkIsMinor(10)


// // return type


// // function add1(a,b){
// //     let sum = a + b;

    
// //     return sum
// // }

// //  const result = add1(10,30)
// // console.log('result is:',void add(10,30))




// // function expression
// // const add = function (a,b){
// //     return a + b
// // }

// // const res = add(10,20)

// // console.log(res)


// // callback  function

// const child = function(name){
//     console.log('Hello, I am ' + name)
// }

// const parent = function (name,x){
//     console.log(name)
//     x(name)
// }

// // parent('Alice',child)
// // parent('Bob',child)

// // function factory
// const add = function (factor){
//     return function(b){
        
//             return factor + b
//     }
// }



// const add5 = add(5)
// const add10 = add(10)

// console.log(add5(10))
// console.log(add10(20))
// console.log(add10(30))


// // hof

// const multiply = function (factor){
//     const child = function (number){
//         // console.log('hello')
//         return factor * number
//     }

//     return child;
// }

// // const child = function (){
// //     console.log('hello')
// // }


// const multiplyBy6  = multiply(6)

// console.log(multiplyBy6(5))
// console.log(multiplyBy6(10))

// // const   = multiply(6)

// const multiplyBy10  = multiply(10)
// console.log(multiplyBy10(10))




// arrow function
// const add =  (a,b) => a + b

// const result = add(10,20)

// console.log(result)

// const square = a => a * a

// console.log(square(2))


const multiply = factor => number  => third => fourth =>  factor * number * third *fourth
const sum  = factor => number => factor + number

// const multiplyBy10 = multiply(10)

// console.log(multiply(10)(20)(3)(4))


// const func = () =>{
//     return 5 + 6

// }

// const result = void func()
// console.log(result)



// let hr = 12, min=5 , sec=10;
let time = '12:12:12' 
const arr = time.split(':')
let hr = arr[0]
let min = arr[1]
let sec = arr[2]

const pad= (n) => `${String(n).padStart(2,'0')}`
const formatTime = (h,m,s) =>{
    
    const time = `${pad(h)}:${pad(m)}:${pad(s)}`
    return time
}

const timer =  setInterval(()=>{
 
    console.log(arr)
    console.log(formatTime(hr,min,sec))

    if(hr === 0 && min === 0 && sec === 0){
        console.log('counter end')
        clearInterval(timer)
        return
    }

    if(sec > 0){
        sec--
    }else if(min > 0){
            min--
            sec =59
    }else{
        if(hr>0){
            hr--
            min= 59;
            sec=59
        }
    }

},1000)

