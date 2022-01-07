//Calculate average
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.
function find_average(arr) {
    if (arr.length === 0) {
          return 0
      }
      let sum = arr.reduce(
          (sum, currentValue) => sum + currentValue
      )
      return sum / arr.length
  }