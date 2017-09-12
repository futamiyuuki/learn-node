const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
    
    it('should async add two numbers', done => {
      utils.asyncAdd(4, 3, sum => {
        expect(sum).toBe(7).toBeA('number');
        done();
      })
    });
  });
  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(13);
      expect(res).toBe(169).toBeA('number');
    });
    
    it('should async square a number', done => {
      utils.asyncSquare(13, res => {
        expect(res).toBe(169).toBeA('number');
        done();
      });
    });
  });
});


it('should set first and last names', () => {
  const user = {
    age: 25,
    location: 'China'
  };
  expect(utils.setName(user, 'Zedong Mao')).toInclude({
    lastName: 'Mao',
    firstName: 'Zedong'
  }).toBeA('object');
});

// it('should expect some values', () => {
//   //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
// });