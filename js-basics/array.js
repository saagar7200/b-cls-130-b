

// // // {}
// // const numbers = [2,31,34,65]
// // // const arr = new Array()

// // console.log(users,arr)

// // // get / read
// // const el = numbers[1]

// // console.log(numbers)

// // // add
// // // end
// // //  numbers.push(55)  // -> 55

// // //  console.log(numbers)

// // // start 
// // numbers.unshift(20)
// // //  remove
// // // end
// // // const last = numbers.pop()

// // // first 
// // // const first = numbers.shift()

// // console.log(numbers,numbers.length)


// // const numbers = [300,2,31,34,65,30,40]
// // const first_el = numbers[0]
// // const second_el = numbers[1]
// // const last_el = numbers[-1]
// // const el = numbers.at(-1)


// // console.log(last_el,el)

// // forEach


// //  numbers.forEach((value,index,arr)=>{
// //     console.log('Value at',index,value,arr)   
// // })

// // map

// // const doubled = numbers.map( number =>  number * 2 )
// // const square = numbers.map( number =>  number ** 2 )


// // // filter
// // const even = numbers.filter(number => number % 2 === 0)


// // // reduce
// //  const sum =numbers.reduce((acc,value)=>{
// //     return acc + value
// //  },10)


// //  find
// // const numbers = [300,2,31,34,65,30,40]
// // const result = numbers.find((number) => number < 10)

// // findIndex

// // const index = numbers.findIndex((number) => number > 300) 

// const numbers = [301,2,31,34,65,30,40]

// // slice
// // const copy = numbers.slice(1,3)

// // delete

// // console.log(numbers.length)


// // delete numbers[5]

// // numbers.splice(start, delete_count,item1,item2,...)

// // numbers.splice(3,0,10,76)

// console.log(numbers.indexOf(400))
// console.log(numbers.includes(400))
// // console.log(numbers.length)

// // some && every

// const isEven = numbers.some(number => number > 300)
const even = numbers.every(number => number > 300)

// console.log(isEven,even)


// const students = [
//     {
//         name:'Alice',
//         grade:'',
//         marks:[50,80,60,90]
//     },
//     {
//         name:'Bob',
//         grade:'',
//         marks:[60,80,70,90]
//     },
//     {
//         name:'Charlie',
//         grade:'',
//         marks:[50,55,60,45]
//     }
// ]

// const calculateAvg = (marks) =>{
//     const avg = marks.reduce((acc,mark) =>{
//         return acc + mark
//     },0)/ marks.length
//     return avg
// }

// const calculateGrade = (avg) =>{
//     if(avg > 90) {
//         return 'A'
//     }
//     if(avg > 80) {
//         return 'B'
//     }
//     if(avg > 70) {
//         return 'C'
//     }
//     if(avg > 60) {
//         return 'D'
//     }
//     return 'NG'

// }


// // 1.map - >  avg , grade

// const passedStudents = students.map(student =>{

//     const avg = calculateAvg(student.marks)
//     const grade = calculateGrade(avg)

//     student.avgMarks = avg
//     student.grade = grade
//     return student
// })
// .filter(student => student.avgMarks > 60)
// .map(student => `Name:${student.name} - Marks: ${student.avgMarks} - Grade: ${student.grade}`)
// // console.log(mappedStudents)

// // 2 filter -> passed students  [avg > 60]

// // const passedStudents = mappedStudents.filter(student => student.avgMarks > 60)



// console.log(passedStudents)

// //          90-100 -> A
// //          80-90 -> B
// //          70-80 -> C
// //          60-70 -> D
// //         < 60 -> fail
// // 3. passedStudents -> map  -> 'name- avg- grade'

// // const finalResult = passedStudents.map(student => `Name:${student.name} - Marks: ${student.avgMarks} - Grade: ${student.grade}`)

// // console.log(finalResult)


const numbers = [2,4,31,34,65,100]
const fruits = ['Banana','Kiwi','Apple']

numbers.sort((a,b)=> b-a) // a-b result -> +ve ?  swap  :no-swap
// 34 - 4
fruits.sort()

console.log(numbers);

const students = [
    {
        name:'Alice',
        grade:'',
        marks:[50,80,60,90],
        avg:70
    },
    {
        name:'Bob',
        grade:'',
        marks:[60,80,70,90],
        avg:40

    },
    {
        name:'Charlie',
        grade:'',
        marks:[50,55,60,45],
        avg:86

    }
]

students.sort((a,b)=> b['avg']-a['avg'] )

// console.log(students)


students.map((value)=>{
    console.log(value)
})