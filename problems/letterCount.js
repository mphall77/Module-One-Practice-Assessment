/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

//function letterCount() { }

const letterCount = (str) => {
	let newStr = str.toLowerCase().replace(/ /g, "").split("");
	let countObj = {};
	newStr.map((el) => {
		if (countObj[el]) {
			countObj[el]++;
		} else {
			countObj[el] = 1;
		}
	});
	return countObj;
};



module.exports = letterCount;

// for (let i = 0; i < str.length - 1; i++) {
// 	// looping through the string newStr to get newStr[i]
// 	newStr.map((letter) => {
// 		//gives an array of letters
// 		if (letter === newStr[i]) {
// 			// if value of letter is 0 add 1 to value
// 			countObj[letter]++;
// 		}
// 	});
// }

/* const countOccuranceNoSpaces = (str) => {
	let lowerStr = str.toLowerCase().replace(/ /g, "");
	let counter = {};
	for (let i = 0; i <= lowerStr.length - 1; i++) {
		let strI = lowerStr[i];
		if (counter[strI]) {
			counter[strI]++;
		} else {
			counter[strI] = 1;
		}
	}
	return counter;
}; */