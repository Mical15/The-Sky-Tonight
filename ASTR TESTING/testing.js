import { createRequire } from "module";
const require = createRequire(import.meta.url);
import SunCalc from "suncalc";
const Astronomy = require('/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js');


const location = {
  lat: 37.5355,
  lon: -122.3355
}; 

const now = new Date()
let after = new Date(now)
after.setDate(after.getDate() + 1)

const today = SunCalc.getTimes(new Date(), 37.5355, -122.3355);
const tommrow = SunCalc.getTimes(after, 37.5355, -122.3355);

const sunRiseStr = tommrow.sunrise // .getHours() + ':' + times.sunrise.getMinutes();     Suncalc seems to be a tad more accurate +/- 1min
const sunSetStr = today.sunset // .getHours() + ':' + times.sunset.getMinutes();

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

// riseTimes.forEach(ele => console.log(ele))
// setTimes.forEach(ele => console.log(ele))
console.log(sunSetStr + ' ' + date);