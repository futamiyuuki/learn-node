const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Jihyo';
    const text = 'Lalala';
    const res = generateMessage(from, text);
    expect(res).toMatchObject({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Nayeon';
    const lat = 123;
    const long = 321;
    const res = generateLocationMessage(from, lat, long);
    expect(res).toMatchObject({from, url: `https://www.google.com/maps?q=${lat},${long}`});
    expect(typeof res.createdAt).toBe('number');
  });
});