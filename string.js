name1='Srushti'
name2="Malode"
name = name1 + " "+ name2
console.log(name)

str = `I like to learn 
        Javascript`
console.log(name.length)
console.log(str.length)
console.log(name.charAt(0))
console.log(name[0])

//toUpperCase and toLowerCAse
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//concat()
str1 = "Hello"
str2="World"
msg = str1.concat(" ",str2,"!!!")
console.log(msg)

//indexOf()
index1 = msg.indexOf("hello")
console.log(index1)
index2= msg.indexOf("Hello")
console.log(index2)
console.log(msg.indexOf('o'))
console.log(msg.lastIndexOf('o'))

//returns boolean value true or false
console.log(msg.includes('Hello'))
console.log(msg.includes('iuytre'))

//starswith(),endsWith()
console.log(msg.endsWith('!!'))
console.log(msg.endsWith('world!!!'))

//slice(),substring(),substr()
//first paramter index and second parameter is also index
substr = msg.slice(0,4)
console.log(substr)
substr1 = msg.slice(1,7)
console.log(substr1)
console.log("***substring***")
substr3 = msg.substring(0,4)
console.log(substr3)
substr4 = msg.substring(1,7)
console.log(substr4)

substr5 = msg.substr(0,4)
console.log(substr5)
substr6 = msg.substr(1,7)
console.log(substr6)



//differnce od slice substring and substr
//slice,substring -----> index number
//substr ----->  length

substr7 = msg.substr(5)
console.log(substr7)
substr8 = msg.substring(5)
console.log(substr8)
substr9 = msg.slice(5)
console.log(substr9)

//trim(),trimStar(),strimEnd()
//use only for space remove
msg1 = "       Hello      "
console.log(msg1.length)
console.log(msg1.trim().length)
console.log(msg1.trimStart().length)
console.log(msg1.trimEnd().length)


//replace() and replace()
str10 = str.replace('like','love')
console.log(str10)

msg3 = "It's okay if you dont like computer programming.It's smart people thing anyway"
msg4 = msg3.replaceAll("It's","Its")
console.log(msg4)

//split()
fruitsString = 'Apple Banana Mango'
fruitArray = fruitsString.split()
console.log(fruitArray)
fruitArray1 = fruitsString.split('')
console.log(fruitArray1)
fruitArray2 = fruitsString.split(' ')
console.log(fruitArray2)


