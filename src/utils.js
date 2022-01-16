const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const getRandomArrayItem = (items) => items[getRandomNumber(items.length)];

export { getRandomNumber, getRandomArrayItem };
