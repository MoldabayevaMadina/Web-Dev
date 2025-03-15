def big_diff(nums):
  smallest = 100
  largest = -100
  if(len(nums) == 1):
    return 0
  for i in range(len(nums)-1):
    if(min(nums[i], nums[i+1]) < smallest):
      smallest = min(nums[i], nums[i+1])
    if(max(nums[i], nums[i+1]) > largest):
      largest = max(nums[i], nums[i+1])
  return largest - smallest
