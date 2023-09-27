// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//Answer

function descendingOrder(n){
    let result = n
      .toString()
      .split('')
      .sort((a,b)=>b-a)
      .join('')
    return parseInt(result)
  }