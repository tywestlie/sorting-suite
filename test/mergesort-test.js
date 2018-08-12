const assert = require('chai').assert
const mergeSort = require('../lib/mergeSort')

describe('merge-sort', function() {
  it('can sort an array', function() {
    let unsorted = [5,2,3,1,6,4]
    let sorted = [1,2,3,4,5,6]
    assert.deepEqual(mergeSort(unsorted), sorted)
  });
  it('can sort an array with negative numbers', function() {
    let unsorted = [-5, -15, 2, 1, 3]
    let sorted = [-15, -5, 1, 2, 3]

    assert.deepEqual(mergeSort(unsorted), sorted)
  });
  it('can be given an array with only 1 index', function() {
    let unsorted = [5]
    let sorted = [5]

    assert.deepEqual(mergeSort(unsorted), sorted)
  });
});
