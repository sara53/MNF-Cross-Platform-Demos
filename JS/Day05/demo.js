// var tbody = document.getElementsByTagName("tbody")[0];
// console.log(tbody);
// function getAllUsers() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/6");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var user = JSON.parse(xhr.response);
// 				var tr = document.createElement("tr");
// 				var td1 = document.createElement("td");
// 				var td2 = document.createElement("td");
// 				var td3 = document.createElement("td");
// 				td1.innerHTML = user.id;
// 				td2.innerHTML = user.name;
// 				td3.innerHTML = user.email;
// 				tr.append(td1, td2, td3);
// 				tbody.append(tr);
// 			}
// 		}
// 	};
// }

// console.log(document.cookie);
// document.cookie = "username=ali";

/** self */

// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + 3);

// document.cookie = "username=per;expires=" + expireDate;

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }

// JSON.parse(); // json --> javascript
// JSON.stringify(); // js object --> jsonObject

// console.log(JSON.stringify([1, 3, 5]));
// saveCookie("userData", JSON.stringify([1, 2, 3]));
// saveCookie("person", JSON.stringify({ fname: "ali", age: 20 }));
// function getAllCookies() {
// 	return document.cookie;
// }

// function getCookie(key) {}
// function deleteCookie(key) {}

// saveCookie("value", "test");
/** */

// try {
// 	throw "Error";
// } catch (error) {
// 	console.log(error);
// 	document.writeln("<h1>Connection Error Please Try Again</h1>");
// }

// function sum(x, y) {
// 	if (arguments.length < 2) {
// 		throw "Pass at least two args";
// 	}
// 	console.log(x + y);
// }

// sum(3, 4);
