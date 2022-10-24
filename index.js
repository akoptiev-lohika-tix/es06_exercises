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
// 11. Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1
var findElements = function (arr) {
    if (arr.length === 1) {
        return arr;
    }
    return arr.slice(1);
};
console.log(findElements([7, 5, 6, 8, 9]));
console.log(findElements([7]));
// 12. Write a JavaScript program to get a random number in the specified range.
var random_Number_In_Range = function (min, max) {
    var random = Math.random() * max;
    return random < min ? min : random;
};
console.log(random_Number_In_Range(2, 10));
// 13. Write a JavaScript program to get an array of given n random integers in the specified range.
var random_intArray_In_Range = function (min, max, n) {
    if (n === void 0) { n = 1; }
    return Array.from({ length: n }, function () {
        return Math.floor(random_Number_In_Range(min, max));
    });
};
console.log(random_intArray_In_Range(1, 20, 10));
// 14. Write a JavaScript program to get a random integer in the specified range.
var randomIntegerInRange = function (min, max) {
    return Math.floor(random_Number_In_Range(min, max));
};
console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
// 15. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.
var pad = function (str, length, char) {
    if (char === void 0) { char = ' '; }
    var lengthToAdd = (length - str.length) / 2;
    var valueToAdd = char.repeat(lengthToAdd);
    return "".concat(valueToAdd).concat(str).concat(valueToAdd);
};
console.log(pad(String(42), 6, '0'));
// 16. Write a JavaScript program to create an array of key-value pair arrays from a given object.
var object_to_pairs = function (obj) {
    return Object.entries(obj);
};
console.log(object_to_pairs({ a: 1, b: 2, c: 3 }));
// 17. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
var omit = function (obj, arr) {
    return Object.entries(obj).filter(function (item) { return item[0] !== arr[0]; });
};
console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
// 18. Write a JavaScript program to create an object from the given key-value pairs.
var object_From_Pairs = function (arr) {
    var result = {};
    arr.forEach(function (item) {
        result[item[0]] = item[1];
    });
    return result;
};
console.log(object_From_Pairs([
    ['a', 1],
    ['b', 2],
]));
// 19.Write a JavaScript program to remove falsey values from a given array.
var removeFalsey = function (arr) {
    return arr.filter(function (item) { return Boolean(item); });
};
console.log(removeFalsey([0, 1, false, 2, '', 3, 'a', 'e', 23, NaN, 's', 34]));
// 20. Write a JavaScript program to split values into two groups, if an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
var splitToGroups = function (arr, filter) {
    var result = [[], []];
    arr.forEach(function (item, i) {
        filter[i] ? result[0].push(item) : result[1].push(item);
    });
    return result;
};
console.log(splitToGroups(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));
