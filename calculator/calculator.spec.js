const { add } = require('./calculator.js');

// AAA
// Arrange
// Act
// Assert

describe('calculator functions', () => {
  describe('test add', () => {
    let a = 2;
    let b = 2;
    let expected = 4;
    let result = -1
    it('returns sum of two numbers', () => {
      result = add(a, b);
      expect(result).toBe(expected);

      a = 2;
      b = 3;
      expected = 5;
      result = add(a, b);
      expect(result).toBe(expected);
    });

    it('returns the value passed when only one arguement is provided', () => {
      a = null;
      b = 3;
      expected = 3;
      result = add(b);
      expect(result).toBe(expected);
    })

    it.todo('returns the sum ');
  })
})