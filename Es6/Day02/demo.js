// let person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 25,
// };

// let person2 = {
// 	color: "red",
// 	age: 50,
// };

// let target = Object.assign(person1, person2);

// console.log("person1 :", person1);
// console.log("person2 :", person2);

// let result = Object.keys(person);
// let values = Object.values(person);

// console.log(Object.entries(person));
// for (let i = 0; i < result.length; i++) {
// 	console.log(person[result[i]]);
// }

// function show(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		age: "default age",
// 		address: "default address",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(`fname: ${defaultValues.fname}
//         age:${defaultValues.age}
//             address : ${defaultValues.address}`);
// }

// // show({});
// // show();
// show();
/**-------------------------------------- */
// function first() {
// 	console.log("first");
// 	second();
// 	console.log("third");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("After setTimeOut");
// }

// first();
/***--------------------- */
// setTimeout(() => {
// 	console.log("first");
// }, 0);

// console.log("Second");

// console.log("third");

// var products;
// setTimeout(() => {
// 	products = [
// 		{ id: 1, name: "book", price: 200 },
// 		{ id: 2, name: "pen", price: 300 },
// 		{ id: 3, name: "mouse", price: 400 },
// 	];

// 	setTimeout(() => {
// 		var product = products.find((product) => product.id == 2);
// 		console.log(product);
// 		//2
// 	}, 1000);
// }, 2000);
/**
 * === pending
 * === fulfilled
 * === rejected
 */
// var myPromise = new Promise(function (x, y) {
// 	//x("Hello");
// 	y("error in es6");
// });

// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("From then");
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// function getAllProducts() {
// 	return new Promise((resolve, reject) => {
// 		let products = [
// 			{ id: 1, name: "book", price: 200 },
// 			{ id: 2, name: "pen", price: 300 },
// 			{ id: 3, name: "mouse", price: 400 },
// 		];
// 		products ? resolve(products) : reject("Error on getting Products List");
// 	});
// }

// function getProductById(products, productId) {
// 	return new Promise((resolve, reject) => {
// 		let product = products.find((product) => product.id === productId);
// 		product ? resolve(product) : reject("Error on getting Product Details");
// 	});
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		let price = product.price;
// 		price ? resolve(price) : reject("Error on getting Price");
// 	});
// }

// let promise1 = new Promise((resolve, reject) => {
// 	resolve("Front Track");
// });
// let promise2 = new Promise((resolve, reject) => {
// 	// resolve("PHP Track");
// 	reject("Error on promise2");
// });

// Promise.all([
// 	promise1.catch((error) => error),
// 	promise2.catch((error) => error),
// ]).then((values) => {
// 	console.log(values);
// });

//Promise.all([getAllProducts(), getProductById()]);
// getAllProducts()
// 	.then((products) => {
// 		return getProductById(products, 2);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
// let promise1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, "Promise 1 Data");
// });
// let promise2 = new Promise((resolve, reject) => {
// 	//setTimeout(resolve, 500, "Promise 2 Values");
// 	setTimeout(reject, 500, "Error Message");
// });

// Promise.race([promise1, promise2])
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	try {
// 		let products = await getAllProducts();
// 		let product = await getProductById(products, 2);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		for (let i = 0; i < data.length; i++) {
// 			document.writeln(`<div>
//                     <h1>${data[i].name}</h1>
//                     <p>${data[i].email}</p>
//                 </div>`);
// 		}
// 	})
// 	.catch((error) => console.log(error));

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

async function getData() {
	return 25;
}

getData()
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
