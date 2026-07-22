//simple fun
// function greet(){
//     console.log("hello world");
// }
// greet()

//simple with parameter
// function greetUser(name,age){
//     console.log("Hello",name,"!!","your age is",age)
// }
// greetUser("srushti",20)
 


// function add(a,b){
//     return a+b
// }
// add20And5 = add(20,5)
// console.log(add20And5)

// function greet1(){
//     return "Hello world"
// }
// str = greet1
// console.log(str)

//funstion (){} anonymous function


//()=>{} anonyms arro function
// greet2=()=>console.log("Hello from arrow function")//arrow function

// addition = (x,y)=>x+y//arrow fun online line without return

// addition1 = (x,y)=>{
//     add = x+y
//     return add
//}//for multiple line  and crrly bracketuse return

//self invoked ana=onyms fun
// (function(){})()

// (()=>{})()

// callback fun
// fun as parameter is callback fun
// function calculation(x,y,add){
//     additionOfTwoNums= add(x,y)
//     console.log(additionOfTwoNums)
//     return additionOfTwoNums
// }
// calculation(10,20,addition1)

//1.write a fuction to create multiplication table of number
function multiplication(num){
for(i=1;i<=10;i++){
    console.log(num , "*",i,"=",num*i)
}
}
multiplication(2);


//2.addtion,sub,mul,div
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b===0){
        return "Division by zero is not allowed"
    }
    return a/b;
}
console.log("Addition",add(5,2));
console.log("Subtration",sub(5,2));
console.log("Multiplition",mul(5,2));
console.log("Division",div(5,2));


function factorial(number){
    for(i=1;i<=number;i++){
    factorialValue = factorialValue*i;
    console.log("Factorial",i,factorialValue);
    
}
}
let factorialValue = 1;
factorial(7)
//swapping 2 number without 2 vairiable


// iter count     iter     n1    n2    temp        result 
// 1                1      0      1      1           0+1=1
// 2                2      1      1      1            2
// 3                3      1      2      2           3
// 4                4      2      3      3           5
// 5                5      3       5     5            8
// 6                6      5       8     8            13
// 7                7      8       13     13           21
// 8                8      12      21     21           34


function fibonacci(ite){
    n1 = 0;
    n2 = 1;
    console.log(n1, n2)
    for(i=3; i<=ite; i++){
        temp = n2
        n2 = n1+n2
        n1 = temp
        console.log(n1, n2)
    }
}
fibonacci(10)