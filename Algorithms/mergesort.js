var test = [ 63, 95, 63, 26, 76, 19, 65, 8, 63, 26 ]
var ans = [8, 19, 26, 26, 63, 63, 63, 65, 76, 95]

function merge(left, right) {
  var temp = [];
  var l_index = 0;
  var r_index = 0;

  console.log("LEFT: ", left, " RIGHT: ", right)

  while (l_index < left.length && r_index < right.length) {
    if (left[l_index] > right[r_index]) {
      temp.push(right[r_index]);
      r_index++;
    } else if (left[l_index] < right[r_index]) {
      temp.push(left[l_index]);
      l_index++;
    } else {
      temp.push(left[l_index]);
      l_index++;
    }
  }

  while (l_index < left.length) {
    temp.push(left[l_index]);
      l_index++;
  }

  while (r_index < right.length) {
    temp.push(right[r_index]);
      r_index++;
  }

  console.log("TEMP", temp)
  return temp;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var center = Math.floor(arr.length /2);
    var left = mergeSort(arr.slice(0,center))
    var right = mergeSort(arr.slice(center,))
    return merge(left, right)
  }
}

console.log("MERGED", mergeSort(test))
console.log("ANSWER", ans)