// 2.0 create an array with no elements inside of it, log the array
const array = []
console.log('array: ${JSON.stringify(array, null, 2)}')
// 2.1 use array.push to add a number to the array, log the array
array.push(1)
console.log('array: ${JSON.stringify(array, null, 2)}')
// 2.2 create a new array with a number already inside of it, log the array
const newArray = [2]
console.log('newArray: ${JSON.stringify(newArray, null, 2)}')
// 2.3 use array.pop to remove an element from the back of the array
newArray.pop()
console.log('newArray: ${JSON.stringify(newArray, null, 2)}')
// 2.4 push two more numbers into your array
newArray.push(2, 3)
console.log('newArray: ${JSON.stringify(newArray, null, 2)}')
// 2.5 use spread syntax to combine arrays from above problems, log the results
const thirdArray = [...array, ...newArray]
console.log('thirdArray: ${JSON.stringify(thirdArray, null, 2)}')
// 2.6 use array.find to locate one of the elements in your array, log the located result
const found = thirdArray.find(number => number === 2)
console.log('found: ${found}')

// 2.7 use array.every to determine if every single number is above "5", log the result
const areAllNumbersAbove5 = thirdArray.every(number => number > 5)
console.log('areAllNumbersAbove5: ${areAllNumbersAbove5}')
// 2.8 use array.filter to remove any numbers smaller than 5, log the result
const numbersGreaterThan5 = thirdArray.filter(number => number > 5)
console.log('numbersGreaterThan5: ${JSON.stringify(numbersGreaterThan5, null, 2)}')
// 2.9 use array.sort to sort the items from smallest to largest
const sortedArray = thirdArray.sort
console.log('sortedArray: ${sortedArray}')
// 2.91 use array.reverse to reverse the items so that they are now largest to smallest
const reverseSortedArray = sortedArray.reverse()
console.log('reverseSortedArray: ${reverseSortedArray}')
// 2.92 use array.reduce to sum up the entire list of numbers in the array
const sum = thirdArray.reduce((sum, currentNumber) => sum += currentNumber, 0)
console.log('sum: ${sum}')
// 2.93 use array.map to scale each number in the array up by a factor of 10
const scaledArray = thirdArray.map((number) => number * 10)
console.log('scaledArray: ${scaledArray}')
