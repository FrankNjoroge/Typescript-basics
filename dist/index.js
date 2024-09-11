"use strict";
//type annotations
let answer = 22;
let firstName = "Alex";
// let isABaller: boolean = true;
//type inference
let planet = "earth";
let moons = 0;
// let isLarge = false;
//-------------------
//ARRAYS
// ------------------
//arrays of a given type can only store values of that type
const names = ["Frank", "Mario", "luigi"];
const ages = [12, 23, 35];
// names.push("12");
// ages.push(12);
// let f = names[4];
//array type inference
const arr = [1, true, "hello"];
// let sth = arr[0]
//-------------------
//OBJECT LITERALS
// ------------------
const userOfAnApp = {
    firstName: "Frank",
    age: 23,
    id: 1,
};
//object type inference
const aPerson = {
    name: "yoshi",
    age: 12,
    natipnality: "kenyan",
};
//-------------------
//FUNCTIONS
// ------------------
//explicit return type
function addTwoNums(a, b) {
    return a + b;
}
// addTwoNums("9", "8");
const subtractTwoNums = (a, b) => String(a - b);
// subtractTwoNums(10, 2);
//VOID === doesnt return anything
const addAllNums = (items) => {
    const total = items.reduce((sum, num) => (sum += num));
    console.log(total);
};
// addAllNums([10, 20, 30, 90]);
// return type inference
//not stating a return type leads to return type inference
function formatGreeting(greeting, name) {
    return `${greeting} ${name}`;
}
// console.log(formatGreeting("Hellooooo", "Frankieeee"));
//-------------------
// ANY = allows one to specify any type
// USEFUL WHEN MIGRATING PROJECTS FROM JS TO TS as returns wont give errors
// ------------------
let age;
age = 24;
age = "12";
age = null;
//-------------------
// ANY TYPE IN ARRAYS
// ------------------
const fruits = ["avocado", 12, null, { grapes: "yes" }];
//Fruits can now take any type in the array
fruits.push("23sb");
fruits.push({ id: 124666 });
//-------------------
// ANY TYPE IN FUNCTIONS
// ------------------
//VAL ARGUMENT CAN BE OF ANY TYPE
function addTogether(val, val2) {
    return val + val2;
}
//-------------------
// TUPLES
// ------------------
//are like arrays but only take specific types for each position
let person = ["Alice", true, 45];
//hue saturation lightness alpha example
let hsla = [24, "78%", "92%", 56];
//TUPLES AS FUNCTION ARGUMENTS
function useCoords() {
    const lat = 1349910;
    const long = 792211;
    return [lat, long];
}
const [lat, long] = useCoords();
// console.log(long, lat);
//-------------------
// NAMED TUPLES
// ------------------
let user;
user = ["bowser", 80];
const authorOne = {
    name: "Kim",
    avatar: "img/kim.png",
};
const newPost = {
    title: "My new post",
    body: "lorem ipsum dolor",
    author: authorOne,
    createdAt: new Date(),
    tags: ["tech", "ts", "web", "code"],
};
//-------------------
// INTERFACES AS FUNCTION ARGUMENT TYPES
// ------------------
//argument will only accept post types
function createPost(post) {
    console.log(`Created post named ${post.title} by ${post.author.name} at ${post.createdAt}`);
}
createPost({
    title: "Some random post",
    body: "Hello ninjas",
    author: authorOne,
    createdAt: new Date(),
    tags: ["tech", "web", "code"],
});
//-------------------
// INTERFACES WITH ARRAYS
// ------------------
//posts array - will accept only post-type objects
let posts = [];
posts.push({
    title: "Js mastery",
    body: "hello welcome to this tutorial",
    author: authorOne,
    createdAt: new Date(),
    tags: ["js", "react"],
});
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const userTwo = {
    name: "Nicky",
    occupation: "tech lead",
};
function formatUser(user) {
    console.log(`User ${user.name} is a reknowned ${user.occupation}`);
}
formatUser(userTwo);
