// 2.Create a function that takes an array of numbers and a callback. The callback should return true if a number is even. Use the callback to filter the array synchronously. (filter method of array)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenNum(arr, callback) {
    return arr.filter(callback);
}
function ifEven(num) {
    return num % 2 === 0;
}

console.log(evenNum(arr, ifEven));
