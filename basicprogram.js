let x = 5;
let y = "5";
console.log(x+y);

let a;
console.log(typeof a);

let name="JS";
let year = 2026;
console.log(name+year);

console.log(10>5);
console.log(5 == "5");
console.log(5==="5");

let num=10;
if(num>5){
    console.log("Big");
}else{
    console.log("Small");
}

console.log(typeof"hello")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof undefined)

let c  = "10";
let d  = 2;
console.log(c*d);

// type casting -- for datatype change
let value = "20";
value = Number(value);
console.log(typeof(value));

let age = 28;
if(age>=18){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}


num1 = 51234
sumDigit = 0
while(num1>0){
    digit=num1%10
    console.log(digit,"digit")
    sumDigit=sumDigit+digit
    console.log(sumDigit,"sumdigit")
    num1=Math.floor(num1/10)
    console.log(num1,"num1")
}
