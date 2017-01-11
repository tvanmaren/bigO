'use strict';
//O(1) function -- constant runtime, regardless of input
function printTen(iterableInput) { // loops ten times (assuming valid input)
  if (typeof iterableInput === 'object') {
    let keys = Object.keys(iterableInput);
    for (let i = 0; i < 10; i++) {
      if (i < keys.length) {
        console.log(iterableInput[keys[i]]);
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (i < iterableInput.length) {
        console.log(iterableInput[i]);
      }
    }
  }
  return true;
}

printTen([1, 2, 3, 4, 5, 6, 7, 8]);
printTen([]);
printTen({});
printTen({
  'this': 'testvalue1',
  'another': 'testvalue2'
});
printTen('This is a string');
printTen(1024.567);
printTen(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']);
