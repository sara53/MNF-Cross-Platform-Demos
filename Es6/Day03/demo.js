// function getEvenNumbers() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step <= 10) {
// 				return {
// 					value: step,
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }

// let person = { fname: "alaa", age: 25, color: "red" };
// person[Symbol.iterator] = generateEven;

// generator
// function* generateEven() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }
// function* generateEven() {
// 	for (let key in person) {
// 		yield `${key} : ${person[key]}`;
// 	}
// }

// let iter = generateEven();

// for (let x of person) {
// 	console.log(x);
// }
/**
 * === function -- return {}
 * === {} --> next : function
 * === function --> return {value,done}
 *
 *
 *
 *
 */
//let person = { fname: "ali", age: 20, color: "red" };

// for (let x of person) {
// 	console.log(x);
// }
// for (let value of arr) {
// 	console.log(value);
// }
// for (let key in person) {
// 	// console.log(key);
// 	console.log(person[key]);
// }
// for (var index in arr) {
// 	console.log(i); // index
// 	console.log(arr[i]); //value
// }

// let x = Symbol("age");

// let y = Symbol("age");

// console.log(x == y);
// console.log(y);
// let Symbol.iterator = Symbol();
// let person = {
// 	fname: "ali",
// 	age: 35,
// 	[Symbol.iterator]: function () {
// 		return { fname: "ali" };
// 	},
// };

// let obj = person[Symbol.iterator]();
// console.log(obj.fname);
// let arr = ["mona", 10, "ali"];

// arr[Symbol.iterator] = getArrValues;
// function getArrValues() {
// 	let index = 0;
// 	return {
// 		next: () => {
// 			if (this.length == index) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return { value: this[index++], done: false };
// 			}
// 		},
// 	};
// }

// // iter.next --{value:mona,done:false}
// for (let value of arr) {
// 	console.log(value); //
// }
// function* convertToIterable() {
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }
// let person = { fname: "ali", age: 35, color: "red" };
// let product = { name: "book", price: 400 };

// person[Symbol.iterator] = convertToIterable;
// product[Symbol.iterator] = convertToIterable;

// for (let value of product) {
// 	console.log(value);
// }

// arr -- iterable -- Generator
//

// parent class -- superclass
class Person {
	#fname;
	constructor(fname, age, color) {
		this.#fname = fname;
		this.age = age;
		this.color = color;
	}

	display() {
		console.log(`${this.fname} ${this.age}`);
	}

	get getFname() {
		return this.#fname;
	}
	set setFname(value) {
		this.#fname = value;
	}

	static testStatic() {}
}

let p1 = new Person("mona", 20, "red");

p1.setFname = "new fname";
console.log(p1.getFname);

// class Person {
// 	constructor(fname, age, color) {
// 		if (this.constructor == Person) {
// 			throw "can not take an object from abstract class";
// 		}
// 		this.fname = fname;
// 		this.age = age;
// 		this.color = color;
// 	}

// 	display() {
// 		throw "method is not implemented";
// 	}
// }

// let p1 = new Person();

// console.log(p1);
// child class,subclass
// class User extends Person {
// 	constructor(fname = "", age = "", color = "", password = "") {
// 		super(fname, age, color);
// 		this.password = password;
// 	}

// 	// override --
// 	display() {
// 		super.display();
// 		console.log(this.password);
// 	}

// 	generatePassword() {
// 		return this.password.toUpperCase() + "@#$";
// 	}
// }

// let myUser = new User("mona", 20, "red", "MONA123");
// myUser.display();

// console.log(myUser.generatePassword());
