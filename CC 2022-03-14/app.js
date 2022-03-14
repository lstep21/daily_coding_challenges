//Grasshopper - Personalized Message
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function message(name, owner) {
    if (name === owner) {
        return 	'Hello boss'
    } else {
        return 'Hello guest'
    }
}