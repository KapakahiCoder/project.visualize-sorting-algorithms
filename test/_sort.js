const Sort = require("../src/Sort");
const { expect } = require("chai");

let array;
let test = new Sort(array);

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should properly sort an array", () => {
    expect(test.sort([3, 5, 10, 0, 4, 22])).to.eql([0, 3, 4, 5, 10, 22]);
    expect(test.sort([-11, -3, 3, 0, -100, 4])).to.eql([
      -100,
      -11,
      -3,
      0,
      3,
      4,
    ]);
    expect(test.sort([1, 2, 3])).to.eql([1, 2, 3]);
  });
});
