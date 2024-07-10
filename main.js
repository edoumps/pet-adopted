// JAVASCRIPT FOR OUR PET ADOPT WEBSITE
// New comment after making changes in the temp branch

// TEMPLATE
const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

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

// PETS AREA

async function petsArea() {
  const petDataPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petData = await petDataPromise.json();
  // Test to see if the data is fetching
  // console.log(petData);
  petData.forEach((pet) => {
    console.log(pet.name);
    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").textContent = pet.name;

    wrapper.appendChild(clone);
  });
  document.querySelector(".list-of-pets").appendChild(wrapper);
}

petsArea();
