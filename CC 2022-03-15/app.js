//Drink about
//Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"
function drink(num) {
    if (num < 14) {
        return "drink toddy"
    } else if (num < 18) {
        return "drink coke"
    } else if (num < 21) {
        return "drink beer"
    } else if (num >= 21) {
        return "drink whisky"
    }
}