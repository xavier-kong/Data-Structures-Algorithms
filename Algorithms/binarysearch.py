def binarySearch(arr, x):
  print("Array ", arr)
  print("Target ", x)
  l = 0
  r = len(arr) - 1

  while r >= l:
    mid = (l + r) // 2
    if arr[mid] == x:
      return mid
    elif x > arr[mid]:
      l = mid + 1
    else:
      r = mid - 1
  return "not found"



arr = [ 2, 3, 4, 10, 40 ]
x = 10

print(binarySearch(arr, x))

arr = [-1,0,3,5,9,12]
x = 9

print(binarySearch(arr, x))

arr = [-1,0,3,5,9,12]
x = 2

print(binarySearch(arr, x))
