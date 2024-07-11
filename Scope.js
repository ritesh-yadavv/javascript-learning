if(true){
    const username = "Rama";
    if(username ==="Rama"){
        const website ="Ritesh";
        console.log([username + website]);//run
    }
//console.log(website);//error
console.log(username);
}
//console.log(username);//error


//+++++++++++++++++++++++++


console.log(addOne(8));
function addOne(num){
    return num + 1;
}
//addOne(5);
console.log(addOne(5));



//addTwo(7);
const addTwo = function(num){
    return num + 2;
}
//addTwo(5);
console.log(addTwo(5));



//addThree(8);
const addThree = (num) => {
    return num + 3;
}
console.log(addThree(8));