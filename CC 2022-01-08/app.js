//Reversed sequence
//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]
function reversedSequence(num) {
    let arr = []
    for (let i = num; i >= 1; i--) {
        arr.push(i)
    }
    return arr
}