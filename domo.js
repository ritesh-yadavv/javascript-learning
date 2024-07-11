let para = document.querySelector("p");
console.log(para.getAttribute("class"));


let newBtn = document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "green";

document.querySelector("body").prepend(newBtn);
