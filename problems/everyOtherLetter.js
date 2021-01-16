/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} - 
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

//function everyOtherLetter() {}
const everyOtherLetter = (str) => {
    let output = "";
    for (let i = 0; i < str.length; i += 2) {
        output += str[i];
    }
    return output;
}

module.exports = everyOtherLetter;
