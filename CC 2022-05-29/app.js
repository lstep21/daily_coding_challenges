//No Loops 1 - Small enough?
// *** No Loops Allowed ***
// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.
// Do not use loops. Do not modify input array.
function smallEnough(a, limit){
    return a.every( x => x <= limit )
}



//No Loops 2 - You only need one
// *** No Loops Allowed ***
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
function check(a,x){
    return a.includes(x)
};