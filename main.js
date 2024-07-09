// JAVASCRIPT FOR OUR PET ADOPT WEBSITE
// New comment after making changes in the temp branch

async function start() {
  const weatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const weatherData = await weatherPromise.json();
  const miamiTemp = weatherData.properties.periods[0].temperature;

  document.querySelector("#tempOutput").textContent = miamiTemp;
  // console.log(miamiTemp);
}

start();
