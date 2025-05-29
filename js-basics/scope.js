// // scopes
// // global

// // let x =100
// // const y =10
// // var z = 20

// // if(true){

// //     console.log(x,y,z)
// // }

// // function func (){
// //     console.log(x,y,z)

// // }
// // func()

// // // block

// // {
// //     let x =10
// //     const y =10
// //     var z = 20

// //     console.log('inside block',x,y,z)
// // }

// // console.log(x) //
// // // console.log(y)
// // console.log('outside block',z)


// // function 

// // function scope (){
// //     let x =10
// //     const y =10
// //     var z = 20

// //     console.log(x)
// //     console.log(y)
// //     console.log(z)
// // }

// // scope()
// // console.log('outside scope',z)

// // lexical 
// // let x =100
// // function parent () {
// //     let x = 'Parent variable'

// //     function child (){

// //         // console.log(x)
// //         function children () {
// //         console.log(x) //

// //         }
// //         children()
// //     }

// //     child()
// // }

// // parent()



// // closure

// // function parent (num){
// //     let count= num

// //       return increment = () =>{
// //         count ++
// //         console.log(count)
// //     }

// // }

// // const child = parent(0) // 0
// // child() 

// // const child1 = parent(10) // 10

// // const child2 = parent(15) // 10

// // child1()
// // child1()

// // child()


// const count = () =>{
//     let count = 0

//     return {
//         increment : ()=>{
//             count++
//         },
//         decrement : ()=>{
//             count--
//         },
//         getCount : ()=>{
//             return count
//         }
//     }

// }

// const closure = count() // 1st closure  -> 2 
// const counter = count() // 2nd closure   -> 2
// const counter1 = count() // 2nd closure  -> 1

// closure.increment() // 
// closure.increment() // 
// closure.increment() //
// closure.decrement()

// counter.increment()
// counter.increment()

// counter1.increment()

// // console.log(closure.getCount()) //  3
// // console.log(counter.getCount()) //  1

// // function factory

// const multiply  = (factor) =>{
//     return (number) =>{
//         return  factor * number
//     }
// }

// const multiplyBy5 = multiply(5)
// const multiplyBy10 = multiply(10)

// // console.log(multiplyBy5(10)) //
// // console.log(multiplyBy5(12)) //
// // console.log(multiplyBy10(12)) //


// // function 
// // account(amount)
// //  let amount = amount
// // methods -> deposit, withdraw , inquary
// // 


// const Account = (initialBalance) =>{
//     let amount = initialBalance

//     return {
//         deposit : (balance)=>{
//               amount += balance
//               console.log(`Your new balance is: ${amount}`)
//         },
//         withdraw : (balance)=>{
//             if(amount < balance){
//                 console.log('Insufficient Balance');
//                 return
//             }

//                 amount-= balance
//                 console.log(`Your new balance is: ${amount}`)           
            
//         },
//         getBalance : ()=>{
//             return amount
//         }
//     }

// }

// const account = Account(1000)

// const balance = account.getBalance()
// // const balance = 
// console.log(account.getBalance()) // 1000
// account.deposit(500)
// console.log(account.getBalance())
// account.deposit(500)

// console.log(account.getBalance())
// account.withdraw(500)
// console.log(account.getBalance())
// account.withdraw(2000)
// console.log(account.getBalance())
// console.log(account.getBalance())



// 

const parent = () =>{

    let cache ={}

    return (number) =>{
        if(cache[number]){
            console.log('return from cache')
            return cache[number]
        }

        console.log('computing..')
         cache[number] =  number ** number
         return cache[number]
    }
}

const child = parent()
const child2 = parent()

console.log(child(10)) // comp..
console.log(child(10)) // from cache
console.log(child2(10)) // comp...
console.log(child2(10)) //  from cache






