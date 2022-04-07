/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/



/* WRITE YOUR ANSWER HERE */

let area = (l1, l2) => l1 * l2;
let myArea = area(5, 2);
console.log(myArea);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

function crazySum(a, b){
    if(a === b){
        return (a + b) * 3;
    }else {
        return a + b;
    }
}

let result = crazySum(4, 3);
console.log(result);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

const crazyDiff = function(number){
    if(number > 19){
        let diff = number - 19;
        return diff * 3;
    }else {
        return Math.abs(number - 19);
    }
}

let crazyResult = crazyDiff(10);
console.log(crazyResult);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

let boundary = n =>{
    if(n >= 20 && n <= 100 || n === 400){
        return true;
    }
}

let boundaryResult = boundary(400);
console.log(boundaryResult);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

let strivify = function(word){
    if(word.startsWith("Strive")){
        return word;
    }else{
        return "Strive " + word;
    }
    
}

let striveResult = strivify("Strive permit");
console.log(striveResult);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

let check3and7 = function(postNumber){
    if(postNumber % 3 === 0 || postNumber % 7 === 0){
        return "yes";
    }else {
        return "No";
    }
}

let check3and7Result = check3and7(7);
console.log(check3and7Result);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

let reverseString = function(word){
    return word.split("").reverse().join("");
}

let reverseResult = reverseString("Strive");
console.log(reverseResult);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

let upperFirst = function(word){
    let firstWord = word[0];
    let restWord = word.slice(1)
    return firstWord.toUpperCase() + restWord.toLowerCase();
}

let titleCase = upperFirst("aKEem");
console.log(titleCase);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
function cutString(word){
    let first =  word.split("");
    first.shift();
    first.pop();
    
    return first.join("");
}

console.log(cutString("Wale"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
