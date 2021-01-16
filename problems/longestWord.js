/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word. If two words have the same length return the first word found.
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

 // need too find the length of each word ==> arr[i].length
//function longestWord(words) {
const longestWord = (words) => {
    longest = "";
    words.map((word) => {
        if (word.length > longest.length) {
            longest = word;
         }
    })
    return longest;
}

module.exports = longestWord;
