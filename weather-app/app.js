const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errMsg, results) => {
  if(errMsg) return console.log(errMsg);
  //console.log(JSON.stringify(results, undefined, 2));
  weather.getWeather(results.latitude, results.longtitude, (errMsg, weatherResults) => {
    if(errMsg) return console.log(errMsg);
    console.log(`Current temperature of ${results.address} is ${weatherResults.temperature}F; feels like ${weatherResults.apparentTemperature}F`);
  });
});