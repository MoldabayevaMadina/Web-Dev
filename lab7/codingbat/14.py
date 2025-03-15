def reverse3(nums):
  a = nums[0]
  nums[0] = nums[-1]
  nums[-1] = a
  return nums
