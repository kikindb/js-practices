// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
  let sum = 0;

  function helper(nums) {
    if (nums.length === 0) return 1;
    return nums[0] * helper(nums.slice(1));
  }

  sum = helper(nums);

  return sum;
}
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); //60