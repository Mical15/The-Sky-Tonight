const express = require('express')
const bodyParser = require('body-parser');
const astroCalc = require('./astroCalc')
const cors = require('cors');
const app = express()
const port = 3001


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }));



app.get('/api/getPlanetTimes', (req, res) => {
  let result = astroCalc()
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})