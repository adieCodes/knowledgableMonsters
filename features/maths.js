const goldTestQuestion = () => {
  const multiples = [7, 9, 11, 12];
  const bases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const randomisationOfMultiples = Math.floor(Math.random() * multiples.length);
  const randomisationOfBases = Math.floor(Math.random() * bases.length);

  return `${bases[randomisationOfBases]} x ${multiples[randomisationOfMultiples]}`;
};

module.exports = { goldTestQuestion };
