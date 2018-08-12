const mergeSort = (array) => {
  if(array.length < 2) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let sorted = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]){
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  while(left.length) sorted.push(left.shift());
  while(right.length) sorted.push(right.shift());
  return sorted;
}

let unsorted = [100,50,-20,1,2,2,7,24]
console.log(mergeSort(unsorted));

module.exports = mergeSort;
