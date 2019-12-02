const opCode = data => {
  if (data.length === 0) return 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] === 1) {
      data[data[i + 3]] = data[data[i + 1]] + data[data[i + 2]];
    }
    if (data[i] === 2) {
      data[data[i + 3]] = data[data[i + 1]] * data[data[i + 2]];
    }
    if (data[i] === 99) {
      return data[0];
    }
  }
};

const opCodeToValue = (data, noun, verb) => {
  data[1] = noun;
  data[2] = verb;

  //use opCode function instead of copy paste??
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] === 1) {
      data[data[i + 3]] = data[data[i + 1]] + data[data[i + 2]];
    }
    if (data[i] === 2) {
      data[data[i + 3]] = data[data[i + 1]] * data[data[i + 2]];
    }
    if (data[i] === 99) {
      return data[0];
    }
  }
};

//instead of brute force: reverse code?! set [0] as the end value,
//then index-4
//if 2: divide
//if 1 minus
const nounAndVerbChecker = ogData => {
  let result = 0;
  for (let j = 0; j < 100; j++) {
    const data = [...ogData];
    for (let i = 0; i < 100; i++) {
      const data = [...ogData];
      if (opCodeToValue(data, j, i) === 19690720) {
        noun = j;
        verb = i;
        result = 100 * j + i;
      }
    }
  }
  if (result !== 19690720) {
    console.log(noun);
    console.log(verb);
    return result;
  }
};

module.exports = { opCode, nounAndVerbChecker };
