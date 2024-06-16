//Immediately Invoked Function Expression (IIFE)
//Need -> Global Scope pollution of variables and accessabilities

(function chai(){
    console.log('DB Connected')
})();

( (name)=>{
    console.log(`DB Connected two ${name}`)
})("Abhijeet");