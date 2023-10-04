//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Answer

function reverseWords(str) {
    let reverseWordArr = str.split(' ').map(word => word.split('').reverse().join(''))
    return reverseWordArr.join(' ')
  }