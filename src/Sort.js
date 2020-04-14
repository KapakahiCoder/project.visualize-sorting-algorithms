class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    let inputArray = this.array;
    for (let i = 1; i < inputArray.length; i++) {
      for (let j = 0; j < i; j++) {
        if (inputArray[i] < inputArray[j]) {
          let temp = inputArray.splice(i, 1);
          inputArray.splice(j, 0, temp[0]);
        }
      }
    }
    return inputArray;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = SomeKindOfSort;
