const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBe(44);
});

it('should square a number', () => {
  const res = utils.square(13);
  expect(res).toBe(169);
});

it('should expect some values', () => {
  //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
});