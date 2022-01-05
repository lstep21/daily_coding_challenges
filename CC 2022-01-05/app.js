//Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBinary(str) {
    let arr = str.split('')
    let binary = arr.map(
        num => {
            if (num < 5) {
                return 0
            } else {
                return 1
            }
        }
    )
    return binary
}