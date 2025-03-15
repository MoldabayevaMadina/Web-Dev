x = input()
n = 0
t = 0
for i in range(len(x)-1, -1, -1):
    n += int(x[i]) * 2 ** t
    t += 1
print(n)