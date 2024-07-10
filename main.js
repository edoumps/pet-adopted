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
    clone.querySelector(".pet-description").textContent = pet.description;
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear);

    if (!pet.photo) pet.photo = "pets_img/fallback.jpg";

    clone.querySelector(".pet-card-photo img").src = pet.photo;
    clone.querySelector(
      ".pet-card-photo img"
    ).alt = `A ${pet.species} named ${pet.name}`;

    wrapper.appendChild(clone);
  });
  document.querySelector(".list-of-pets").appendChild(wrapper);
}

petsArea();

function createAgeText(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age == 1) return "1 year old";
  if (age == 0) return "Less than a year old";

  return `${age} years old`;
}
