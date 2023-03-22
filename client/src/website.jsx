import React, { useEffect, useState } from "react";
import axios from "axios";
import Planets from "./components/planets.jsx";
import moment from "moment";
import SunCalc from "suncalc";
// import { MakeObserver, SearchRiseSet } from "./astronomy";

export default function Website(props) {
  const [data, setData] = useState([]);

  function getData() {
    axios.get('/api/getPlanetTimes')
    .then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {/* {console.log(data)} */}
      {data.length > 0 ? data.map((value, index) => {
        return (
          <div style={{float: 'left', padding: '20px'}} key={index}> <h3 style={{textAlign: 'center'}}>{value.name}</h3>
            <li>Object: {" " + value.planet}</li>
            <li>Rise Time: {" " + value.riseTimes}</li>
            <li>Set Time: {" " + value.setTimes}</li>
          </div>
          )
        }) : <h1>Loading...</h1>
      }
    </div>
  )
}



//old code

// Initalize Variables
  // const now = new Date()
  // let after = new Date(now)
  // after.setDate(after.getDate() + 1)

  // const today = SunCalc.getTimes(new Date(), 37.5355, -122.3355);
  // const tommrow = SunCalc.getTimes(after, 37.5355, -122.3355);

  // const sunRiseStr = tommrow.sunrise // .getHours() + ':' + times.sunrise.getMinutes();     Suncalc seems to be a tad more accurate +/- 1min
  // const sunSetStr = today.sunset // .getHours() + ':' + times.sunset.getMinutes();

  // const startDay = new Date(sunSetStr);
  // const endDay = new Date(sunRiseStr);

  // const startDate = moment(startDay);
  // const endDate = moment(endDay);
  // const datesBetween = [];

  // let startingMoment = startDate;

  // Create while loop to increment time and create a "times array"
  // while(startingMoment <= endDate) {
  //     datesBetween.push(startingMoment.clone());// clone to add new object
  //     startingMoment.add(1, 'm');
  // }

  // // Format time
  // const timesArray = datesBetween.map(({_i, _d}) => {
  //   return {
  //     d: moment(_d).format()
  //   }
  // })

  // // Remove Data that's not needed.
  // let formattedTimeArray = [];
  // timesArray.forEach(ele => {
  //   formattedTimeArray.push(ele["d"]);
  // })

  // const location = {
  //   lat: 46.2046587,
  //   lon: 6.2139521
  // };
  
  // const toi = createTimeOfInterest.fromCurrentTime();
  // const moon = createMoon(toi);
  // moon.getSet(location).then((x) => console.log(x.getDate()));
  // // console.log(moon.getRise());
  
  // const obs = MakeObserver(location.lat, location.lon, 0);
  // const date = new Date();
  // console.log(SearchRiseSet("Moon", obs, -1, date, 300));
// import { getSunrise, getSunset } from 'sunrise-sunset-js';

// class Website extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           data: [],
//           testing: []
//         }

//     }

//     // FUTURE PROJECT: Remove "middleman API" -> Create new functions to accurately determine if Mercury/Venus is visable -> Both are tricky, but can be calculated with OG API.
//     getTimes() { // (**IN** Daylight Savings) CHECK AGAIN IN NOV 6th!!!

      // // Initalize Variables
      // const now = new Date()
      // let after = new Date(now)
      // after.setDate(after.getDate() + 1)

      // const today = SunCalc.getTimes(new Date(), 37.5355, -122.3355);
      // const tommrow = SunCalc.getTimes(after, 37.5355, -122.3355);

      // const sunRiseStr = tommrow.sunrise // .getHours() + ':' + times.sunrise.getMinutes();     Suncalc seems to be a tad more accurate +/- 1min
      // const sunSetStr = today.sunset // .getHours() + ':' + times.sunset.getMinutes();

      // const startDay = new Date(sunSetStr);
      // const endDay = new Date(sunRiseStr);

      // const startDate = moment(startDay);
      // const endDate = moment(endDay);
      // const datesBetween = [];

      // let startingMoment = startDate;

      // // Create while loop to increment time and create a "times array"
      // while(startingMoment <= endDate) {
      //     datesBetween.push(startingMoment.clone());// clone to add new object
      //     startingMoment.add(1, 'm');
      // }

      // // Format time
      // const timesArray = datesBetween.map(({_i, _d}) => {
      //   return {
      //     d: moment(_d).format()
      //   }
      // })

      // // Remove Data that's not needed.
      // let formattedTimeArray = [];
      // timesArray.forEach(ele => {
      //   formattedTimeArray.push(ele["d"]);
      // })

      // const urlString = 'https://api.visibleplanets.dev/v3?latitude=37.5355&longitude=-122.3355&time='
      // let urlArray = [];

      // // Create array of request URLs
      // formattedTimeArray.forEach(ele => {
      //  urlArray.push(urlString + ele);
      // })

//       const batchDataAndRecieve = async (inputArray) => {
//         // lets create some helper functions
//         const isLonger = (responseData) => {

//         }

//         const isShorter = () => {

//         }

//         const urlArrayLength = inputArray.length;
//         // Create Async Function to be used in Batch
//         const getDataByUrl = async (url) => {
//           axios.get(url)
//           .then((response) => {
//             console.log(response.data)
//             let astroObjects = [];
//             let short = response.data.data;
//             // console.log(short)
//             if (this.state.testing.length === 0) {
//               for (let i = 0; i < short.length; i++) {
//                 if (short[0].aboveHorizon == true) {
//                   let tempObj = {
//                     name: short[i].name,
//                     constellation: short[i].constellation,
//                     ra: short[i].rightAscension.hours + 'h ' + short[i].rightAscension.minutes + 'm ' + short[i].rightAscension.seconds + 's',
//                     dec: short[i].declination.degrees + '\u00B0 ' + short[i].declination.arcminutes + `' ` + short[i].declination.arcseconds + `"`,
//                     riseTime: response.data.links.self.substring(87).slice(0, -6),
//                     setTime: ''
//                   }
//                   astroObjects.push(tempObj)
//                 }
//                } if (short[0].aboveHorizon == false) {

//               }
//               this.setState({
//                 testing: astroObjects
//               })
//             } else {
//               if (response.data.data.length != this.state.testing.length) {
//                 if (response.data.data.length > this.state.testing.length) {
//                   isLonger('Longer ' + response.data.data);
//                 } else {
//                   isShorter('Shorter ' + response.data.data);
//                 }
//               }
//             }

//             return response
//           })
//           .catch((error) => {
//             console.log(error)
//           })
//         }

//         // Batch Axios Requests
//         for (let i = 0; i < urlArrayLength; i +=100) {
//           const requestArray = inputArray.slice(i, i + 100).map((url) => {
//             return getDataByUrl(url)
//             .catch((error) => {
//               console.log(error)
//             })
//           })
//         }

//         // Send Requests
//         // await Promise.all(requestArray)
//         // .then((response) => {
//         //   // console.log(response)
//         //   return response
//         // })
//         // .catch((error) => {
//         //   console.log(error);
//         // })

//                 // TEMP SPOT
//         // if (this.state.testing[0].length != response.data.data.length) {
//         //   let planetsArray = [];
//         //   let setTime = '';
//         //   for(let i = 0; i < response.data.data.length; i++) {
//         //     planetsArray.push(response.data.data[i].name);
//         //   }
//         //   this.state.testing.forEach((planet) => {
//         //     if (!planetsArray(includes(planet))) {
//         //       for (let i = 0; i < this.state.testing.length; i++) {

//         //       }

//         //     }
//         //   })

//         // }

//       }

//       batchDataAndRecieve(urlArray)

//       // console.log(urlArray)

//       // BASIC SETUP WITH 1 TIME AT 8PM
//       // let m = moment();
//       // let s = m.format();  // ISO format is the default; no parameters needed
//       // return s;
//     }

//     getData() {
//       this.getTimes();
//       // TEMP TO KEEP APP RUNNING
//       const m = moment();
//       const s = m.format();  // ISO format is the default; no parameters needed
//       // let currentTime = this.getTimes()
//       const currentTime = s;
//       axios.get('https://api.visibleplanets.dev/v3?', {
//         params: {
//           latitude: "37.5355",
//           longitude: "-122.3355",
//           time: currentTime,
//           aboveHorizon: 'false'
//         }
//       })
//         .then((response) => {
//           let astroObjects = [];
//           let short = response.data.data;
//           console.log(response.data)
//           // console.log(short)
//           for (let i = 0; i < short.length; i++) {
//             if (short[i].aboveHorizon = 'true') {
//               let tempObj = {
//                 name: short[i].name,
//                 constellation: short[i].constellation,
//                 ra: short[i].rightAscension.hours + 'h ' + short[i].rightAscension.minutes + 'm ' + short[i].rightAscension.seconds + 's',
//                 dec: short[i].declination.degrees + '\u00B0 ' + short[i].declination.arcminutes + `' ` + short[i].declination.arcseconds + `"`,
//                 riseTime: currentTime,
//                 SetTime: ''
//               }
//               astroObjects.push(tempObj)
//             }
//           }
//           this.setState({
//             data: astroObjects
//           }, () => {
//             console.log(this.state);
//           })
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//     }

//     componentDidMount() {
//       this.getData();
//       // this.getTimes();
//       // this.getDataByUrl()
//     }

//     render() {
//       return (
//       <div>

//         <h1>What's in the Sky Tonight?</h1>
//         <div>

//           <Planets data={this.state.data} />

          // {this.state.data.length > 0 &&
          //   <div style={{position: 'relative'}}>
          //     {this.state.data.map((value, index) => {
          //        return (
          //        <div style={{float: 'left', padding: '20px'}} key={index}> <h3 style={{textAlign: 'center'}}>{value.name}</h3>
          //           <li> Constellation: {" " + value.constellation}</li>
          //           <li>Right Ascension: {" " + value.ra}</li>
          //           <li>Declination: {" " + value.dec}</li>
          //           <li>Rise Time: {" " + value.riseTime}</li>
          //           <li>Set Time: {" " + value.setTime}</li>
          //        </div> )
          //        })}
          //    </div>
//           }

//         </div>

//       </div>
//       )
//     }
//   }

// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);
// const container = document.getElementById("app");
// // const root = ReactDOM.createRoot(
// //   document.getElementById('app')
// // );
// // root.render(website());
// render(website(), container);
// // ReactDOM.render(<Website />, document.getElementById('app'));
