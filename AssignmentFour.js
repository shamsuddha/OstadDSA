// Function for task one
function isPalindromeRecursive(str) {
  if (str.length === 0 || str.length === 1) {
      return true;
  }
  if (str[0] === str[str.length - 1]) {
      return isPalindromeRecursive(str.slice(1, -1));
  } else {
      return false;
  }
}

console.log(isPalindromeRecursive("level"));

Time Complexity: O(n)
Space Complexity: O(n)



// Function for tast two

function multiplyWithOutOperator(a, b) {
  if (b === 0 || a === 0) {
      return 0;
  } else if (b === 1) {
      return a;
  } else {
      return a + multiplyWithOutOperator(a, b - 1);
  }
}

console.log(multiplyWithOutOperator(5, 3));

Time Complexity: O(b)
Space Complexity: O(b)
