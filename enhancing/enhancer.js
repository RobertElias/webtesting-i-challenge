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
  if (item.enhancement < 15) {
      const testItem = {
          name: item.name,
          durability: item.durability - 5,
          enhancement: item.enhancement
      };
      return testItem;
  } else if (item.enhancement > 16) {
      const testItem = {
          name: item.name,
          durability: item.durability - 10,
          enhancement: item.enhancement - 1
      };
      return testItem;
  } else if (item.enhancement > 14) {
      const testItem = {
          name: item.name,
          durability: item.durability - 10,
          enhancement: item.enhancement
      };
      return testItem;
  }
  return item;

}
function repair(item) {
  const testItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
  };
  return testItem;
}

function get(item) {
  return { ...item };
}
