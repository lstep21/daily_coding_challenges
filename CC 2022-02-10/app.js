//Vowel Count
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
function vowelCount(str) {
    let vowels = str.replace(/ /g, "").split('')
    .filter( letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' )
    return vowels.length
}