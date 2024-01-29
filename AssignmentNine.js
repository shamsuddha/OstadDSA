// Function for task one
function getHeight(tree) {
  if (!tree.length) {
      return 0;
  }
  let height = 0;
  let levelSize = 1;
  let index = 0;
  
  while (index < tree.length) {
      for (let i = 0; i < levelSize; i++) {
          if (tree[index] !== null) {
              height = Math.max(height, Math.floor(Math.log2(index + 2)));
          }
          index++;
      }
      levelSize *= 2;
  }
  return height;
}
let root = [1,null,2];
console.log(getHeight(root));


Time Complexity: O(n)
Space Complexity: O(1)

// Function for task two


