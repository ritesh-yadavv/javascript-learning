const user ={
    username:"Rama",
    price:999,

    welcomeMess : function(){
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }
}
//user.welcomeMess();
//user.username = "Ram";
//user.welcomeMess();
console.log(this);


// const chai = function(){
//    let userN = "Laiba";
//    console.log(this.userN);
//}
//chai();

const chai = () => {
    let username = "Rama";
    console.log(this.username);
}