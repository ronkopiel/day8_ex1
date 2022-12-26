// Write a function prints numbers from 1 to 10 using a for loop
function printTen() {
    for (i=1;i<=10;i++) {
        console.log(i);
    }
}
printTen();

// Write a function that will print out the even numbers from 1 to 10 using a for loop
function printTenEven() {
    for (i=2;i<=10;i+=2){
        console.log(i);
    }
}
printTenEven();

// Write a function with a number as a parameter that prints all even numbers up to the number and including the number. Don’t include 0.
function printEven(num) {
    if (num>0) {
        for (i=2;i<=num;i+=2) {
            console.log(i);
        }
    }
    if (num<0) {
        for (i=-2;i>=num;i-=2) {
            console.log(i);
        }
    }
}
printEven(293);

// Write a function that will print out the numbers from 1 to 20, but skip the number 13.
function dontPrintThirteen() {
    for (i=1;i<=20;i++){
        if(i==13) ;
        else console.log(i);
    }
}
dontPrintThirteen();

// Write a function that will print out the numbers from 1 to 10 using a for loop, but reverse the order so that the numbers are printed in descending order.
function printTenReverse() {
    for (i=10;i>=1;i--) {
        console.log(i);
    }
}
printTenReverse();

// Write a function that will print out the odd numbers from 1 to 10 using a for loop, but stop the loop when it reaches the number 7.
function printOddToSeven() {
    for (i=1;i<=10;i+=2){
        if(i == 7) return console.log(i);
        else console.log(i);
    }
}
printOddToSeven();

// Write a function that's console.log all the elements of an array.
const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
function logArray(maarach) {
    for (i = 0; i < maarach.length ;i++){
        console.log(maarach[i]);
    }
}
logArray(array);

// Write a function to print Even numbers in any given array: 
function printEvenNumbers(array2) {
    for (i = 0; i < array2.length ;i++){
        if(array2[i]%2 == 0){
            console.log(array2[i]);
        }
    }    
}
printEvenNumbers([1,2,3,4,5,38,34,56,55,43,44,64,59]);

// Write a function that returns array sum.
function sumArray(toBeSumed) {
    let sum = 0;
    for (i=0; i<toBeSumed.length; i++){
        sum += toBeSumed[i];
    }
    return sum;
}
console.log(`the sum is:${sumArray([1,2,3,4,5])}`);


// Write a JS code to count all letters in a word
function countLetters(word) {
    let letterArray = word.split("");
    let letterCounter = 0;
    if (letterArray.includes(" ")){
        return "please enter one word";
    }
    else {
        for (i=0; i<letterArray.length; i++) {
            ++letterCounter;
        }
        return letterCounter;
    }
}
console.log(countLetters('dog and cat'));
console.log(countLetters('dogandcat'));
console.log(countLetters('dog'));

//Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
function sortOddsAndEvens(oddsAndEvens) {
    let evens = [];
    let odds = [];
    for (i=0; i<oddsAndEvens.length; i++) {
        if (oddsAndEvens[i]%2 === 0) {
            evens.push(oddsAndEvens[i]);
        }
        else {
            odds.push(oddsAndEvens[i]);
        }
    }
    console.log(evens);
    console.log(odds);
}
sortOddsAndEvens([2,3,13,18,-5,38,-10,11,0,104]);

// Check if a string contains the letter “y” using a for loop. Print “yes” if it does and “no” if it does not.
function isY(string) {
    for (i=0; i<string.length; i++) {
        if (string[i] == 'y') return console.log('yes');
    }
    return console.log('no');
}
isY('hi my name is ron');
isY('hi im ron');

//Write a function to find the largest number in an array
function findMax(numArray) {
    let maxNumber = numArray[0];
    for (i = 0; i < numArray.length; i++){
        if (maxNumber<numArray[i]) {
            maxNumber = numArray[i]
        }
    }
    return maxNumber;
}
console.log(findMax(array));
console.log(findMax([10012,234,5643,2222,1087564,1,2,3,4,22222]));
console.log(findMax([-10012,-234,-5643,-2222,-1087564,-1,-2,-3,-4,-22222]));