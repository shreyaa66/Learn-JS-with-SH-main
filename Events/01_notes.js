/*
// document.getElementById('owl').onclick = function (){
    //     alert('Owl Clicked');
    // }

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode
    
    document.getElementById('images').addEventListener('click',function(e){
        console.log('Clicked URL.... ')
    },false)

    document.querySelector('#owl').addEventListener('click',function(e){
        console.log('Owl clicked Again... ')
        e.stopPropagation();
    },false)

    //false and the third argument in addEventListner is Event Propgation
    
    *Event Propogation :- How d you want to propgate the addEventListner or the need of execution comes in the picture

    *Event Propgation have two types :-

    1. Event Bubbling(false,defualt) :- How bubble actually behaves that it goes small to big
    Hence , the Event Bubbling in the Event Propogation comes in the picture by default/putting false as an argument
    where it will encounter the event listener of inner tags and then the outer one 
    which means it goes from child to parent 
    
    2. Event Capturing(true) :- Now , here what Event capturing means

    Now , stopPropagation() comes into the picture which stops the eventListner to bubble to the parent Node or element it stops after the execution 

    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Demonstartion of Event Propgation and target access methods like id , tagName, nodeName

    document.querySelector('#images').addEventListener('click',function (e){
        console.log(e.target.parentNode)
        const removeIt = e.target.parentNode
        const id = e.target.id;

        if(e.target.parentNode.tagName ===  'UL'){
            return;
        }
        else if(id === 'google'){
            e.preventDefault();
            removeIt.remove()
        }
        else{
            removeIt.remove();
        }
    },false)
*/