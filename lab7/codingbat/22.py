def make_bricks(small, big, goal):
  if goal <= small:
    return True
  for i in range(big):
    goal -= 5
    if goal < 0:
      return False
    elif goal <= small:
      return True
  return False

# print(make_bricks(4, 1, 4))