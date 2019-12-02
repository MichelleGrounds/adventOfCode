const { expect } = require("chai");
const { fuelCalculator, checkArrayMass } = require("../index");
const massData = require("../data");

describe("fuelCalculator", () => {
  it("when given an empty array return 0", () => {
    const input = [];
    const actual = fuelCalculator(input);
    const expected = 0;
    expect(actual).to.equal(expected);
  });
  it("given an array with one number, return the fuel required", () => {
    const input = [320];
    const actual = fuelCalculator(input);
    const expected = 104;
    expect(actual).to.equal(expected);
  });
  it("given an array with more than one number, return the fuel required", () => {
    const input = [320, 120, 500];
    const actual = fuelCalculator(input);
    const expected = 306;
    expect(actual).to.equal(expected);
  });
  it("given an large array of numbers, return the fuel required", () => {
    const actual = fuelCalculator(massData.data);
    const expected = 3337766;
    expect(actual).to.equal(expected);
  });
});

describe("fuelCalculatorIncludingFuel", () => {
  it("given an empty array returns 0", () => {
    const input = [];
    const actual = checkArrayMass(input);
    const expected = 0;
    expect(actual).to.equal(expected);
  });
  it("given an array with a mass of 14 return 2 fuel", () => {
    const input = [14];
    const actual = checkArrayMass(input);
    const expected = 2;
    expect(actual).to.equal(expected);
  });
  it("given an array in which fuel requires additional fuel return the correct amound of fuel", () => {
    const input = [1969];
    const actual = checkArrayMass(input);
    const expected = 966;
    expect(actual).to.equal(expected);
  });
  it("given an array in which fuel requires additional fuel return the correct amound of fuel", () => {
    const input = [100756];
    const actual = checkArrayMass(input);
    const expected = 50346;
    expect(actual).to.equal(expected);
  });
  it("given an array in which fuel requires additional fuel return the correct amound of fuel", () => {
    const input = [100756, 1969];
    const actual = checkArrayMass(input);
    const expected = 966 + 50346;
    expect(actual).to.equal(expected);
  });
  it("given an array in which fuel requires additional fuel return the correct amound of fuel", () => {
    const actual = checkArrayMass(massData.data);
    const expected = 5003788;
    expect(actual).to.equal(expected);
  });
});
