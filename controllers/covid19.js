const axios = require('axios').default;

const URL = `https://api.covidactnow.org/v2/country/US.timeseries.json?apiKey=${process.env.COVID19_KEY}`;

async function getCovid19USAData(req,res){
  axios.get(URL)
    .then(function({data}){
      //console.log(data);
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

module.exports = {
  getCovid19USAData
}