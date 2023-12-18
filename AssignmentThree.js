// Function for task one

function changeOrderString(arr, indices) {
   
  if (arr.length !== indices.length) {
      throw new Error("Inputs must have the same length.");
  }

  const pairArray = arr.map((e, i) => [e, indices[i]]);

  pairArray.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < arr.length; i++) {
      arr[i] = pairArray[i][0];
  }
}

let s = "abc";
let arr = s.split("");
let indices = [1,0,2];
changeOrderString(arr, indices);
console.log(arr.join(""));


Time Complexity: O(n log n)
Space Complexity: O(n)




// Function for task two

function indexOfOccurance(haystack, needle) {
  if (haystack.includes(needle)) {
      console.log(haystack.indexOf(needle));
  }
  else {
      console.log(-1);
  }
}
let haystack = "codemama", needle = "ostad";

indexOfOccurance(haystack, needle);


Time Complexity: O(n)
Space Complexity: O(1)