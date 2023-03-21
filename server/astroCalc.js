const Astronomy = require('/Users/michaelgallien/Projects/astrLocations/The-Sky-Tonight/astronomy.js');

function astroCalc() {
  const location = {
    lat: 37.5355,
    lon: -122.3355
  }; 
  
  const obs = new Astronomy.Observer(location.lat, location.lon, 300);
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const date = new Date();
  
  let test = Astronomy.SearchRiseSet('Sun', obs, +1, date, 300);
  
  let todaysSunRiseTime = new Date(Astronomy.SearchRiseSet('Sun', obs, +1, yesterday, 300))
  let sunRiseTime = new Date(Astronomy.SearchRiseSet('Sun', obs, +1, date, 300))
  let sunSetTime = new Date(Astronomy.SearchRiseSet('Sun', obs, -1, date, 300)) // need to test, I think the library changes "date" once sunset time has been reached. Useful for astronomeres, not useful for people.
  // let sunSetTime = new Date().now() <= new Date(Astronomy.SearchRiseSet('Sun', obs, -1, date, 300)).getTime() ? new Date(Astronomy.SearchRiseSet('Sun', obs, -1, date, 300)) : new Date(Astronomy.SearchRiseSet('Sun', obs, -1, yesterday, 300))
  
  
  let planets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']; // add moon last, it's always visable when above horizon; day or night
  
  let planetRiseSetTimes = planets.map(planet => {
    return {
      planet, 
      riseTimes: new Date(Astronomy.SearchRiseSet(planet, obs, +1, yesterday, 300)), 
      setTimes: new Date(Astronomy.SearchRiseSet(planet, obs, -1, date, 300))
    }
  });
  
  function filterByRiseSetTimes (planetData) {
    return planetData.filter(obj => {
      return !(obj.setTimes.getTime() < sunSetTime.getTime() && obj.riseTimes.getTime() > todaysSunRiseTime.getTime());
    })
  }
  
  let filteredPlanetTimes = filterByRiseSetTimes(planetRiseSetTimes);
  filteredPlanetTimes.forEach( ele => {
    if (ele.riseTimes.getTime() > todaysSunRiseTime.getTime()) {
      ele.riseTimes = 'Sunset';
    }
  })
  
  filteredPlanetTimes.forEach( ele => { 
    if (ele.setTimes.getTime() < sunSetTime.getTime()) {
      ele.setTimes = 'Sunrise'
    }
  })
  
  filteredPlanetTimes.push({
    planet: 'Moon', 
    riseTimes: new Date(Astronomy.SearchRiseSet('Moon', obs, +1, yesterday, 300)), 
    setTimes: new Date(Astronomy.SearchRiseSet('Moon', obs, -1, date, 300))
  })


 return filteredPlanetTimes;  

}

module.exports = astroCalc


// filteredPlanetTimes.forEach(ele => {
//   console.log(ele.planet, 'Rise Time: ', ele.riseTimes.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}), 'Set Time: ', ele.setTimes.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}))
// })

// console.log('\n', 'Sunrise time: ', sunRiseTime.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}), 'sunset time: ', sunSetTime.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}), '\n')