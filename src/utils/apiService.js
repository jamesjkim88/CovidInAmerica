async function getCovid19USAData(){
  const data = await fetch('/api/covid19');
  return await data.json();
}

export default {
  getCovid19USAData
}