const divLeftPage = document.querySelector(".left-page");
const divRightPage = document.querySelector(".right-page");
const searchButton = document.querySelector("#search-button");
const blankSpace = document.querySelector("#blank-space");

async function fetchData(spell) {
  const url = `https://www.dnd5eapi.co/api/spells/${spell}`;
  const response = await axios.get(url);
  // console.log(response);
  const spellData = response.data;
  console.log(spellData)
  spellData.forEach(spellObj => {
    showSpellData(spellObj);
  })
}
// const gettingSpellData = response.data.data.results
// fetchData();
console.log


//Showing the Spell information
//Showing the name of spell
function showSpellData(data) {
  const spellName = document.createElement("p");
  spellName.innerText = `${data.name}`;
  divLeftPage.appendChild(spellName);

  //Showing Casting time
  const castingTime = document.createElement("p");
  castingTime.innerText = `Casting Time: ${data.casting_time}`;
  divLeftPage.appendChild(castingTime);

  //Showing Range
  const range = document.createElement("p");
  range.innerText = `Range:${data.range}`;
  divLeftPage.appendChild(range);

  //Showing Duration
  const duration = document.createElement("p");
  duration.innerText = `Duration:${data.duration}`
  divLeftPage.appendChild(duration);

  //Showing Concentration
  const concentration = document.createElement("p");
  concentration.innerText = `Concentration:${data.concentration}`;
  divLeftPage.appendChild(concentration);

  //Showing Saving Throw Info
  const savingThrow = document.createElement("p")
  savingThrow.innerText = `Saving Throw: ${data.dc.dc_type.name}`
  divLeftPage.appendChild(savingThrow);

  //Showing Damage Type
  const damageType = document.createElement("p");
  damage.innerText = `Damage Type:${data.damage.damage_type}`
  divRightPage.appendChild(damageType);

  //Showing Damage per Spell Slot
  const damage = document.createElement("p");
  damage.innerText = `Damage: ${data.damage.damage_at_slot_level}`;
  divRightPage.appendChild(damage)
}

// Search functionality
searchButton.addEventListener("click", handleInput);

function handleInput(event) {
  event.preventDefault();
  let inputValue = blankSpace.ariaValueMax;
  blankSpace.value = "";
  fetchData(inputValue)
  // removeSpell()
}

// function removeSpell() {
//   divRightPage.innerHTML = "";
//   divLeftPage.innerHTML = "";
// }