// // x = ''
// // console.log(x)

// // string
// let str:string = 'Hello'
// // number
// let x:number = 10

// // boolean
// let bool:boolean = true
// // null 
// const y:null = null
// // undefined
// let z:undefined;

// // any
// let a:any = 20

// a = ''

// // unknown
// // let b:unknown = 10
// // b ='hello'
// // // console.log()
// // if(typeof b === 'string'){
// //     b.toLowerCase()
// // }


// // never
// // function abc ():never{
// //     throw new Error('')
// // }


// array
// let numbers:number[] = [1,2,3,4]
// let strArr:Array<string> = ['a','1']

// numbers.push(2)

// union type
// let x:number | string= 10
// x= ''
// x= true

// type

type ID = number | string
let id:ID = ''

// custom type
type Status = 'pending' | 'completed' | 'shipped' | 'canceled'
let orderStatus:Status =  'canceled'

// object
// interface
interface IPerson {
    name:string,
    age:number,
    address:string
}

// type IPerson = {
//     name:string,
//     age:number,
//     address:string
// }

// let person:IPerson = {
//     name:'',
//     age:10,
//     address:'',
// }

// enum 

enum Role{
    USER = 'USER',
    ADMIN = 'ADMIN' ,
    SUPER_ADMIN  = 'SUPER_ADMIN'
}

console.log(Role.ADMIN)

// function

function greet(name:string){
console.log('hello ',name)
}

greet("12")

// add(a,b)

// const add = (a:number,b:number):number =>{
//     return a + b
// }

// add(1,12)

// generic

const wrapper = <T>(value:T | T[]):T[] => {

    if(Array.isArray(value)){
        return value
    }else{
        return [value]
    }

}

wrapper<any>({})
wrapper<number>(10)

interface IBucket<T>{
    value:T
}

const bucket1:IBucket<number> = {
    value:10
}

const bucket2:IBucket<string> = {
    value:'10'
}

class Box<T>{
    public value:T
    constructor(value:T){
        this.value = value
    }
}

const box = new Box<number>(1)
const box1 = new Box<string>('1')
console.log(box)

