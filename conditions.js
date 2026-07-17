let age =101;
if(age>0 && age<=100){
if(age<18){
    console.log("you are minor.")
}else if(age === 18){
    console.log("you just become adult.");
}else{
    console.log("you are adult.");
}}else{
    console.log("Invalid");
}


//factorical
let number = 5;
let factorialValue = 1;
for(i=1;i<=number;i++){
    factorialValue = factorialValue*i;
    console.log(i,factorialValue);
}
console.log("factorial of",number,"is",factorialValue)