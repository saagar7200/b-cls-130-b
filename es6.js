// // // 
// // // let const
// // // class
// // // arrow function
// // // destructuring

// // const person = {
// //     name:'Alice',
// //     age:10,
// // }

// // const person2 = {
// //     age:20,
// //     location:'Nepal'
// // }
// // const time = [12,30,14]
// // const numbers= [1,2,3,4]
// // // const {name,age} = person
// // // let hr = time[0]
// // let [hr,min,sec] = time
// // // console.log(hr,min,sec)


// // // console.log(person.name,name)

// // // spread operator(...)

// // const newArr = [...time,...numbers]
// // // console.log(newArr)
// // const newPerson = {...person2,...person}
// // console.log(newPerson)
// // const {name,...others} = newPerson
// // console.log(name,others)




// const add = (...numbers) =>{

//     return numbers.reduce((acc,val)=>{
//         return acc + val
//     },0)

// }

// console.log(add(1,2,3,4,5,6,7,34,21))


// // template literal
// // ``
// const numbers = [1,1,2,2,3]

// // map set

// const unique = new Set(numbers)

// console.log(unique)
// unique.add(20)
// unique.add(2)
// // console.log(unique)
// // console.log(unique) //
// const key = {name:'Alice'}
// const arrKey = [1,2]
// const map = new Map()
// map.set('name','Alice')
// map.set(10,'Alice')
// map.set(key,'value with obj key')
// map.set(arrKey,'value with arr key')

// console.log(map.delete('name'))
// console.log(map.get('name'))
// console.log(map.get({name:'Alice'}))
// console.log(map.get(key))
// // console.log(map.get([1,2])) //
// console.log(map) //

// // class
// // arr methods
// // map,filter reduce,...

// // [1,2,3,4] => ['x','x','x','x']

// // const result =  numbers.reduce((acc,value)=>{
// // return acc 
// // },[])

// // 
// // return
// // continue , break



// for(let i=16; i>= 0; i--){
//     if(i%2 !==0){
//         break
//     }
//     console.log(i)
// }