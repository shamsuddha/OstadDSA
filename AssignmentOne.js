// Function for task one
function task_1(n) {  
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a = a * i;
  }
  return a;
}

task_1(5);

Time Complexity: O(n)
Space Complexity: O(1)

// Function for tast two
function task_2(a,b){
  let x = 0;
  if (b > a) {
      for (let i = a; i <= b; i++) {
          x = x + i;
      }
  } 
  else {
      for (let i = b; i <= a; i++) {
          x = x + i;
      }
  }
  console.log(x);
}

task_2(5,10);

Time Complexity: O(n)
Space Complexity: O(1)