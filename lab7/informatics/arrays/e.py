N = int(input())
arr = list(map(int, input().split()))
a = False
for i in range(1, N):
    if arr[i] * arr[i-1] > 0:
        a = True
        break
if(a):
    print('YES')
else:
    print('NO')