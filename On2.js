'use strict';

//O(n^2) function -- runtime maintains exponential correlation with input

function printCombinations(iterableInput1, iterableInput2) {
  if (typeof iterableInput1 === 'object' && typeof iterableInput2 === 'object') {
    let keys1 = Object.keys(iterableInput1);
    let keys2 = Object.keys(iterableInput2)
    for (let i = 0; i < keys1.length; i++) {
      for (let j = 0; j < keys2.length; j++) {
        console.log(iterableInput1[keys1[i]], iterableInput2[keys2[j]]);
      }
    }
  } else {
    for (let i = 0; i < iterableInput1.length; i++) {
      for (let j = 0; j < iterableInput2.length; j++) {
        console.log(iterableInput1[i], iterableInput2[j]);
      }
    }
  }
  return true;
}

printCombinations([1, 2, 3, 4, 5, 6, 7, 8], 'This is a string');
printCombinations([], 'hello there');
printCombinations({}, {'one':'valueOne', 'two':'valueTwo','three':'valueThree'});
printCombinations({
  'this': 'testvalue1',
  'another': 'testvalue2'
},{'one':'valueOne', 'two':'valueTwo','three':'valueThree'});
printCombinations('This is a string', [1,2,3,4,5,6,7,8,9,10,11,12,13]);
printCombinations(1024.567, 'invalid input');
printCombinations(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],'Alphabet Soup');
