/*
    Promises :- The Promise object represents the eventual completion (or failure) 
    of an asynchronous operation and its resulting value.

    A Promise is in one of these states:

    1. pending: initial state, neither fulfilled nor rejected.
    2. fulfilled: meaning that the operation was completed successfully.
    3. rejected: meaning that the operation failed.


*/


//Promise 1
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async Task
//     //DB calls , Cryptography, network calls
//     setTimeout(function(){
//         console.log("Async Task is Completed")
//         resolve()
//     }, 1000);
    
// });

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })


//Promise 2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asyn task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Asyn 2 resolved");
// })

//Promise 3
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : 'Abhijeet' , email:'abhijeet@google.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

//Promise 4 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : 'Abhijeet' , email:'abhijeet@google.com'})
        }
        else{
            reject('ERROR : Something Went Wrong , Please Wait....')
        }
    },1000)
})


/*So bascially this process is known as chaining , in this if I will return anything from the parent then
it will be returned in the child then or in the current then which is majorly used in dbs
*/
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("Your process has been executed succesfully..."))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : 'JavaScript' , password:'123'})
        }
        else{
            reject('ERROR : JS Went Wrong , Please Wait....')
        }
    },1000)
});


/*
Q.) Why and How to handle a promise by aync await ??
--> It is used when we can't step ahead till any particular function is not executed 
    Or it is moreover used in the database connections like if the dbs is not connceted don't step ahead
    And if connected then only step ahead

Below is the code handle a promise by asyn await :-

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

*/

