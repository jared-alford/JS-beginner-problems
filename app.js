/*
function addition(num1, num2) {
  return num1 + num2
}

console.log(addition(8, 5));

function hoursIntoSeconds(hours) {
  return hours * 3600
}

console.log(hoursIntoSeconds(4));

function calcPerimeter(length, width) {
  return length * 2 + width * 2
}

console.log(calcPerimeter(2, 2));

function calcAreaOfTriangle(base, height) {
  return (base * height) / 2;
}

console.log(calcAreaOfTriangle(5, 8));

function appendFrontend(string) {
  return string + " Frontend";
}

console.log(appendFrontend("banana"));


function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100
}

console.log(sumGreaterThan100(6, 3));

function lessThanOrEqualToZero(num) {
  return num <= 0;
}

console.log(lessThanOrEqualToZero(-8));


function oppositeBoolean(bool) {
  if (bool === true)
    return false;
  else if (bool === false) 
    return true;
}

function oppositeBoolean(bool) {
  return !bool;
}
console.log(oppositeBoolean(false))



function isNotZero(num) {
  if (num !== 0) {
    return true;
  }
  else {
    return false;
  }
  
  function isNotZero(num) {
    return num !== 0;
  }

console.log(isNotZero(-42));


function calcRemainder(num1, num2) {
  return num1 % num2;
}

console.log(calcRemainder(73, 3));


function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }
  else {
    return true;
  }
}

function isOdd(num) {
  return num % 2 === 0;
}

console.log(isOdd(21));


function booleanInteger(num) {
  if (num % 2 === 0) {
    return  1;
  }
  else {
    return -1;
  }
}

function booleanInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(3));



function isLoggedInAndSubscribed(string1, string2) {
  if (string1 === "LOGGED_IN" && string2 === "SUBSCRIBED") {
    return true;
  }
  return false;
}

function isLoggedInAndSubscribed(string1, string2) {
  return (string1 === 'LOGGED_IN') || (string2 === 'SUBSCRIBED');
  )
}


function falsyOrTruthy(elem1, elem2) {
  if (!elem1) {
    return elem1;
  }
  return elem2;
}

function falsyOrTruthy(elem1, elem2) {
  !elem1 ? elem1 : elem2;


function arrLength(arr) {
  return arr.length;
}

function lastElement(arr) {
  return arr[arr.length - 1];
}



function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([4, 5, 2, 6, 0, 10]));

function progressiveSum(num) {
  let sum = 0;
  for (let i = 0; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3))



function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes;
  }
  return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(500));



function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([4, 4, 5, -3]));



function reverseString(string) {
  let reversedString = '';
  for (let i = 0; i < string.length; ++i) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
}

function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; --i) {
    reversedString += str[i];
  }
  return reversedString;
}


function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('abc'));


function convertToZeros(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}

function convertToZeros(arr) {
  return arr.map(elem => 0);
}
console.log(convertToZeros([3, 5, 2, 5]))


function removeApples(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'Apple') {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function removeApples(arr) {
  return arr.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Banana', 'Apple', 'Orange']));



function filterOutFalsy(arr) {
  return arr.filter(elem => !!elem === true);
}

function filterOutFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

console.log(filterOutFalsy([null, 6, NaN, undefined, 0, -1, 3]));



function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}
console.log(convertToBoolean([5, 4, 0, null, 7]))

*/