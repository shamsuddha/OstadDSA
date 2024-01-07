// Function for task one

function isValidBrackets(str) {
  const stack = [];
  const bracketsObj = {')': '(', '}': '{', ']': '['};

  for (let i = 0; i < str.length; i++) {

     const char = str[i];

      if (bracketsObj[char] !== undefined) {

          if (stack.length === 0 || stack[stack.length - 1] !== bracketsObj[char]) {
              return false;
          }
          stack.pop();
      } else {
          stack.push(char);
      }
  }
  return stack.length === 0;
}

const inputString = "({}{][]})";
console.log(isValidBrackets(inputString));

Time Complexity: O(n)
Space Complexity: O(n)




// Function for task two

function removeAdjacentDuplicates(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (stack.length && stack[stack.length - 1] === char) {
          stack.pop();
      } else {
          stack.push(char);
      }
  }

  return stack.join('');
}

const inputString = "azxxzy";
const result = removeAdjacentDuplicates(inputString);
console.log(result);

Time Complexity: O(n)
Space Complexity: O(n)