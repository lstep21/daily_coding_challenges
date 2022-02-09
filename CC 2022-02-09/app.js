//Grade book
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function grade(n1, n2, n3) {
    let score = (n1 + n2 + n3) / 3
    if (score >= 90 && score <= 100) {
        return 'A'
    } else if (score >= 80 && score <= 90) {
        return 'B'
    } else if (score >= 70 && score <= 80) {
        return 'C'
    } else if (score >= 60 && score <= 70) {
        return 'D'
    } else {
        return 'F'
    }
}