const Sort = require("../src/Sort");
const { expect } = require("chai");

let array;
let test = new Sort([3, 5, 10, 0, 4, 22]);
let test2 = new Sort([-11, -3, 3, 0, -100, 4]);
let test3 = new Sort([1, 2, 3]);

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should properly sort an array", () => {
    expect(test.sort()).to.eql([0, 3, 4, 5, 10, 22]);
    expect(test2.sort()).to.eql([-100, -11, -3, 0, 3, 4]);
    expect(test3.sort()).to.eql([1, 2, 3]);
  });
});
