//Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    return this.split(' ').map ( x => {
          return x.charAt(0).toUpperCase() + x.slice(1)
      }  ).join(' ')
};

//Consecutive items
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.
//P: arr, a , b
//R: true or false 
//E: [5,6,7,8,9], 7, 8
function consecutive(arr, a, b) {
    if (arr.indexOf(a) === arr.indexOf(b) + 1 || arr.indexOf(a) === arr.indexOf(b) - 1 ) {
        return true 
    } else {
        return false 
    }
}

//Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
function dontGiveMeFive(a,b) {
    let arr = []
    for (i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr.filter ( x => !String(x).includes('5')).length
}

//Incrementer
// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2
function incrementer(nums) {
    return nums.map ( (element, index) => element + index + 1 ).map ( x => Number(String(x).charAt(String(x).length -1)) )
}