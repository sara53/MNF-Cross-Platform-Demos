/** Datatypes
 * ---------------------
 * == Primitive Datatypes
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 * == Reference Datatypes
 *   == object
 *
 *
 */

// var num1 = 10; // int

// var num2 = 10.1; // float

// var name = "mona";

// var flag = true;

// console.log(typeof false);
// console.log(typeof name);
// console.log(typeof num1);
// console.log(typeof num2);

/**
 * var
 * --------------------------
 * == reassign with different datatypes
 * == redeclare
 *
 *
 */
// var fname = "mona";
// // var fname = 10;

// // fname = true;
// console.log(typeof fname);

// var fname;

// fname = "mona";
// console.log(typeof fname);

// var fname = null;

// console.log(typeof fname);

// var fname = String(10);

// console.log(fname);
// console.log(typeof fname);

//var fname = String("ali");

//console.log(fname);

// var num = Number("mona");

// console.log(num);
// console.log(typeof num);

/** Falsy Values
 * 0
 * false
 * ""
 * null
 * NaN
 * undefined
 *
 *
 */
// var flag = Boolean("sdfghjk");

// console.log(flag);
// console.log(typeof flag);

/**==========Operators
 * 1- [+,-,*,/]
 *
 * -----------------------------
 *  ==[+]
 *      == number + number --> add
 *      == string + string ---> concat
 *
 *
 * coercion == > js engine convert automatic from datatype to anther datatype
 * ========== */

// var x = 10; // number

// var y = "10";

// console.log(x - y);
/**=============================== */

/** and
 *  true && false --> false
 *  false && true --> false
 *  false && false --> false
 *  true && true  ---> true
 * -------------------------
 * ||
 *
 *  true || false --> true
 *  false || true --> true
 *  true || true --> true
 *  false || false --> false
 * !
 * true ==> false
 * false ==> true
 *
 */

// "mona" && "ali";

// true && true -- > ali

/**
 *
 *  0 && "hoda"
 *  false && --> 0
 *
 *
 * hoda ||
 *
 *  0 || undefined
 *
 *
 */

/**
 * [==] ==> values Only
 *  [===]  ==> values &datatype
 *
 *
 */

// var x = "true"; // NaN

// var y = true; // 1

// console.log(x == y);
// var flag = true;

// if (flag) {
// 	console.log("your fav color is red");
// } else {
// 	console.log("You don't have any fav colors");
// }

// var color = "blue";

// if (color == "red") {
// 	console.log("Your Fav Color is " + color);
// } else if (color == "green") {
// 	console.log("Your Fav Color is " + color);
// } else {
// 	console.log("You don't have any fav colors");
// }

// color == "red"
// 	? console.log("your fav color is red")
// 	: console.log("You don't have any fav colors");

// for (var i = 0; i < 5; i += 5) {
// 	console.log(i + " Welcome ");
// }

// console.log(i);

// console.log(fname);

// var i = 0;
// while (i < 5) {
// 	console.log("Welcome ", i);
// 	i++;
// }

// var i = 8;
// do {
// 	console.log("Welcome");
// 	i++;
// } while (i < 5);

// var num1 = Number(prompt("Enter Your Num1"));
// var num2 = Number(prompt("Enter Your Num2"));
// console.log( num1+ num2);
// prompt("Enter Your Name", "ali");

// alert("You deleted an item for your list");

// var result = confirm("Are you sure you want to delete this item");
// console.log(result);

// result ? console.log("Item deleted") : console.log("Operation cancelled");

// var fname = "ali";
// document.writeln("Hello");
// document.writeln("<h1 style='color:red;'>Welcome " + fname + "</h1>");
// document.writeln("<h1 class='test'>Welcome " + fname + "</h1>");
// document.writeln("<img src='1.jpg'/>");

/**
 * string
 * =========
 * length
 *--------------------
  == charAt --> return char
  == indexOf
  == lastIndexOf
  == concat
  == split
  == startWith
  == EndWith
  == includes
  == toUpperCase
  == trim
  == trimStart
  == trimEnd
 *
 */
// var fname = "hello; javascript at iti ";
// var str = "username";

// console.log(fname.slice(2, 4));
// var result = fname.toLowerCase();

// var result = str.split(";")[0].split("=");

// console.log(fname.length)

// console.log(fname.charAt(0));
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
