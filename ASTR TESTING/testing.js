const Astronomy = require('/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js');

// import {Observer, SearchRiseSet} from '/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js';


const location = {
  lat: 37.5355,
  lon: -122.3355
}; 

const obs = new Astronomy.Observer(location.lat, location.lon, 300);
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const date = new Date();

// .toLocaleString("en-US", {
//   timeZone: "America/Los_Angeles"
// })

let test = Astronomy.SearchRiseSet('Sun', obs, +1, date, 300);

let sunRiseTime = new Date(Astronomy.SearchRiseSet('Sun', obs, +1, date, 300))
let sunSetTime = new Date(Astronomy.SearchRiseSet('Sun', obs, -1, date, 300))


let planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon'];

let planetRiseSetTimes = planets.map(planet => {
  return {
    planet, 
    riseTimes: new Date(Astronomy.SearchRiseSet(planet, obs, +1, yesterday, 300)), 
    setTimes: new Date(Astronomy.SearchRiseSet(planet, obs, -1, date, 300))
  }
});

function filterBySetTimes(planetData){
  return planetData.filter(obj => {
    return obj.setTimes.getTime() > sunSetTime.getTime();
  })
}

function filterByRiseTimes(planetData){
  return planetData.filter(obj => {
    return obj.riseTimes.getTime() < sunRiseTime.getTime();
  })
}


console.log('Set:', filterBySetTimes(planetRiseSetTimes), '\n')
console.log('Rise:', filterByRiseTimes(planetRiseSetTimes))
console.log('Sunrise time: ', sunRiseTime, 'sunset time: ', sunSetTime)

// .toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
// let setTimes = planets.map(planet => {
//   return {planet, setTimes: new Date(Astronomy.SearchRiseSet(planet, obs, -1, date, 300))}
// });


// now they are type object

// let testing1 = setTimes.map(ele => {
//   if (ele.getTime() < sunSetTime.getTime()) {
//     return 'n/a'
//   }
//   return ele;
// })

// let testing = setTimes.filter((obj)=>{
//   return obj.setTimes.getTime() > sunSetTime.getTime()
// })

// riseTimes.map(ele => {
//   if (ele > sunRiseTime) {
//     return 'n/a'
//   } 
//   return ele;
  
// })

// console.log(testing)
// testing.forEach(ele => console.log(ele));
// console.log('-------------------');
// setTimes.forEach(ele => console.log(ele));
// console.log(sunSetTime.toLocaleString("en-US", {
//   timeZone: "America/Los_Angeles"
// }));
// console.log(sunRiseTime);

// sunSetTime.date.toLocaleString("en-US", {
//   timeZone: "America/Los_Angeles"
// });]