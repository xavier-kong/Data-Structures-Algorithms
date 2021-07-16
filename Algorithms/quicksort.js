var test = [ 63, 95, 63, 26, 76, 19, 65, 8, 63, 26 ]
var ans = [8, 19, 26, 26, 63, 63, 63, 65, 76, 95]

const quick = (arr) => {
  if (arr.length < 2) {
    return arr;
  } 
  
  var pivot = arr[0];
  console.log("PIVOT", pivot)
  var lesser = [];
  var greater = [];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i])
    } else {
      lesser.push(arr[i])
    }
  }
  console.log("LESSER", lesser);
  console.log("GREATER", greater);
  console.log("CONCATTED", quick(lesser).concat(pivot, quick(greater)));

  return quick(lesser).concat(pivot, quick(greater));
}

console.log("SORTED", quick(test))
console.log("ANS", ans)