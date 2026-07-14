//Numbers
let age = 10;
let temp = -5;
console.log(age , temp);
//Strings
let name = "srushti";
let message = "hello , how are you?";
console.log(name,message);
//Booleans
let isSrushti = true;
let isTired   = false;
console.log(isSrushti,isTired);
//Objects
let car = {
    color :"red",
    wheels:4,
    isElectric:true
};
console.log(car);
//Arrays
let favoriteColor = ["blue","red","green"];
let score = [100,90,80];
console.log(favoriteColor,score);
//undefine
let toy;
let lostToy = null;
console.log(toy,lostToy);
//BigInt
let stars = 12345678901238774628291n;
//Symbol
let secret = Symbol("code");
console.log(stars,secret);


//Numbers
let x = 10;
let y = 5 ;

let add = x+y;
console.log("add:",add);
let mult = x*y;
console.log("Multiply:",mult);
let div = x/y;
console.log("division:",div);

//strings
let favoritemovie = "MS-Dhoni";
let moviemessage = "I Love Watching" + favoritemovie;
console.log(moviemessage);


//Boolean
let isHungry = true;
if (isHungry){
    console.log("Go eat");
}else{
    console.log("You're full");
}

//Objects
let favoriteAnimal={
    name:"Buddy",
    type :"dog",
    age : 3,
    isFriendly : true
};
console.log(favoriteAnimal);
console.log("Animal's name is :",favoriteAnimal.name);

//Array
let colors = ["red","green","purple","blue","yellow"];
console.log(colors);

colors.push("pink");
console.log("After adding color:",colors);

colors.pop();
console.log("After removing last color:",colors);

//undefined and null
let mystery;
console.log("Value",mystery,"Type:",typeof mystery);
mystery =null;
console.log("Value:",mystery,"Type:",typeof mystery);


//BigInt
let bigNumber = 12345678909876543234567n;
console.log(bigNumber *2n);

//Symbol
let symbol1 = Symbol("unique");
let symbol2 = Symbol("unique");
console.log(symbol1==symbol2);