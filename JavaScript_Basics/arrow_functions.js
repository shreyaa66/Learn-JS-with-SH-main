//this -> this keyword is used to refer to the correct context of the variable mentioned after this .(dot)
const user = {
    username : "Abhijeet",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Abhijeet"
//     console.log(this)
// }

// chai()
 
const chai = () =>{
    let username = "Abhijeet";
    console.log(this)
}

// chai()

//+++++++++++++++++++Arrow Functions+++++++++++++++++++++++++

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }

//const addTwo = (num1,num2) => (num1+num2)

//console.log(addTwo(5,6))

const addTwo = (num1,num2) =>({username : "Abhijeet"})

console.log(addTwo(3,4))
