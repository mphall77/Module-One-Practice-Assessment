/**
 * Return if a given number includes 0.
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *
 */
//function numberIncludes0() {}

/* 
const numberIncludes0 = (num) => { 
  numArr = ("" + num).split(""); //"1023".split("") ==> ["1", "0", "2","3"]
  console.log(("" + num).split(""), "numArr") ==> ["1", "0", "2","3"] numArr
  return numArr.some((element) => {
    return element === "0"
  })
} 
*/
/* const numberIncludes0 = (num) => { 
  numArr = ("" + num).split(""); 
  return numArr.some((element) => {
    return element === "0"
  })
}  */

const numberIncludes0 = (num) => ("" + num).split("").some((element) =>element === "0")


/* const numberIncludes0 = (num) => {
		return ("" + num).split("").some((element) =>  element === "0")
}; */

/* const numberIncludes0 = (num) =>
	("" + num).split("").some((element) => element === "0");
 */
module.exports = numberIncludes0;
