//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//Answer

function squareSum(numbers){
    return numbers.reduce((acc, currVal) => {
      return Math.pow(currVal, 2) + acc}, 0)
  }