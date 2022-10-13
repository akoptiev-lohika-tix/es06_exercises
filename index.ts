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
