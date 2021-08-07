const axios = require('axios').default;

const URL = `ttps://api.covidactnow.org/v2/state/CA.timeseries.json?apiKey=${process.env.COVID19_KEY}`;

async function getCovid19TestData(req,res){
  axios.get(URL)
    .then(function({data}){
      //console.log(data);
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

module.exports = {
  getCovid19TestData
}