const { push, shift, unshift, pop, hasDuplicates } = require('./index.js');

describe('push', () => {
  it('should add an element to an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(push(arr, 'd')).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe('d');
  });
  it('should remove an element to an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(pop(arr)).toBe(2);
    //expect(arr.length).toBe(4);
    expect(arr[1]).toBe('b');
  });

  it('should shift an arr', () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toBe('a');
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe('c');
  });

  it('should unshift an arr', () => {
    const arr = ['a', 'b', 'c'];
    expect(unshift(arr, 'z')).toBe(4);
    // expect(arr.length).toBe(4);
    expect(arr[0]).toBe('z');
  });

  it('finds duplicate data', () => {
    const arr = ['j', 'o', 'w', 'w'];
    expect(hasDuplicates(arr)).toBe(true);
  });
});
