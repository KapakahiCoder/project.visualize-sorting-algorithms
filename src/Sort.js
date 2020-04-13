class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }

  sort(inputArray) {
    for (let i = 1; i < inputArray.length; i++) {
      let key = inputArray[i];
      let j = i - 1;
      while (j >= 0 && inputArray[j] > key) {
        inputArray[j + 1] = inputArray[j];
        j = j - 1;
      }
      inputArray[j + 1] = key;
    }
    return inputArray;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
