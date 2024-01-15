// Function for task one

















// Function for task two

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
      } else {
          nums1[k] = nums2[j];
          j--;
      }
      k--;
  }

 
  while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
  }


}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

Time Complexity: O(m + n)
Space Complexity: O(1)