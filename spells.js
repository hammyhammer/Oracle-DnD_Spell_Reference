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
fetchData("fireball");


function showSpellData() {
  const spellName = document.createElement("p");
  spellName.innerText = ""
}
