const Astronomy = require('/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js');

const location = {
  lat: 37.5355,
  lon: -122.3355
};

const obs = new Astronomy.Observer(location.lat, location.lon, 300);
const date = new Date();
console.log(Astronomy.SearchRiseSet("Moon", obs, +1, date, 300).date.toLocaleString("en-US", {
  timeZone: "America/Los_Angeles"
}));

let planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon'];

let riseTimes = planets.map(planet => {
  return planet + ' ' + 'rises at' +  ' ' + Astronomy.SearchRiseSet(planet, obs, +1, date, 300).date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
})

let setTimes = planets.map(planet => {
  return planet + ' ' + Astronomy.SearchRiseSet(planet, obs, -1, date, 300).date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
})

riseTimes.forEach(ele => console.log(ele))
setTimes.forEach(ele => console.log(ele))