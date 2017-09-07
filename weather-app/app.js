// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//     a: {
//       describe: 'Address to fetch weather for',
//       demand: true,
//       alias: 'address',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errMsg, results) => {
//   if(errMsg) console.log(errMsg);
//   else console.log(JSON.stringify(results, undefined, 2));
// });

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/358b858ee03a87ff8b6470360fda7992/25.0329694,121.5654177`,
  json: true
}, (err, response, body) => {
  if(!err && response.statusCode === 200) {
    console.log(`Current temperature: ${body.currently.temperature}`);
  } else {
    console.log('Unable to fetch weather.');
  }
})