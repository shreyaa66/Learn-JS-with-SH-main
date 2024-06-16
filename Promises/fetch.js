async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("E:"+error)
    }
}
//getAllUsers();


//++++++++++++++++++++++++Call by Fetch .then() and .catch()+++++++++++++++++++++++++++++++++
fetch('https://api.github.com/users/ABHI8769')
.then((response)=>{
    return response.json();
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error));


/*
Now all promises are executing after the fetch data this is because of the high priority of the callBack queue
named as "Fetch queue/MircoTask Queue/Priority" 
Queue which is specially made for fetch() to get the data and get it's execution done

Now the moment the execution of fetch occurs in memory there are two things goes asyncronously 
or we can say in a paralell way 
1. Data Space reservernce
2. API Call to Web Browser/Node 

Let me demonstrate it throught a graph :-

                response = fetch(''something)                   |
                            |                                   |
                            |                                   |
                            |                                   |
                           / \                                  |
                          /   \                                 |
                         /     \                                |
                        /       \                               |
                       /         \                              |
                      /           \                             |             Global Memory :
                     /             \                            | response (Variable to get the data by Fetch)
       --<--Data Field:<--<---|  API Call : Web Browser/Node    |                   |
       |    1.OnFullFilled[]<--          |                      |                   |
       |                      |          |                      |                   |
       |    2.onRejection[]--->     Network Request             |                   |
       |                                 |                      |                   |
       |                                / \                     |                   |
       |                               /   \                    |                   |   
       |                             ✔️    ❌                  |                   |
       |                                                                            |
       ------------------------------------------------------------------------------

--> All these data fields are private we don't have the acess to them 
    and obiviously the onFullFilled[] array in this array the resolved data get pushed
    of whom we dont't have a access same goes with the onRejection[] array the rejected data get pushed
    again we don't have any access of this array all these arrays and data are private can't be accessed by the developer 

--> Now , Let's talk about the API Call which happends throught the Web Browser/Node now a Network request will be fired and we can't fire this
    request by yourself you need a resource Eiether the Web Browser will give you the resouce or the Node will give you the resource

--> Now , if we get the network request through any of the above sources Either the request will get the data or will not get the data
    -> If it gets the data then response goes to the ---> onFullFilled[] array (Even the response failed and you will get the 404 error then also 
                                                                                it will go to the onFullFilled one only , So every hit to the network which
                                                                                even gives a error code it will only be stored in the onFullFilled[] array.

    -> And if in case it don't get the data or if the --> onRejection[] array
       network request is unable to reach then it
       goes to

--> Now , when fetch gets fired at that time Data is empty or we can say it is undefined and when Either of the arrays get fired by the network request
 where the both arrays hold functions which are reponsble to give OR to fullfill the data
 
-->Now once the Data will fulfill the value then It's Data's reponsibility to dilver the response to the Global Varibale response 
*/

