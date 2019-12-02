const opCode = data => {
  if (data.length === 0) return 0;

  //let result = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] === 1) {
      data[data[i + 3]] = data[data[i + 1]] + data[data[i + 2]];
      //   i = i + 4;
    }
    if (data[i] === 2) {
      data[data[i + 3]] = data[data[i + 1]] * data[data[i + 2]];
      //   i = i + 4;
    }
    if (data[i] === 99) {
      return data[0];
    }
  }
  //return result;
};

module.exports = opCode;
