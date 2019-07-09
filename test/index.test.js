const multiples = require('../lib/index');

describe('Array Testing', () => {
  it('takes a positive integer, returns array of multiples', () => {
    const newArray = [15, 30, 45, 60, 75, 90];
    expect(multiples(15)).toEqual(newArray)
  });
});
