
function sayMyName(){
    console.log("A")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("j")
    console.log("e")
    console.log("e")
    console.log("t")
}

//sayMyName()
function addTwoNumber(a, b){
    console.log(a+b);
}

// addTwoNumber(5,null)

//Parameters -> passed by thr developer while writing the function 
//Arguments -> passed my the developer while calling the function 

function loginUserMessage(username){
    if(username === undefined){
        return "Please enter a username"
    }
    return `${username} just loggedIN`
}

//console.log(loginUserMessage("Abhijeet"));
//... -> (Spread operator/Rest Operator)
//Defination of ... operator depends on the use case of that particular operator
function calculateCartPrice(...num1){
    let value = 0;
    for(let i=0; i<num1.length; i++){
        value += num1[i]
    }
    return value
}

//console.log(calculateCartPrice(100,456,324,765))

const user = {
    username : "Stenly",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

// handleObject({
//     username:"sam",
//     price : 399
// })

const myNewArray = [200,400,300,600]

function returnSecondValue(getArray,i){
    return getArray[i]
}

//console.log(returnSecondValue(myNewArray,3))

