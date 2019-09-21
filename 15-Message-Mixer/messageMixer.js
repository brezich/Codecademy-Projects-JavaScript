const countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count; 
};

const capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }
  return arr.join(" ");
};

const reverseWord = function(word) {
  return word.split("").reverse().join("");
};

const reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words.join(" ");
};

const replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

const replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

const encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
  for (let key in replacementObject) {
    string = replaceAllOccurrences(string, key, replacementObject[key]);
  }
  return string;
};

const palindrome = function(str) {
  return `${str} ${reverseWord(str)}`;
};

const pigLatin = function(sentence, character) {
  return sentence.split(" ").join(character + " ");
};

module.exports = { countCharacter, capitalizeFirstCharacterOfWords, reverseWord,
reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin };
