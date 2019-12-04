const { expect } = require("chai");
const { passwordChecker, arrayAssembler } = require("./index");

describe("passwordChecker", () => {
  it("It is a six-digit number.The value is within the range 307237 - 769059.", () => {
    const input = 123455;
    const actual = passwordChecker(input);
    expect(actual).to.equal(false);
  });
  it("It is a six-digit number, Two adjacent digits are the same", () => {
    const input = 345667;
    const actual = passwordChecker(input);
    expect(actual).to.equal(true);
  });
  it("Two adjacent digits are the same (like 22 in 122345)", () => {
    const input = 345678;
    const actual = passwordChecker(input);
    expect(actual).to.equal(false);
  });
  it("Going from left to right, the digits never decrease;", () => {
    const input = 344546;
    const actual = passwordChecker(input);
    expect(actual).to.equal(false);
  });
  it("Part2: the two adjacent matching digits are not part of a larger group of matching digits.", () => {
    const input = 333444;
    const actual = passwordChecker(input);
    expect(actual).to.equal(false);
  });
  it("Part2: the two adjacent matching digits are not part of a larger group of matching digits.", () => {
    const input = 333445;
    const actual = passwordChecker(input);
    expect(actual).to.equal(true);
  });
  describe("arrayAssembler", () => {
    //   it("part 1: returns how many possible passwords are in the range", () => {
    //     const input1 = 307237;
    //     const input2 = 769059;
    //     const actual = arrayAssembler(input1, input2);
    //     const expected = 889;
    //     expect(actual).to.equal(expected);
    //   });
    it("part 2: returns how many possible passwords are in the range", () => {
      const input1 = 307237;
      const input2 = 769059;
      const actual = arrayAssembler(input1, input2);
      const expected = 589;
      expect(actual).to.equal(expected);
    });
  });
});
