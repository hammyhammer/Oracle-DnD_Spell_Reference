const divLeftPage = document.querySelector("#left-page");
const divRightPage = document.querySelector("#right-page");
const searchButton = document.querySelector("#search-button");
const blankSpace = document.querySelector("#blank-space");

async function fetchData(spell) {
  const url = `https://www.dnd5eapi.co/api/spells/${spell}`;
  const response = await axios.get(url);
  console.log(response);
  const spellData = response.data;

  showSpellData(spellData)
}


// fetchData();

//Showing the Spell information
function showSpellData(data) {
  const spellName = document.createElement("h2"); //Showing the name of spell
  spellName.innerText = `${data.name}`;
  divLeftPage.appendChild(spellName);

  const castingTime = document.createElement("p");   //Showing Casting time
  castingTime.innerText = `Casting Time: \n${data.casting_time}`;
  divLeftPage.appendChild(castingTime);

  const range = document.createElement("p");   //Showing Range
  range.innerText = `Range: \n${data.range}`;
  divLeftPage.appendChild(range);

  const duration = document.createElement("p");   //Showing Duration
  duration.innerText = `Duration: \n${data.duration}`
  divLeftPage.appendChild(duration);

  const concentration = document.createElement("p");   //Showing Concentration
  concentration.innerText = `Concentration:\n${data.concentration}`;
  divLeftPage.appendChild(concentration);

  const description = document.createElement("p");   // Showing Description of Spell
  description.innerText = `${data.desc}`;
  divRightPage.appendChild(description);

  const damageInfo = document.createElement("h5");
  damageInfo.innerText = `${data.higher_level}`
  divRightPage.appendChild(damageInfo);

  const damageType = document.createElement("h2");   //Showing Damage Type
  damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
  divRightPage.appendChild(damageType);

  // const damage = document.createElement("h2");   //Showing Damage per Spell Slot
  // damage.innerText = `Damage: \n${data.damage.damage_at_slot_level[3]}
  // \n${data.damage.damage_at_slot_level[4]}`;
  // divRightPage.appendChild(damage)
}


// const damage = document.createElement("h2");   //Showing Damage per Spell Slot
// for (data in data.damage_at_slot_level) {
//   if (data.damage_at_slot_level === true) {
//     damage.innerText = `Damage: \n${data.damage.damage_at_slot_level}
//   \n${data.damage.damage_at_slot_level[1]}`;
//     divRightPage.appendChild(damage)
//   }
//   else if (data.heal_at_slot_level === true) {
//     const healData = document.createElement("p");
//     healData = data.heal_at_slot_level[1];
//     divRightPage.appendChild(healData)
//   }

// }




//Showing if Spell Heals or does Damage
// function spellDamageOrHealing(spellData) {
// const spellData = response.data;

// else if (spellData.includes(damage_at_slot_level === true)) {
// const damage = document.createElement("h2");   //Showing Damage per Spell Slot
// damage.innerText = `Damage: \n${data.damage.damage_at_slot_level[3]}
// \n${data.damage.damage_at_slot_level[4]}`;
// divRightPage.appendChild(damage)

//     const damageType = document.createElement("h2");   //Showing Damage Type
//     damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
//     divRightPage.appendChild(damageType);

//   }
//   fetchData();
// }







//Showing Saving Throw Info
// const savingThrow = document.createElement("p")
// savingThrow.innerText = `Saving Throw:\n${data.dc.dc_type.name}`
// divLeftPage.appendChild(savingThrow);
// else {
//   const savingThrow = document.createElement("p");
//   savingThrow.innerText = "There is no Saving Throw";
//   divLeftPage.appendChild(savingThrow);
// };





// Search functionality
searchButton.addEventListener("click", handleInput);

function handleInput(event) {
  event.preventDefault();
  let inputValue = blankSpace.value;
  blankSpace.value = "";
  fetchData(inputValue);
  removeSpell()
}

function removeSpell() {
  divRightPage.innerHTML = "";
  divLeftPage.innerHTML = "";
}
