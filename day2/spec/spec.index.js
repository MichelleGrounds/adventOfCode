const { expect } = require("chai");
const { opCode, nounAndVerbChecker } = require("../index");
const { data, ogData } = require("../data");

describe("opCode", () => {
  it("given an empty array returns 0", () => {
    const input = [];
    const actual = opCode(input);
    const expected = 0;
    expect(actual).to.equal(expected);
  });
  it("given an array starting with 1, add the next two numbers and replace the fourth one with it", () => {
    const input = [1, 1, 2, 0, 99];
    const actual = opCode(input);
    const expected = 3;
    expect(actual).to.equal(expected);
  });
  it("given an array starting with 2, add the multiply two indexes and replace the fourth one with it", () => {
    const input = [2, 5, 2, 0, 99, 7];
    const actual = opCode(input);
    const expected = 14;
    expect(actual).to.equal(expected);
  });
  it("given an array starting with 2, add the multiply two indexes and replace the fourth one with it", () => {
    const input = [2, 3, 0, 3, 99];
    const actual = opCode(input);
    const expected = 2;
    expect(actual).to.equal(expected);
  });
  it("given an array starting with 2, add the multiply two indexes and replace the fourth one with it", () => {
    const input = [2, 3, 0, 3, 99];
    opCode(input);
    expect(input).to.eql([2, 3, 0, 6, 99]);
  });
  it("given an array starting with 2, add the multiply two indexes and replace the fourth one with it", () => {
    const input = [2, 4, 4, 5, 99, 0];
    opCode(input);
    expect(input).to.eql([2, 4, 4, 5, 99, 9801]);
  });
  it("given a complex array, return the 0th index", () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    const actual = opCode(input);
    const expected = 30;
    //not 1
    expect(actual).to.equal(expected);
  });
  it("given a complex array, mutate the array", () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    opCode(input);
    expect(input).to.eql([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });
  it("given the whole code array, mutate the array and return the 0th index 4138658", () => {
    const actual = opCode(data);
    const expected = 4138658;
    expect(actual).to.eql(expected);
  });
});

describe("nounAndVerbChecker", () => {
  it("get correvt value", () => {
    const actual = nounAndVerbChecker(ogData);
    const expected = 7264;
    expect(actual).to.equal(expected);
  });
});
