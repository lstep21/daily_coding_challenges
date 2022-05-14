//Find numbers which are divisible by given number
//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
function divisibleBy(arr, divisor) {
    return arr.filter( n => n % divisor === 0 )
}