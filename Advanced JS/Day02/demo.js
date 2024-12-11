// function Person(name, age) {
// 	if (this.constructor == Person) {
// 		throw "Can not take an object from abstract class";
// 	}
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	throw "Method is not implemented";
// };

// function User(name, age, password) {
// 	Person.call(this, name, age);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;
// // polymorphism
// User.prototype.display = function () {
// 	console.log(this.name + " " + this.age);
// };
// User.prototype.generatePassword = function () {
// 	console.log(this.password.toUpperCase() + "@#$" + this.name.slice(1));
// };
// var myUser = new User("hoda", 20, "HODA");
// myUser.display();

// console.log(myUser);
// p1.display();
// p1.__proto__.display();
//console.log(p1.__proto__.__proto__.__proto__);
//console.log(Person.prototype.__proto__);
//console.log(Object.prototype == Person.prototype.__proto__);
// literal creation
// var product = {}; // product =new Object()

// var product = {};

// console.log(product.__proto__);
// console.log(Object.prototype);

// console.log(product.__proto__ == Object.prototype);

// var product = {
// 	name: "Book",
// 	price: 200,
// };

// var result = Object.create(product);
// result.id = 1;
// console.log(result);
// function Product(name, price, _discount) {
// 	var discount = _discount; // private member
// 	this.name = name;
// 	this.price = price;
// 	Object.defineProperty(this, "productDiscount", {
// 		get: function () {
// 			return discount;
// 		}, //
// 		set: function (value) {
// 			discount = value;
// 		}, //
// 	});
// }

// var p1 = new Product("Book", 200, 0.2);
// p1.productDiscount = 0.5; // set
// console.log(p1.productDiscount); // get

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.createPerson = function () {
// 	return {
// 		name: "front track",
// 	};
// };

// var result = Person.createPerson();
// console.log(result);

// const CIRCLE = "circle";
// function calcArea(shape) {
// 	if (shape.type == CIRCLE) return Math.PI * shape.r * shape.r;
// 	if (shape.type == "rectangle") return shape.w * shape.h;
// }

// var result = calcArea({ type: CIRCLE, r: 1 });
// var result = calcArea({ type: "rectangle", w: 10, h: 20 });
// console.log(result);
// calcArea({ type: "rectangle", w, h });
// calcArea({ type: "triangle", x, l });
