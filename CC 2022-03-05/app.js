//Exes and Ohs
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//XO("ooxx") => true
function XO(str) {
    let arr = str.split('')
    let xNum = arr.filter( x => x === 'x' || x === 'X' )
    let oNum = arr.filter( o => o === 'o' || o === 'O')
    if (xNum.length === oNum.length) {
        return true 
    } else {
        return false 
    }
}