async function getCovid19TestData(){
  const data = await fetch('/api/covid19');
  return await data.json();
}

export default {
  getCovid19TestData
}