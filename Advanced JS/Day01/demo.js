// var fname = "mona";

// function getFname() {
// 	console.log(this.fname);
// }

// getFname(); // window

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		getFname.call(this);
// 	},
// };

// person.display();

// person.display.call();

// var person1 = {
// 	fname: "ali",
// 	lname: "alaa",
// 	display: function (x, y) {
// 		console.log(x + " " + y + " " + this.fname + " " + this.lname);
// 	},
// };

// var person2 = {
// 	fname: "mona",
// 	lname: "mohamed",
// };

// person1.display.bind(person2)("hello", "ITI");

// person1.display.apply(person1, ["hello", "iti"]);
// person1.display.apply(person2, [":)", ":("]);
// person1.display.call(person2);
// person1.display.call(null, "hello", "iti");

// var fname = "Nermen";

// //console.log(this); window
// // that pattern
// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

//person.display(); // this -- person
// var fname = "Nermen";

// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		//person
// 		console.log(this);
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };

// person.display();

// fun.bind()
// setTimeout.bind()

// function getData() {
// 	var trackName = "Front";
// 	var test = "mona";
// 	return function () {
// 		console.log(trackName);
// 	};
// }
// var result = getData();
// result(); //
// undefined
// function
// front

// function getData() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// var result = getData();

// result[0](); // 0 1 2
// result[1]();
// result[2]();

// var product1 = {
// 	id: 1,
// 	name: "book",
// 	price: 200,
// 	category: "school",
// 	discount: function () {
// 		console.log("20%");
// 	},
// };
// var product2 = {
// 	id: 2,
// 	name: "Pen",
// 	discount: function () {
// 		console.log("50%");
// 	},
// };
// var product3 = {
// 	id: 2,
// 	discount: function () {
// 		console.log("20%");
// 	},
// };

// document.writeln(`<h1>Product Name : ${product1.name}</h1>`);
// document.writeln(`<p>Product price : ${product1.price}</p>`);
// document.writeln(`<p>Product category : ${product1.category}</p><hr/>`);
// document.writeln(`<h1>Product Name : ${product2.name}</h1>`);
// document.writeln(`<p>Product price : ${product2.price}</p>`);
// document.writeln(`<p>Product category : ${product2.category}</p>`);

// function getProduct(id, name, price) {
// 	return {
// 		id: id || "",
// 		name: name || "",
// 		price: price || "",
// 		discount: function (rate) {
// 			return this.price * rate;
// 		},
// 	};
// }

// var p1 = getProduct(1, "book", 200);
// var p2 = getProduct(2, "pen", 400);
// console.log(p1.discount(0.5));
// console.log(p2.discount(0.2));
// function constructor

// function Product(id, name, price) {
// 	this.id = id;
// 	this.name = name;
// 	this.price = price;
// 	this.discount = function () {
// 		console.log(this.price * 0.5);
// 	};
// }
// console.log(Product.prototype);

// var p1 = new Product(1, "Book", 200);

// p1.fly(); //error

// console.log(p1.toString());

/**
 * new -->
 * -- create empty Object
 * -- this -- empty object
 * -- return object
 *
 *
 *
 */
