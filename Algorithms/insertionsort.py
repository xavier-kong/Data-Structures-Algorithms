def insertionSort(arr):

  for i in range(1, len(arr)):

    key = arr[i]
    pos = i-1
    print("sorted ", arr[0:pos+1], "unsorted", arr[pos+1:])

    while pos >= 0 and key < arr[pos]:
      arr[pos+1] = arr[pos]
      pos -=1
    
    arr[pos+1] = key
    
  return arr

test = [3, 8, 5, 4, 1, 9, -2]

print("ans ",insertionSort(test))