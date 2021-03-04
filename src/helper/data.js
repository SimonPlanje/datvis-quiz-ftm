import * as d3 from 'd3';

async function fetchData(setTotData) {
  const fbData =
    'https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv';
  const totaalData =
    'https://docs.google.com/spreadsheets/d/1JQv_AlrbjDIEI1FjwQs8GBT5_HncMtMGbAFrWKhm-1Q/export?format=csv';

  async function getData(name) {
    const data = await d3.csv(name);
    return data;
  }

  async function getAllData() {
    const eventData = await getData(fbData);
    const totData = await getData(totaalData);

    setTotData(totData);

    return eventData;
  }

  return getAllData().catch((err) => {
    console.log(err);
    console.log('handled!');
  });
}

export default fetchData;
