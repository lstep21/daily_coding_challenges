//Shortest Word
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
function shortestWord(str) {
    let wordArr = str.split(' ').sort ( (a,z) => a.length - z.length )
    return wordArr[0].length
}