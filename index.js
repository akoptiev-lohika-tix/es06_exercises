// 1. Write a JavaScript program to compare two objects to determine if the first one contains
// equivalent property values to the second one
var compareObjects = function (obj1, obj2) {
    var keys = Object.keys(obj2);
    return keys.every(function (key) { return Object.hasOwn(obj1, key) && obj1[key] === obj2[key]; });
};
console.log(compareObjects({ name: 'Alex', admin: true }, { age: 25, name: 'Alex', admin: true }));
// 2. Write a JavaScript program to converts a specified number to an array of digits
var converter = function (num) {
    var stringCollection = String(num).split('');
    return stringCollection.map(function (item) { return Number(item); });
};
console.log(converter(256));
// 3. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.
var arrayFilter = function (array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};
console.log(arrayFilter([1, 2, 4, 5], 4));
console.log(arrayFilter(['a', 'b', 'c', 'd'], 'b'));
// 4.Convert the length of a given string in bytes
var bytesConverter = function (str) { return new Blob([str]).size; };
console.log(bytesConverter('12'));
// 5.Write a JavaScript program to generate a random hexadecimal color code
var getRandomHexColor = function () {
    return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
};
console.log(getRandomHexColor());
