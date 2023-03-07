const isArrayEmpty = (arr) => {
  if (arr !== undefined && arr.length > 0 && arr !== null) {
    return false;
  }
  return true;
};

const dumpMessage = (message) => {
  console.log(message);
};

export { isArrayEmpty, dumpMessage };
