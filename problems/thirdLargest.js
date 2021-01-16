/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */
//function thirdLargest() {}

const thirdLargest = (nums) => {
	let largest = -Infinity;
	let secondLargest = -Infinity;
	let theThirdLargest = -Infinity;
	if (nums.length <= 3) {
		return null;
	}
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num > largest) {
			theThirdLargest = secondLargest;
			secondLargest = largest;
			largest = num;
		} else if (num > secondLargest) {
			theThirdLargest = secondLargest;
			secondLargest = num;
		} else if (num > theThirdLargest) {
			theThirdLargest = num;
		}
	}
	return theThirdLargest;
};

module.exports = thirdLargest;
