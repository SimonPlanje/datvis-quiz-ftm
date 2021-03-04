import * as d3 from 'd3';

async function fetchData(link) {
  async function getData(name) {
    const data = await d3.csv(name);
    return data;
  }

  async function getAllData() {
    const eventData = await getData(link);

    return eventData;
  }

  return getAllData().catch((err) => {
    console.log(err);
    console.log('handled!');
  });
}

export default fetchData;
