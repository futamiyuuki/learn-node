const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/358b858ee03a87ff8b6470360fda7992/${lat},${lng}`,
    json: true
  }, (err, response, body) => {
    if(!err && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
      //console.log(`Current temperature: ${body.currently.temperature}`);
    } else {
      callback('Unable to fetch weather.');
    }
  })
};

module.exports = {
  getWeather
}