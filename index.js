"use strict";
// 1. Write a JavaScript program to compare two objects to determine if the first one contains
// equivalent property values to the second one
const compareObjects = (obj1, obj2) => {
    const keys = Object.keys(obj2);
    return keys.every((key) => Object.hasOwn(obj1, key) && obj1[key] === obj2[key]);
};
console.log(compareObjects({ name: 'Alex', admin: true }, { age: 25, name: 'Alex', admin: true }));
