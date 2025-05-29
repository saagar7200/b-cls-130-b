
// console.log('start')
// // console.log('processing') //1m

// // setTimeout

// // function a (){

// // }

// // a()


// // setTimeout(()=>{
// //     console.log('processing')
// // },2000)

// // 23:58:50

// // setInterval(()=>{
// //    for(let i = 0; i<10; i++){
// //     console.log(i)
// //    }
// // },1000)



// console.log('end')

// // callback based 

// // comments =>get  -> postId 
// // post  --> userId 
// // user-> userid

// // const getUser =(callback)=>{
// //     setTimeout(()=>{
// //         console.log("1.user fetched")
// //         callback(null,'User fetch failed')
// //     },2000)
// // }

// // const getPosts = (callback) =>{
// //     setTimeout(()=>{
// //         console.log("2.post fetched")
// //         callback()
// //     },3000)
// // }

// // const getComments = () =>{
// //     setTimeout(()=>{
// //         console.log("3.Comments fetched")
// //         // callback()
// //     },1000)
// // }

// // getUser() //2sec
// // getPosts() //3sec
// // getComments() //1sec

// // getUser((data,err)=>{
// //     if(err){
// //         console.log(err)
// //         return
// //     }
// //     console.log('user data',data)
// //     getPosts((data,err)=>{

// //         if(err){
// //             console.log(err)
// //             return
// //         }
// //         getComments(()=>{

// //             getPosts(()=>{
    
// //                 getUser(()=>{

// //                 })
// //             })
// //         })
// //     })
// // })

// // promise

// const getUser = () =>{
//     return new Promise((resolve,reject) =>{
//         let isError = false
//         setTimeout(()=>{
//             if(!isError){

//                 resolve('1.User fetched')
//             }else{
//                 reject('Something went wrong')
//             }

//         },2000)
//     })
// }

// const getPosts = () =>{
//     return new Promise((resolve,reject) =>{
//         let isError = true
//         setTimeout(()=>{
//             if(!isError){

//                 resolve('2.Posts fetched')
//             }else{
//                 reject('Something went wrong from get posts')
//             }

//         },2000)
//     })
// }


// const response = getUser().then((data)=>{
//     console.log(data)
// })
// .then(()=>{
//     return getPosts()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(()=>{

//     console.log('finally')
// })

// // async/await 

// const fetchUser  = async () =>{
//  try {
//     const users = await getUser()
//     const posts = await getPosts()
//     console.log('fetch user',users)
//     console.log('fetch user',posts)
    
//  } catch (error) {
//     console.log(error)
    
//  }finally{
//     console.log('finally')
//  }
// }

// fetchUser()
// const getTodos = async() =>{
//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
//     if(!resp.ok){

//     }
//     const todos = await resp.json()
//     console.log(todos)
// } 

// getTodos()


// // fetch()
// // url -> https://jsonplaceholder.typicode.com/todos'




// promise
console.log('start')
// task
// const task = new Promise((resolve,reject)=>{// task
// setTimeout(()=>{
//     resolve('task completed')
// },5000)
// })

// task.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(error)
// })

// fetch
// const response =  fetch('https://jsonplaceholder.typicode.com/todos/1')


// response.then(async (res)=>{
//     return await res.json()
// }).then(data=> console.log(data)).catch((err)=>{
//     console.log(err)
// })


// rask
// git version 2.43.0
// async/await

const fetchTodos = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todo/1')
        if(!response.ok){
            throw new Error('Something went wrong')
        }
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log(error.message)
    }
    
}
fetchTodos()

console.log('end')