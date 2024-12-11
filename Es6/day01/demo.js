/***
 * var
 * ----------------------------
 * == reassign
 * == redeclaration
 * == Hoisting
 * == added to window object
 * == function scope
 *----------------------------------
 == let
    == reassign
    == can't redeclare
    == can't Hoisting
    == not added to window object
    == block scope
 ------------------------------------
 == const
    == can't  reassign
    == can't redeclare
    == can't Hoisting
    == not added to window object
    == block scope
 ------------------------------------
 */

// function useState(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("Hello");
// 		},
// 		"Ahmed",
// 	];
// }

// let [x, y] = useState(true);

// y();

// let [, , z] = [10, "mona", "alaa"];
// let x = arr[0];
// let y = arr[1];

// console.log("z ", z);

// const arr = [];

// arr.push("ali");
// console.log(arr);

// const PI = 3.14;

// PI = 2; // error
// console.log(PI);
// let fname = "mona";
// console.log(window.fname);
// function show() {
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 	}
// 	// console.log("i outside loop is :", i);
// }

// show();

// let person = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	age: 20,
// 	products: [1, 2, 3],
// };

// // let { fname: fname, age: age } = person;
// let { fname, age, products: userProducts } = person;

// // let x = person.fname;
// // let y = person.age;

// console.log("x : ", fname);
// console.log("y : ", age);

// console.log(userProducts);

// let arr1 = ["mona", true, "Ahmed"];
// let arr2 = [1, 2, 4, ...arr1, "true", "alaa"];

// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);

// let person1 = { fname: "ali", color: "red" };
// let person2 = { age: 20, ...person1 };

// console.log(person2);

// let arr = [10, 2, 60, 90, 5];
// console.log(Math.max(...arr));

/** ---------------------------- */

// function show(...z) {
// 	console.log(z);
// }

// show("mona", true, 1, false, "hoda");

// let [x, ...y] = [1, "mona", "ali", true];

// console.log(x);
// console.log(y);

/****-------------- String API ---------------------- */
// let fname = "      Front Track";

// console.log(`Hello At ITI

//         ${fname.trim()} ${fname}

//             :)
//         `);
/**------------------------------------------ */

// (function () {
// 	let fname = "ali";
// 	console.log(fname);
// })();

// let fname = "alaa";
// console.log(fname);

/**------------------------------------------ */
// function sum(x, y) {
// 	return x + y;
// }

// let sum = function (x, y) {
// 	return x + y;
// };
/// arrow function
// let sayHello = _ => {
// 	console.log("hello");
// };
// let square = (x) => x * x;
// let add = (x, y) => {
// 	console.log("Hello");
// 	return x + y;
// };

// console.log(square(4));
// window
// var fname = "alaa";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		// this -- person
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// var x = "color";
// let person = {
// 	fname, // fname:fname
// 	age,
// 	[x]: "red",
// };

// console.log(person);
// let fname = "ali";

// // let person = {
// // 	fname,
// // 	display() {
// // 		console.log("hello");
// // 	},
// // };

// // console.log(person);
/**
 *
 * ====find
 * === findIndex
 */

// let arr = [10, 20, 45, 80, 13];

// let result = arr.findIndex((item) => item > 25);

// console.log(result);
// function findElement(x, y) {
// 	console.log(" x ", x);
// 	console.log(" y ", y);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("-------------------");
// }

// reduce --

//let arr = ["PHP", "Front", "Os", "dotnet"];

//arr.forEach((item, index) => console.log(`${item} : ${index}`));
// let result = arr.every((item) => item.startsWith("P"));
// let result = arr.some((item) => item.startsWith("P"));
// console.log(result);
// let result = arr.map(function (item, index, arr) {
// 	return {
// 		id: index + 1,
// 		trackName: item,
// 	};
// });

// console.log(result);
// for (let i = 0; i < result.length; i++) {
// 	document.writeln(`<h1>${result[i]}</h1>`);
// }
// []

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		category: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		category: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "mouse",
// 		price: 100,
// 		category: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "NoteBook",
// 		price: 100,
// 		category: "school",
// 	},
// 	{
// 		id: 5,
// 		name: "phone",
// 		price: 100,
// 		category: "electronics",
// 	},
// ];

// let result = products.filter((item) => {
// 	return false;
// });

// console.log(result);

// import test, { add } from "./main.js";

// let trackName = "Front";

// console.log(add(3, 4));

// test();

// import * as all from "./main.js"; //
// // import {add} from "./main.js";
// // import sayHello , {add} from "./main.js";
// console.log(all.add(3, 4));
// console.log(all.trackName);
// all.default();

// let result = require("./main");
// console.log(result);
