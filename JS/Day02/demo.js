// user defined
// function statement -- declartion
// function sum(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);

// 	console.log(x + y);
// }

// sum();
// built in
// var result = parseInt("10");
// console.log(result);

// var result = sum(4, 5);

// console.log(result);

// var result = sum(5, 6);
// console.log(result);

// sum();

// sum(3);

// sum( 1, 2, "3", true );

// sum("mona", "ali", 12, 5, 70);
// sum(true, true);
// sum(2, "5");
// sum(3, 4);

// sum(2, 3);
// console.log("=============");
// sum(10, 5);
// console.log("=============");
// sum(1, 6);

//expression
// var sum = function (x, y) {
// 	return x + y;
// };

// // satement
// function add(x, y) {
// 	return x + y;
// }
/*
console.log(fname);
var fname = "mona";
console.log(fname);

*/

// var fname;
// console.log(fname);
// fname = "mona";
// console.log(fname);

// var add = function (x, y) {
// 	console.log(x + y);
// };

// add(2, 3);

// IIFE

// (function () {
// 	console.log("Welcome Front");
// })();
/**=================== */

// function greet(x, supervisorName) {
// 	x(supervisorName); //
// 	console.log("Hello At ITI");
// }

// greet(
// 	function (supName) {
// 		supName("mona");
// 		console.log("dotnet track, your supervisor is : ");
// 	},

// 	function (x) {
// 		console.log(x);
// 		console.log("Inner function");
// 	}
// );
/** =====================================
 * == Properties
 * == Method
 *
 * == Property ==> key : value (any datatype)
 *
 */

// var student1 = {
// 	fname: "ali",
// 	age: 20,
// 	gender: "male",
// 	address: {
// 		city: "Benha",
// 		street: "Saad Str",
// 		code: 124,
// 	},
// 	colors: ["red", "green", "blue"],
// 	display: function (emoji) {
// 		console.log("Welcome ", student1.fname, " ", emoji);
// 		return "ITI";
// 	},
// 	convertToInt: function (value) {
// 		return Number(value);
// 	},
// };

// var result = student1.convertToInt("10");
// console.log(result);
// console.log(student1.display(":("));

// var address = student1.address;

// console.log(address.city);

// console.log(student1.address["city"]);
// console.log(student1["address"].city);
// console.log(student1["address"]["city"]);
// console.log(student1.address.city);
// console.log(student1.address.code);

// set
// student1.color = "red";

// console.log(student1);

// // set
// student1.fname = "ahmed"; // override
// student1.age = 22;

// student1["fname"] = "Alaa";
// student1["age"] = 22;

// console.log(student1);

// get dot notation
// console.log(student1.fname);
// console.log(student1.age);
// //get
// console.log(student1["fname"]);
// console.log(student1["age"]);

// console.log(student1.color);
/**=============
 * Math
 * ------------------------------
 * == PI
 * ------------------------------
 * == round
 * == floor
 * == ceil
 * == random
 * == max
 * == min
 * == pow
 * == abs
 * == sqrt
 * == sign
 * == sin
 * ============ */
// console.log(Math.sin((90 * Math.PI) / 180));

// var arr = [
// 	10,
// 	"mona",
// 	function () {
// 		console.log("hello");
// 	},
// 	{
// 		city: "alex",
// 	},
// 	[10, 20],
// ];

// arr[2]();
// console.log(arr[3].city);
// set
// arr[0] = "mona";

// console.log(arr[9]);

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// console.log(arr.length);
/*========================
Array
 == length
 -----------------------------
    == push
    == unshift
    == pop
    == shift
    == splice -- search
    == join
    == reverse

============================*/
// var arr = ["mona", "ahmed", "ali"];
// console.log(arr.join("="));

// var arr = [10, 20, 3, 6];
// arr.sort(function () {});
// console.log(arr);
