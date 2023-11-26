/* Also see this for iterator methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods*/

/**************************/
//Example 1: Calling a function and passing another function in to it.

//The code defines a function `addTwo` that adds 2 to a given number, and another function.
const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA = val + 4;
  let checkB = func(val);
    if(checkA === checkB) {
      return checkB;
    } else {
       return "inconsistent results";
    }
  }
  //checkConsistentOutput() passes the funtions addTwo as its first parameter, effectively returning the result of addTwo as its first parameter.
 console.log('Example 1');
  console.log(checkConsistentOutput(addTwo, 10));
/**************************/

//Example 2: .forEach() iterators.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

console.log('Example 2');
// uses the .forEach() method to iterate over each element in the fruits array.
fruits.forEach(fruitItem =>
console.log(`I want to eat a ${fruitItem}`));
/**************************/

//Example 3: .map takes an argument of a callback function and returns a new array

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/*
1. Create a results variable secretMessage;
2. Use the .map iterator to sequence through the animals array;
3. Create an unnamed function to return the first character ([0]) of the current (and therefore every) iteration of the array.
*/
const secretMessage = animals.map(msg => {
  return msg.charAt(0);
})

console.log('Example 3');
//.join returns an array as a string.
console.log(secretMessage.join(''));
/**************************/

//Example 4: .filter() returns an array of elements after filtering out certain elements from the original array. Its callback function should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below.
//On each iteration, only if the array element is less than 250, will it return true and the element added to smallNumbers. 
const smallNumbers = randomNumbers.filter(smalls => {
  return smalls < 250;
})

/**************************/

//Example 5: Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

const animalsArray = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//This will return only 'elephant'.
const foundAnimal = animalsArray.findIndex(animal => {
  return animal === 'elephant';//This will return only 'elephant'.
  /* another example that will return only array elements starting with 's'.
  return animal.charAt(0) === 's';
  */
})
/**************************/

//Example 6:

/*The reduce() method: - 
1. executes a reducer function for array element.
2. returns a single value: the function's accumulated result.
3. does not execute the function for empty array elements.
4. does not change the original array.
https://www.w3schools.com/jsref/jsref_reduce.asp*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10)//2nd argument ('10' here, acts as offset)
console.log(newSum);

/* returns
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26*/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

//  Choose a method that will return undefined. 
// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array 
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
// .reduce() iterates through an array and takes the values of the elements and returns a single value.
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
  }, "C");
console.log(word);

const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array. 
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

// .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

// All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

