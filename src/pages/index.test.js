'use strict';

const index = require('./index.jsx');

describe('index', () => {
  test('exports a function', () => {
    expect(index).toEqual(expect.any(Function));
  });
});
