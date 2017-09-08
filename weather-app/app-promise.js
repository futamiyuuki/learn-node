const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      describe: 'Address to fetch weather for',
      demand: true,
      alias: 'address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddr = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;

axios.get(geocodeUrl).then(response => {
    if(response.data.status === 'ZERO_RESULTS') throw new Error('Unable to find that address.');
    const lat = response.data.results[0].geometry.location.lat, lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/358b858ee03a87ff8b6470360fda7992/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then(response => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  }).catch(err => {
    if(err.code === 'ENOTFOUND') console.log('Unable to connect to API servers');
    else console.log(err.message);
  });