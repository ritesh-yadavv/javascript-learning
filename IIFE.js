// immediately Invoked Function Expressions (IIFE)

(function amit(){
    console.log("DB CONNECTED");
})();



( () =>{
    console.log("Without DB CONNECTED");
})();


( (name)=>{
    console.log(` It is DataBase by ${name}`);
})("Raju");

