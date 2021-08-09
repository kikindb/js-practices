/** https://leetcode.com/problems/backspace-string-compare/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  return backspaceRemover(s) === backspaceRemover(t);
};

const backspaceRemover = function (s) {
  let stringTransformed = s.split('').reverse();
  let popCount = 0;

  for (let i = 0; i < stringTransformed.length; i++) {
    if (stringTransformed[i] === "#") {
      stringTransformed.splice(i, 1);
      popCount++;
      i--;
    } else {
      if (popCount > 0) {
        stringTransformed.splice(i, 1);
        popCount--;
        i--;
      }
    }
  }

  return stringTransformed.reverse().join('');
};