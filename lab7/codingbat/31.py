def has22(nums):
  a = False
  for i in range(len(nums) - 1):
    if(nums[i] == nums[i+1] == 2):
      a = True
  return a

