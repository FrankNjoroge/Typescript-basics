"use strict";
//type annotations
// let age: number = 127887898544;
// let firstName: string = "Alex";
// let isABaller: boolean = true;
//type inference
// let planet = "earth";
// let moons = 0;
// let isLarge = false;
//Arrays
// const names: string[] = ["Frank", "Mario", "luigi"];
// const ages: number[] = [12, 23, 35];
// names.push("12");
// ages.push(12);
// let f = names[4];
//array type inference
// const arr = [1, true, 'hello']
// let sth = arr[0]
//object literals
// const user: { firstName: string; age: number; id: number } = {
//   firstName: "Frank",
//   age: 23,
//   id: 1,
// };
//object type inference
// const person = {
//     name: 'yoshi',
//     age: 12,
//     natipnality: "kenyan"
// }
//FUNCTIONS
//explicit return type
// function addTwoNums(a: string, b: string): string {
//   return a + b;
// }
// addTwoNums("9", "8");
// const subtractTwoNums = (a: number, b: number): string => {
//   const result = String(a - b);
//   console.log(typeof result, result);
//   return result;
// };
// subtractTwoNums(10, 2);
// const addAllNums = (items: number[]): void => {
//   const total = items.reduce((sum, num) => (sum += num));
//   console.log(total);
// };
// addAllNums([10, 20, 30, 90]);
// return type inference
//not stating a return type leads to return type inference
// function formatGreeting(greeting: string, name: string) {
//   return `${greeting} ${name}`;
// }
// console.log(formatGreeting("Hellooooo", "Frankieeee"));
//-------------------
// ANY
// ------------------
let age;
age = 24;
age = "12";
age = null;
let sth;
sth = null;
sth = {};
//-------------------
// ANY TYPE IN ARRAYS
// ------------------
const fruits = ["avocado", 12, null, { grapes: "yes" }];
fruits.push("23sb");
fruits.push({ id: 124666 });
//-------------------
// ANY TYPE IN FUNCTIONS
// ------------------
function addTogether(val, val2) {
    return val + val2;
}
console.log(addTogether("hello", 24));
