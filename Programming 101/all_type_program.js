exm11();
//1. Reverse of string
function exm1() {
	let str = 'student';
	console.log(str.split('').reverse().join(''));

	// ************* Without reverse keyword ********

	function reverseTest(str) {
		let rev = '';
		for (let i = str.length - 1; i >= 0; i--) {
			rev += str[i];
		}
		console.log(rev);
	}

	reverseTest('Javascript');
}

//2. Uniq of array
function exm2() {
	let arr = ['a', 'a', 'b', 'c', 'd', 'e', 'e'];
	let uniq = [...new Set(arr)];
	console.log(uniq); // ['a', 'b', 'c', 'd', 'e']
}

// 3. Print duplicate items
function exm3() {
	let arr = [1, 2, 3, 4, 5, 1, 2]; // 1,2
	// let arr = ['a', 'b', 'c', 'a', 'b'] // a,b
	/* *****Example-1-way***** */
	let temp = [];
	for (let val of arr) {
		if (temp.indexOf(val) >= 0) {
			console.log(val);
		}
		temp.push(val);
	}

	/* *****Example-2-way***** */
	let myArr = [1, 2, 3, 4, 5, 1, 2]; // 1,2
	const duplicates = myArr.filter(
		(value, index, arr) => arr.indexOf(value) !== index
	);

	/* *****Example-3-way***** */
	const uniq = arr.filter((val, index) => {
		return arr.indexOf(val) != index;
	});
	console.log(duplicates);
}

// 4 No repeat Items
function exm33() {
	const array = ['a', 'b', 'c', 'a', 'b']; //['c']

	const nonRepeatingItems = array.filter(
		(item) => array.indexOf(item) === array.lastIndexOf(item)
	);

	console.log(nonRepeatingItems); // Output: ['c']

	// For Array Object
	/* const array = [
		{ name: 'a' },
		{ name: 'b' },
		{ name: 'c' },
		{ name: 'a' },
		{ name: 'b' },
	]; // {name: c}

	const nonRepeatingItems = array.find((item) => {
		// Check if the current item appears only once in the array
		return (
			array.filter((otherItem) => otherItem.name === item.name).length === 1
		);
	});

	console.log(nonRepeatingItems); */
}

//3. Add array element
function exm4() {
	let arr1 = [1, 2, 3, 4, 5];
	console.log(arr1.reduce((a, b) => a + b, 0));
}

//4. Json Compare
function exm5() {
	let x = { a: 1, b: 2 };
	let y = { b: 2, a: 1 };
	console.log(JSON.stringify(x) === JSON.stringify(y));
}

//5. sum(1)(2)(3)(4) // 10
function exm6() {
	function sum(a) {
		return function (b) {
			if (b) {
				return sum(a + b);
			} else {
				return a;
			}
		};
	}
	// Or OneLine
	// const sum = (a)=>(b)=>b? sum(a+b): a;

	console.log(sum(1)(2)(3)(4)());
}

//5 add(2)(3)(4) // 9

function exam66() {
	function add(x) {
		return function (y) {
			return function (z) {
				return x + y + z;
			};
		};
	}
	console.log(add(2)(3)(4)); // 9
}

//6. Prime number
// 2, 3, 5, 7, 11
// Using brute force algorithm
function exm7() {
	function isPrime(number) {
		// Check if the number is less than 2
		if (number < 2) {
			return false;
		}

		// Loop from 2 to the square root of the number
		for (let i = 2; i <= Math.sqrt(number); i++) {
			// If the number is divisible by any other number, it's not prime
			if (number % i === 0) {
				return false;
			}
		}

		// If the loop completes without finding a divisor, the number is prime
		return true;
	}

	console.log(isPrime(13));
}

//7. Find the biggest number in a array
function exm8() {
	const numArray = [2, 4, 1, 10, 1000];

	let max = Number.NEGATIVE_INFINITY;
	for (let val of numArray) {
		max = max < val ? val : max;
	}
	console.log(max);
}

//8. Find the two biggest number in a array
function exm9() {
	const numArray = [2, 4, 15, 10, 1000];

	let max1 = Number.NEGATIVE_INFINITY;
	let max2 = Number.NEGATIVE_INFINITY;

	for (let val of numArray) {
		if (val > max1) {
			max2 = max1;
			max1 = val;
		} else {
			if (val > max2) {
				max2 = val;
			}
		}
	}
	console.log(max1, max2);

	// Alter way for max numer

	/*	let numbers = [5, 2, 22, 9, 1, 5, 6];

	const sortArray = (a, b) => {
		return b - a;
	};

	const res = numbers.sort(sortArray);
	const lastTwoMax = res.slice(0, 2);
	console.log(lastTwoMax); */
}

//9. Sorting Array without using sort function
function exm10() {
	const arrList = [9, 5, 1, 6, 3, 2, 2];
	let temp;
	for (let j = 0; j < arrList.length - 1; j++) {
		for (let i = 0; i < arrList.length - 1; i++) {
			if (arrList[i] < arrList[i + 1]) {
				temp = arrList[i + 1];
				arrList[i + 1] = arrList[i];
				arrList[i] = temp;
			}
		}
	}
	console.log(arrList); // OP-> [ 9, 6, 5, 3, 2, 2, 1 ]
}

// 10. Swipe a number without third variable
function exm11() {
	let a = 10;
	let b = 5;
	/*	a = a + b;

	b = a - b;
	a = a - b; */
	// In Es6
	[a, b] = [b, a];

	console.log(a); // 5
	console.log(b); // 10
}

// 11. Check the number is Palindrome or not
function exm12() {
	let num = 121;
	let actualNumber = num;
	let final = 0;
	while (num > 0) {
		let rem = num % 10;
		num = parseInt(num / 10);
		final = final * 10 + rem;
	}

	if (final === actualNumber) {
		console.log('Number is palidrome');
	} else {
		console.log('Number is not palidrome');
	}
}

// 12. Multiple array to single array
// [1,2,3,[4,5,6],[7,8,[9]]] =>[1,2,3,4,5,6,7,8,9];
function exm13() {
	const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9]]];
	console.log(arr.flat(Infinity));
}

// 13 Asign object value to another
function exm14() {
	let obj1 = { name: 'Amit' };
	let obj2 = Object.assign({}, obj1);
	//   or
	// obj2 = {...obj1};
	obj1.name = 'Rahul';
	console.log('Obj1: ', obj1.name); // Amit
	console.log('Obj2: ', obj2.name); // Rahul
}

// 14 Asign array value to another
function exm15() {
	let arr1 = [1, 2, 3, 4];
	let arr2 = Object.assign([], arr1);
	// or
	//  let arr2 = [...arr1];
	arr1[0] = 1000;
	console.log('arr1: ', arr1); // [1000,2,3,4];
	console.log('arr2: ', arr2); // [1,2,3,4];
}

// Why object eqal object false
function exm16() {
	// Two variables, two distinct objects with the same properties
	let obj1 = { name: 'Amit' };
	let obj2 = { name: 'Amit' };

	console.log(obj1 == obj2); // false
	`In JavaScript, objects are a reference type. 
	 Two distinct objects are never equal, even if they have the same properties. 
	 Only comparing the same object reference with itself yields true.`;
	// Reference
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects
}

function exm17() {
	// Two variables, a single object
	let obj1 = { name: 'Amit' };
	let obj2 = obj1;
	// Here obj1 and obj2 are pointing to same object
	console.log(obj1 == obj2); // true
}

function exm18() {
	console.log(a, b, c); // Output and explain
	let a = 10;
	const b = 20;
	var c = 30;
	/*
	OP (error) -> ReferenceError: Cannot access 'a' before initialization
	1. Here a,b,c are hoisted but a and b are Temporal dead zone
	2. Using the var keyword the declaration gets hoisted to the top. 
	*/
}

// Find closest number in array
function exm19() {
	var counts = [4, 9, 15, 6, 2],
		goal = 10;

	var closest = counts.reduce(function (prev, curr) {
		return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
	});
	console.log(closest);
}

// What will be the output
function exam20() {
	var number = 20;

	var display = function () {
		console.log(number); // undefined
		var number = 10;
	};

	display();
}

// String Palindrome (Improve Performance)
// avoid unnecessary computations.
/* do you need to remove spaces?
do you need to convert to an array?
do you need to allocate new objects for the left and right strings?
do you need to reverse the string? */
function exam21(string) {
	var len = string.length;
	for (let i = 0; i < len / 2; i++) {
		console.log(i);
		if (string[i] != string[len - i - 1]) {
			console.log(string + ' is not a palindrome.');
			return;
		}
	}
	console.log(string + ' is a palindrome.');
}

exam19('MOM');

// Why output will come 5 (5-times)
function exam22() {
	for (var i = 0; i < 5; i++) {
		setTimeout(() => {
			console.log(i);
		}, 0);
	}
	// Output i = 5
}

/* 
 That's because all the timeouts are run when the loop finished.
 The timeout functions then take the current value of count.
  And thats always 3 because the for loop has finished. 
*/

// To Resolve that issue
function exam23() {
	for (var i = 0; i < 5; i++) {
		(function (i) {
			setTimeout(() => {
				console.log(i);
			}, 0);
		})(i);
	}
	// OP-> 0,1,2,3,4
}

// Group Json by Value

function exam24() {
	data = [
		{
			team: 'TeamA',
			name: 'Ahmed',
			field3: 'val3',
		},
		{
			team: 'TeamB',
			name: 'Ahmed',
			field3: 'val43',
		},
		{
			team: 'TeamA',
			name: 'Ahmed',
			field3: 'val55',
		},
	];

	const groupItem = data.reduce((group, item) => {
		const key = item.team;
		if (!group[key]) {
			group[key] = [];
		}
		group[key].push(item);
		return group;
	}, {});

	console.log(groupItem);

	/*	let groupBy = function (xv, key) {
		return xv.reduce(function (pre, cur) {
			(pre[cur[key]] = pre[cur[key]] || []).push(cur);
			return pre;
		}, {});
	};
	var groubedByTeam = groupBy(data, 'team');
	console.log(groubedByTeam); */
}

// Output below

/* {
	"TeamA": [
	  {
		"team": "TeamA",
		"name": "Ahmed",
		"field3": "val3"
	  },
	  {
		"team": "TeamA",
		"name": "Ahmed",
		"field3": "val55"
	  }
	],
	"TeamB": [
	  {
		"team": "TeamB",
		"name": "Ahmed",
		"field3": "val43"
	  }
	]
  } */

// Fibonacci Series
function exam25() {
	value = 5;
	let n1 = 0,
		n2 = 1,
		nextTerm;

	for (let i = 1; i < value; i++) {
		console.log(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}
	/* output
          0 1 1 2 3 5
  */
}

// Output of the function
function exam26() {
	function test(str) {
		this.myName = str;
	}
	let a = test('AA');
	console.log(a.myName);
	// TypeError Cannot read properties of undefined (reading 'name')

	let b = new test('BB');
	console.log(b.myName); // BB

	let c = test;
	console.log(c.myName); // Undefined
}

/*let person = {
	name: 'John',
	age: 30,
};  Define the 'name' property as read-only. */

function exam27() {
	let person = {
		// The name property is initially set to "John".
		name: 'John',
		age: 30,
	};

	// Define the 'name' property as read-only.
	Object.defineProperty(person, 'name', {
		writable: false,
	});

	// Try to change the 'name' property.
	person.name = 'Jane'; // This will have no effect in strict mode and will throw an error in non-strict mode.

	console.log(person.name); // Outputs: John
}

// [3, 30, 34, 5, 9] convert to string array ['3', '30', '34', '5', '9']
function exam28() {
	const arr = [3, 30, 34, 5, 9];
	// Convert the numbers to strings for easier comparison
	const numToStrings = arr.map(String);
	console.log(numToStrings); //['3', '30', '34', '5', '9']
}

// input:- "thisIsCamelCase" Output:   "this_is_camel_case"
function exam29() {
	function camelToSnakeCase(str) {
		let snakeCaseString = '';

		for (let i = 0; i < str.length; i++) {
			const currentChar = str.charAt(i);
			if (currentChar === currentChar.toUpperCase() && i > 0) {
				// Check if the character is uppercase and not a lowercase letter
				snakeCaseString += '_' + currentChar.toLowerCase();
			} else {
				snakeCaseString += currentChar.toLowerCase();
			}
		}

		return snakeCaseString;
	}

	const result = camelToSnakeCase('thisIsCamelCase');
	console.log(result); // Output: 'this_is_camel_case'
}

// What will be output
function exam30() {
	const object = {
		who: 'World',
		greet() {
			return `Hello, ${this.who}!`;
		},
		// Arrow function
		farewell: () => {
			return `Goodbye, ${this.who}!`;
		},
	};
	console.log(object.greet()); // What is logged?
	console.log(object.farewell()); // What is logged?
}

// What willbe output
function exam31() {
	try {
		console.log('starting');
		setTimeout(() => {
			console.log('inside setTimeout');
			throw new Exception('error');
		}, 10);
		console.log('just before catch');
	} catch (e) {
		console.log('in catch');
	}
	console.log('outside try');
}

// prototype Inheritance
function exam32() {
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	// Adding a method to the prototype
	Person.prototype.sayHello = function () {
		console.log('Hello ' + this.name);
	};

	// Creating objects using the constructor
	const person = new Person('Amit', 30);

	// objects inherit the sayHello method from the prototype
	person.sayHello();
}


// Input: abbbccrrfgdd
// Output: a1b3c2r2f1g1d2


// Input: abbbccrrfgddbag
// Output: a2b4c2r2f1g2d2