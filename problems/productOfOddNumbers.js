/**
 * Return the product of all odd numbers in an array. 
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 * 
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */
 //function productOfOddNumbers() {}

const productOfOddNumbers = (nums) => {
	let sum = 1;
	nums.forEach((number) => {
		if (number % 2 === 1) {
			sum *= number;
		}
	});
	if (sum === 1) {
		return 0;
	} else {
		return sum;
	}
};


 module.exports = productOfOddNumbers