module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
      const testItem = {
          name: item.name,
          durability: 100,
          enhancement: item.enhancement + 1
      };
      return testItem;
  } else {
      return item;
  }
}


function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
