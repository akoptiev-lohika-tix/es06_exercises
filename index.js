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
// 6.Write a JavaScript program to remove specified elements from the left of a given array of elements.
var removeLeft = function (array, num) { return array.slice(num); };
console.log(removeLeft([1, 2, 3], 2));
// 7.Write a JavaScript program to get every nth element in a given array
var findElement = function (array, num) {
    var result = [];
    var k = num - 1;
    for (var i = 0; i < array.length; i++) {
        if (i === k) {
            k += num;
            result.push(array[i]);
        }
    }
    return result;
};
console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8], 3));
// 8.Write a JavaScript program to filter out the non-unique values in an array.
var filterNonUnique = function (array) {
    return Array.from(new Set(array));
};
console.log(filterNonUnique([1, 2, 3, 4, 5, 5, 6, 7, 7, 8]));
// 9.Write a JavaScript program to decapitalize the first letter of a string.
var decapitalize = function (str) {
    var arr = str.split('');
    arr[0] = arr[0].toLowerCase();
    return arr.join('');
};
console.log(decapitalize('RED'));
// 10. Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.
var yesOrNo = function (value, def) {
    if (def === void 0) { def = false; }
    return /^(y|yes)$/i.test(value) ? true : /^(n|no)$/i.test(value) ? false : def;
};
console.log(yesOrNo('Y'));
