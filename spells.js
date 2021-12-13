const divLeftPage = document.querySelector(".left-page");
const divRightPage = document.querySelector(".right-page");


async function fetchData(spell) {
  const url = `https://www.dnd5eapi.co/api/spells/${spell}`;
  const response = await axios.get(url);
  // console.log(response);
  const spellData = response.data;
  console.log(spellData)
  // spellData.forEach(spellObj => {
  //   showSpellData(spellObj);
  // })
}
// const gettingSpellData = response.data.data.results
fetchData("fireball");

//Showing the Spell information

//Showing the name of spell
function showSpellData(data) {
  const spellName = document.createElement("p");
  spellName.innerText = `${data.name}`;
  divLeftPage.appendChild(spellName);
}

//Showing Casting time

//Showinng Range

//Showing Duration

//Showing Concentration

//Showing Saving Throw Info

//Showing Damage per Spell Slot