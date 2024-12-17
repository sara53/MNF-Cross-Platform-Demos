"use strict";
/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 */
// let x: stringOrNumber = "PHP";
// let y: stringOrNumber = 10;
// let z: stringOrNumber = "Front";
// let x: stringOrNumber = 10;
// let arr: stringOrNumber[] = [];
// arr.push("ali");
// arr.push("front");
// arr.push(10);
// arr.push(true);
// let arr1: number[] = [10, 20];
// let arr2: stringOrNumber[] = [10, "mona", "Front", 20];
// let arr3: any[] = [true, function () {}, [], {}];
/** -------------------------- */
// let person: { 1: string; age: number } = { 1: "mona", age: 40 };
// person[1]; // valid
// person.color = "red";
// person.fname = 10; //
// type productType = {
// 	id: number;
// 	name: string;
// 	price: number;
// 	category: string;
// };
// let products: productType[] = [
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
// ];
// products.push({ id: 3, name: "Book" ,pr});
// products.push({ id: 5, name: "Book" });
// products.push({ id: 5, name: "Book" });
// let product1: productType = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// 	category: "school",
// };
// let product2: productType = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// 	category: "school",
// };
// tuple
// let arr: [string, number] = ["mona", 30];
// function sayHello() {
// 	console.log("hello");
// }
// sayHello();
// function add(x: number, y: number, ...rest: string[]): number {
// 	console.log(rest);
// 	return x + y;
// }
// add(10, 20, "hello", "alass");
// let product: { id: number; name: string } = {};
// function sayHello(x: string, y?: string) {}
// sayHello("alaa");
// let arr: [string, number, string] = ["mona", 10, "alex"];
// function showData(fname: string, age: number, address: string) {}
// showData(...arr);
//showData("mona",10,"alex")
// console.log("Hello");
// class Person {
// 	public fname: string;
// 	private age: number;
// 	public address: string;
// 	constructor(fname: string, age: number, address: string) {
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display(): void {
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }
// interface IPerson {
// 	fname: string;
// 	age: number;
// 	address: string;
// 	display(x: number): void;
// }
// interface IProduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	category: string;
// 	imgSrc?: string;
// }
// let products: IProduct[] = [
// 	{ id: 1, name: "Book", price: 400, category: "school", imgSrc: "1.jpg" },
// 	{ id: 2, name: "Pen", price: 400, category: "school", imgSrc: "1.jpg" },
// 	{ id: 3, name: "Book", price: 400, category: "school", imgSrc: "1.jpg" },
// 	{ id: 4, name: "Book", price: 400, category: "school", imgSrc: "1.jpg" },
// ];
// class Person implements IPerson {
// 	constructor(
// 		public fname: string,
// 		public age: number,
// 		public address: string
// 	) {}
// 	display(x: number): void {
// 		console.log(this.fname);
// 	}
// }
// class Person {
// 	constructor(
// 		private fname: string,
// 		public age: number,
// 		public address: string
// 	) {}
// 	display(): void {
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// 	get getFname() {
// 		return this.fname;
// 	}
// 	set setFname(value: string) {
// 		this.fname = value;
// 	}
// }
// let p1 = new Person("mona", 20, "banha");
// p1.setFname = "ahmed";
// console.log(p1.getFname);
// p1.setFname("ali"); // valid
// p1.getFname(); // mona
// console.log(p1.fname);
// class User extends Person {
// 	constructor(
// 		fname: string,
// 		age: number,
// 		address: string,
// 		public password: string
// 	) {
// 		super(fname, age, address);
// 	}
// 	// override
// 	override display(): void {
// 		// new Code
// 	}
// }
// let myUser = new User("ali", 30, "alex", "ali!@$");
// console.log(myUser.fname);
// let p1 = new Person("mona", 20, "alex"); // default ctor
// p1.display();
// abstract class shape {
// 	constructor() {}
// 	area() {
// 		throw "not implemented";
// 	}
// }
// class shape {
// 	static count: number = 0;
// 	constructor() {}
// 	static countShape() {
// 		console.log(this.count++);
// 	}
// }
// shape.countShape();
// class Rectangle extends shape {
// 	constructor() {
// 		super();
// 	}
// 	area(): void {
// 		// new Implement
// 	}
// }
// enum fontStyle {
// 	normal, // 0
// 	bold, // 1
// 	italic, // 2
// }
// let p = fontStyle.normal;
// let div = fontStyle.bold;
// type x = HTMLImageElement | HTMLInputElement;
// var img = dockument.getElementById("img1") as x;
//var input = document.getElementById("input1") as HTMLInputElement;
// console.log(img.src); // error
// console.log(input.value);
