/**
 * Returns an array of words that have 5 or more letters. 
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */
//function onlyStringsGreaterThanOrEqualTo5() { }

const onlyStringsGreaterThanOrEqualTo5 = (words) => words.filter((word) => word.length >= 5)  
    
//const allFiveOrMore = wordArr => wordArr.every((word) => word.length >= 5)

module.exports = onlyStringsGreaterThanOrEqualTo5;
