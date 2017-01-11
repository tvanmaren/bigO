'use strict';

//O(n) function -- runtime maintains 1-to-1 correlation with input

function printAll(iterableInput) {
  if (typeof iterableInput === 'object') {
    let keys = Object.keys(iterableInput);
    for (let i = 0; i < keys.length; i++) {
      console.log(iterableInput[keys[i]]);
    }
  }
  for (let i = 0; i < iterableInput.length; i++) {
    console.log(iterableInput[i]);
  }
  return true;
}

printAll([1, 2, 3, 4, 5, 6, 7, 8]);
printAll([]);
printAll({});
printAll({
  'this': 'testvalue1',
  'another': 'testvalue2'
});
printAll('This is a string');
printAll(1024.567);
printAll(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']);
