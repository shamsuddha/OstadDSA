// Function for task one
function task_1(nums, target) {  
for (let i = 0; i < nums.length; i++) {
  for(let j = i+1; j<nums.length; j++)
  {
      if(nums[i]+ nums[j] == target)
      {
          console.log(i,j);
      }
  }
}
}

let array = [3,3], target = 6;
task_1(array, target);

Time Complexity: O(n^2)
Space Complexity: O(1)


// Function for tast two
function task_2(prices){
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
    }
    return max;
}
let prices = [7,1,5,3,6,4];
task_2(prices);

Time Complexity: O(n)
Space Complexity: O(1)
