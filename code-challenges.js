// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.
var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisble by three"

//Declare a function that takes in a number
const numDivBy3 = (number) => {
    //if that number is divisble by 3 evenly return the original number + is divisble by three
    if (number % 3 === 0) {
        return `${number} is divisble by three`
    //if the number is not evenly divisble by 3 return the og number + is not divisble by three
    } else {
        return `${number} is not divisble by three`
    }
}
//run the function with the variable provided
// console.log(numDivBy3(num1))
// console.log(numDivBy3(num2))
// console.log(numDivBy3(num3))

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//declare a function that takes array as a parameter
const capNouns = (arr) => {
    //create a new empty array for the new array to be pushed into
    var nounsNowCap = []
//iterate through that array and capitalize the first letter in every word
    for(let i = 0; i < arr.length; i++) {
        nounsNowCap.push(randomNouns[i].charAt(0).toUpperCase()+ randomNouns[i].slice(1))
    } 
    //return the newly capitalized words into a new array because you don't want to modify original data.
    return nounsNowCap
}
// console.log(capNouns(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
//declare a function that takes in an array
const onlyNums = (arr) => {
    //iterate through array using .filter() look for typeof value being a number and sort them from least to greatest, finally return the new array with only the numbers
    return arr.filter(value => typeof value == "number").sort(function(a, b){return a-b})
}
// console.log(onlyNums(mixedDataArray))


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//declare a function that will take in a string
const firstVowel = (str) => {
    //split string into an array
    let stringArr = str.split("")
    //create a variable that will take in vowels
    //iterate through that string if the value is a vowel push that into new variable
    let vowelsOnly = stringArr.filter(letter => letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u")
    //store vowelsOnly into given string
    let firstVowelInString = vowelsOnly[0]
    //return the index of the first vowel in a word
    let indexOfVowel = str.indexOf(firstVowelInString)
    return indexOfVowel
}
    
// console.log(firstVowel(vowelTester1))
// console.log(firstVowel(vowelTester2))

// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// establish a variable that stores all mathematical operations
var operations = {
    "+": function (num1, num2) {
        return num1 + num2
    },
    "-": function (num1, num2) {
        return num1 - num2
    },
    "*": function (num1, num2) {
        return num1 * num2
    },
    "/": function (num1, num2) {
        return num1 / num2
    }
}
//create function that takes in two num arguments plus mathematical operations
const calculator = (number1, operator, number2 ) => {
    // If no numbers entered return error message
    if(number1 === null || number2 === null) {
        return "Enter yo digits first!"
    } 
    //if input is not a number return error messsage
    if(isNaN(number1) || isNaN(number2)) {
        return "I can only calculate numeros"
    }
    //if divided by zero return can't divide by 0!
    if(number2 === 0 && operator === "/"){
        return "Can't divide by 0!"
    } 
    //if can perform the given operation do so and return the result
    return operations[operator](number1, number2) 
}
// Uncomment and use the following console logs to test your function
// console.log(calculator(3, "*", 9))
// // Expected output: 27
// console.log(calculator(16, "+", 3))
// // Expected output: 19
// console.log(calculator(89, "/", 0))
// // Expected output: "Can't divide by 0!"
// console.log(calculator("a", "-", "b"))
// Expected output: "I can only calculate numeros"

// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"
//Declare a function that takes in array 
const ioWebsites = (arr) => {
    //return the ".io" values by filtering the values in the array
    //only return the inputs that have ".io"
    //then rejoin array into strings with a space between
    //ensure the input is lowercase
    //return the ".io" urls
   return arr.filter(value => value.slice(-3) === ".io").join(" ").toLowerCase()
   
}
// console.log(ioWebsites(websites))

// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

//Declare a function that takes in a num
const counter = (num) => {
    //ensure input is a number if not return error message
    if (isNaN(num)) {
        return "Numbers only please"
    }
    //Initialize variable to start at zero
    let initialCount = 0
    //While loop to iterate number +1
    while(initialCount < num + 1) {
        //Console.log count
        console.log(initialCount)
        //Increment count by one
        initialCount++
    }
    
}
 counter(15)
// //expect 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
 counter(7)
//expect 0,1,2,3,4,5,6,7
console.log(counter("Heyo"))
//expect "Numbers only please"