/**
 * Returns the number of times the target is in the array
 * @param {Array} arr - array of elements
 * @param {any} target - target to find in array
 * @returns {number} - amount of times the target was included
 *
 * ex: howManyTargets([1, 2, 3, 2, 1, 1], 1) //=> 3
 *
 */
//function howManyTargets() {}

const howManyTargets = (arr, target) => {
    let amount = 0;
    arr.forEach((el) => {
			if (el === target) {
				amount += 1;
			}
		});
		return amount;
 }

module.exports = howManyTargets;
