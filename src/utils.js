const getRandomInt = (min = 0, max = 100) => {
  const mn = Math.ceil(min);
  const mx = Math.floor(max);
  return Math.floor(Math.random() * (mx - mn) + mn);
};

const getRandomArrayItem = (items) => items[getRandomInt(items.length)];

export { getRandomInt, getRandomArrayItem };