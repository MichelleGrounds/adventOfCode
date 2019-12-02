//Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

const massData = require("./data");

const fuelCalculator = data => {
  let result = 0;
  data.forEach(mass => {
    result += Math.floor(mass / 3) - 2;
  });

  return result;
};

const fuelCalculatorIncludingFuel = (singleMass, currentMass = 0) => {
  let extraFuelMass = Math.floor(singleMass / 3) - 2;
  if (extraFuelMass <= 0) {
    return currentMass;
  } else {
    return fuelCalculatorIncludingFuel(
      extraFuelMass,
      currentMass + extraFuelMass
    );
  }
};

const checkArrayMass = data => {
  return data
    .map(mass => fuelCalculatorIncludingFuel(mass, 0))
    .reduce((a, b) => a + b, 0);
};

module.exports = {
  fuelCalculator,
  fuelCalculatorIncludingFuel,
  checkArrayMass
};
