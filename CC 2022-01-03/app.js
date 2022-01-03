//Get the mean of an array
//Return the average of the given array rounded down to its nearest integer.
function average(arr) {
    let sum = arr.reduce(
        (sum, currentValue) => sum + currentValue
    )
    return Math.floor(sum / arr.length)
}