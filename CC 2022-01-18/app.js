//Abbreviate a Two Word Name
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name){
    const newArray = name.split(" ")
    return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
}