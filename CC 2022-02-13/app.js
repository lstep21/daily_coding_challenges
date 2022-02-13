//Highest and Lowest
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//highAndLow("1 2 3 4 5");  // return "5 1"
function highAndLow(str) {
    let numArr = str.split(' ').map(Number)
    let maxNum = Math.max(...numArr)
    let minNum = Math.min(...numArr)
    return `${maxNum} ${minNum}`
}