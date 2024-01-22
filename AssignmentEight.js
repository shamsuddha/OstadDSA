// Function for task one
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  for (; left <= right; ) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(nums, target));




// Function for task two
function findMinimum(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
console.log(findMinimum(nums));