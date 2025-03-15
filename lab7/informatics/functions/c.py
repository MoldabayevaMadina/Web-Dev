def xor(a, b):
    if a * b == 0:
        return 1
    else:
        return 0
a = int(input())
b = int(input())
print(xor(a, b))