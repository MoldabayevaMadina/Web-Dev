N = int(input())
arr = list(map(int, input().split()))

for i in range(int(N / 2)):
    a = arr[i]
    arr[i] = arr[N - 1 - i]
    arr[N - 1 - i] = a

for i in range(N):
    print(arr[i], end = ' ')