//Count Odd Numbers below n
//Given a number n, return the number of positive odd numbers below n, EASY!
//* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
function countOddNums(n) {
    return Math.ceil((n - 1) / 2)
}