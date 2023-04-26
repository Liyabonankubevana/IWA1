// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// First fixed the syntax then reference the object and access index elements in the array using the []
const  first = data.lists[0][1];
const  second = data.lists[1][1];
const  third = data.lists[2][1];

// Declaring the new array that the data will be inserted into 
const result = [];

const extractBiggest = () => { 

	// You have to declare a variable to use for the largest number 
	let Big = 0;

	if (first[first.length -1] > second[ second.length -1]) {
		let Big = first[first.length - 1];
		first.pop();
		return Big;
	}
		else if (third[third.length -1] < second[second.length - 1]) {
			let Big = second[second.length -1]
			second.pop()
			return Big
	}
		else {
			let Big = third[third.length -1]
			third.pop()
			return Big
		}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)