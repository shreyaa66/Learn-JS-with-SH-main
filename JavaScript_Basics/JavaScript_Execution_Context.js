/*
JavaScript Execution Context :-

Global Execution Context (Global EC)
Function/Functional Exceution Context (Function EC)
Eval Executional Context (Eval EC)

Memory Creation Phase
Exection Phase


Code to be Executed :- 
-----------------------------------------------
let val1 = 10;                                |
let val2 = 5;                                 |
                                              |
function addNum(num1,num2){                   |
    let total = num1,num2;                    |
    return total;                             |
}                                             |
                                              |
let result1 = addNum(val1,val2);              |
let result2 = addNum(10,2);                   |
-----------------------------------------------

Step1:- Global Execution - this (Located in this)
Step2 :- Memory Phase - val1 - undefined
                        val2 - undefined
                        addNum - defination
                        result1 - undefined
                        result2 = undefined
Step3 :- Execution Phase - val1 <- 10
                           val2 <- 5
                           result1 = addNum :- (Everytime any function is getting executed then a Executional Context is created as (Global Exection happens only once)
                                      which again created the "MEMORY PHASE" and the "EXECTION PHASE" for that particular function ) 
                                 :----> ----------------------------
                                        |   (Exectional Context)   |
                                        | New Variable Enviorment  |
                                        |           +              |
                                        |    Execution Thread      |
                                        ----------------------------

                                    Memory Phase :- val1 - undefined
                                                    val2 - undefined
                                                    total - undefined
                                    Exection Phase :- num1 <- 10
                                                      num2 <- 5
                                                      total <- 15
                                                      Total is returned to the Global Executional Context (At the Start)
                                    The new Executional Context will be deleted after the Ecection of "addNUm"
                            
                            result1 <- 15
                            result2 = addNum (Again the proccess of new Executional Context will be repeated and the final total value will be 
                                              returned to the Global Exectional Context);
                            result2 <- 12
*/


