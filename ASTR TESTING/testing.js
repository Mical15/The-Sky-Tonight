const Astronomy = require('/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js');

// import {Observer, SearchRiseSet} from '/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js';


const location = {
  lat: 37.5355,
  lon: -122.3355
}; 

const obs = new Astronomy.Observer(location.lat, location.lon, 300);
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1)
const date = new Date();

let sunSetTime = Astronomy.SearchRiseSet('Sun', obs, +1, date, 300).date.toLocaleString("en-US", {
  timeZone: "America/Los_Angeles"
})
let sunRiseTime = Astronomy.SearchRiseSet('Sun', obs, -1, date, 300).date.toLocaleString("en-US", {
  timeZone: "America/Los_Angeles"
})


let planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon'];

let riseTimes = planets.map(planet => {
  return Astronomy.SearchRiseSet(planet, obs, +1, yesterday, 300).date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
})

let setTimes = planets.map(planet => {
  return Astronomy.SearchRiseSet(planet, obs, -1, date, 300).date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
  })
})


riseTimes.forEach(ele => console.log(ele))
console.log('-------------------')
setTimes.forEach(ele => console.log(ele))
console.log('sun rise time' + ' ' + sunSetTime);
console.log('sun set time' + ' ' + sunRiseTime)

console.log(riseTimes[0] < sunSetTime);