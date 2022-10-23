// 1. Write a JavaScript program to compare two objects to determine if the first one contains
// equivalent property values to the second one

const compareObjects = (
    obj1: Record<string, any>,
    obj2: Record<string, any>
): boolean => {
    const keys = Object.keys(obj2);

    return keys.every(
        (key) => Object.hasOwn(obj1, key) && obj1[key] === obj2[key]
    );
};

console.log(
    compareObjects(
        { name: 'Alex', admin: true },
        { age: 25, name: 'Alex', admin: true }
    )
);

// 2. Write a JavaScript program to converts a specified number to an array of digits
const converter = (num: number): number[] => {
    const stringCollection: string[] = String(num).split('');

    return stringCollection.map((item) => Number(item));
};

console.log(converter(256));

// 3. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.
const arrayFilter = <T>(array: T[], item: T): T[] => {
    for (let i = 0; i < array.length; i++) {
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
const bytesConverter = (str: string): number => new Blob([str]).size;
console.log(bytesConverter('12'));

// 5.Write a JavaScript program to generate a random hexadecimal color code
const getRandomHexColor = (): string =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

console.log(getRandomHexColor());

// 6.Write a JavaScript program to remove specified elements from the left of a given array of elements.
const removeLeft = <T>(array: T[], num: number): T[] => array.slice(num);
console.log(removeLeft([1, 2, 3], 2));

// 7.Write a JavaScript program to get every nth element in a given array
const findElement = <T>(array: T[], num: number): T[] => {
    const result: T[] = [];
    let k = num - 1;

    for (let i = 0; i < array.length; i++) {
        if (i === k) {
            k += num;
            result.push(array[i]);
        }
    }
    return result;
};

console.log(findElement([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 8.Write a JavaScript program to filter out the non-unique values in an array.
const filterNonUnique = <T>(array: T[]): T[] => {
    return Array.from(new Set(array));
};
console.log(filterNonUnique([1, 2, 3, 4, 5, 5, 6, 7, 7, 8]));

// 9.Write a JavaScript program to decapitalize the first letter of a string.
const decapitalize = (str: string): string => {
    const arr = str.split('');
    arr[0] = arr[0].toLowerCase();
    return arr.join('');
};

console.log(decapitalize('RED'));

// 10. Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no.
const yesOrNo = (value: string, def = false): boolean =>
    /^(y|yes)$/i.test(value) ? true : /^(n|no)$/i.test(value) ? false : def;

console.log(yesOrNo('Y'));

// 11. Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1
const findElements = <T>(arr: T[]): T[] => {
    if (arr.length === 1) {
        return arr;
    }

    return arr.slice(1);
};

console.log(findElements([7, 5, 6, 8, 9]));
console.log(findElements([7]));

// 12. Write a JavaScript program to get a random number in the specified range.
const random_Number_In_Range = (min: number, max: number): number => {
    const random = Math.random() * max;

    return random < min ? min : random;
};

console.log(random_Number_In_Range(2, 10));

// 13. Write a JavaScript program to get an array of given n random integers in the specified range.
const random_intArray_In_Range = (min: number, max: number, n = 1): number[] =>
    Array.from({ length: n }, () =>
        Math.floor(random_Number_In_Range(min, max))
    );

console.log(random_intArray_In_Range(1, 20, 10));

// 14. Write a JavaScript program to get a random integer in the specified range.
const randomIntegerInRange = (min: number, max: number): number =>
    Math.floor(random_Number_In_Range(min, max));

console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));

// 15. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.
const pad = (str: string, length: number, char = ' '): string => {
    const lengthToAdd = (length - str.length) / 2;
    const valueToAdd = char.repeat(lengthToAdd);

    return `${valueToAdd}${str}${valueToAdd}`;
};

console.log(pad(String(42), 6, '0'));
