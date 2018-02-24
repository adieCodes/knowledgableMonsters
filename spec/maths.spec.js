const { expect } = require('chai');
const { goldTestQuestion } = require('../features/maths');

describe('Maths Features', () => {
  describe('#goldTest', () => {
    const goldTestQuestionOptions = [
      '0 x 7',
      '1 x 7',
      '2 x 7',
      '3 x 7',
      '4 x 7',
      '5 x 7',
      '6 x 7',
      '7 x 7',
      '8 x 7',
      '9 x 7',
      '10 x 7',
      '11 x 7',
      '12 x 7',
      '0 x 9',
      '1 x 9',
      '2 x 9',
      '3 x 9',
      '4 x 9',
      '5 x 9',
      '6 x 9',
      '7 x 9',
      '8 x 9',
      '9 x 9',
      '10 x 9',
      '11 x 9',
      '12 x 9',
      '0 x 11',
      '1 x 11',
      '2 x 11',
      '3 x 11',
      '4 x 11',
      '5 x 11',
      '6 x 11',
      '7 x 11',
      '8 x 11',
      '9 x 11',
      '10 x 11',
      '11 x 11',
      '12 x 11',
      '0 x 12',
      '1 x 12',
      '2 x 12',
      '3 x 12',
      '4 x 12',
      '5 x 12',
      '6 x 12',
      '7 x 12',
      '8 x 12',
      '9 x 12',
      '10 x 12',
      '11 x 12',
      '12 x 12'
    ];
    it('returns a random question from the 7, 9, 11 or 12 times table', () => {
      expect(goldTestQuestion()).to.be.oneOf(goldTestQuestionOptions);
    });
  });
});
