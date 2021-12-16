const divLeftPage = document.querySelector(".left-page");
const divRightPage = document.querySelector(".right-page");
const searchButton = document.querySelector("#search-button");
const blankSpace = document.querySelector("#blank-space");

async function fetchData(spell) {
  try {
    const url = `https://www.dnd5eapi.co/api/spells/${spell}`;
    const response = await axios.get(url);
    console.log(response);
    const spellData = response.data;

    showSpellData(spellData)
    damageSpells(spellData)

  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done.");
  }
}


// fetchData();

//Showing the Spell information. Universal Information
function showSpellData(data) {
  const spellName = document.createElement("h3"); //Showing the name of spell
  spellName.innerText = `${data.name}: ${data.school.name} Level ${data.level}`;
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


  let hasDamage = "damage" in data;
  let hasDC = "dc" in data;
  let level = "level" in data;
  let hasHealing = "heal_at_slot_level" in data;
  let higherLevel = "higher_level" in data;
  // let damHigherLever = "damage_at_slot_level" in data;
  // let damageLevelSlots = data.damage.damage_at_slot_level;




  // DAMAGE DEALING SPELLS




  // CANTRIPS
  if (hasDamage === true && level === 0) {
    const damageType = document.createElement("p");   //Showing Damage Type
    damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
    divRightPage.appendChild(damageType);

    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);
  }

  // HEALING SPELLS
  else if (hasDamage === false && hasHealing === true) {
    const healData = document.createElement("p");
    healData.innerText = `Healing: ${data.heal_at_slot_level[2]}`;
    divRightPage.appendChild(healData)

    const damageInfo = document.createElement("p"); //Shows conditions casting at a higher level
    damageInfo.innerText = `${data.higher_level}`
    divRightPage.appendChild(damageInfo);

    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);
  }

  // UTILITY SPELLS
  else if (hasDamage === false && hasHealing === false && hasDC === false && higherLevel === true) {
    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const damageInfo = document.createElement("p"); //Shows conditions casting at a higher level
    damageInfo.innerText = `${data.higher_level}`
    divRightPage.appendChild(damageInfo);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = "Saving Throw:\nThere is no Saving Throw"
    divLeftPage.appendChild(savingThrow);

  }

  else if (hasDamage === false && hasHealing === false && hasDC === true && higherLevel == true) {
    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const damageInfo = document.createElement("p"); //Shows conditions casting at a higher level
    damageInfo.innerText = `${data.higher_level}`
    divRightPage.appendChild(damageInfo);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = `Saving Throw:\n${data.dc.dc_type.name}\nDC Saving throw is calculated by 8 + proficiency bonus + spellcasting ability modifer`
    divLeftPage.appendChild(savingThrow);

  }

  else if (hasDamage === false && hasHealing === false && hasDC === true && higherLevel == false) {
    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = `Saving Throw:\n${data.dc.dc_type.name}\nDC Saving throw is calculated by 8 + proficiency bonus + spellcasting ability modifer`
    divLeftPage.appendChild(savingThrow);



  }

  else if (hasDamage === false && hasHealing === false && hasDC === false && higherLevel === false) {
    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = "Saving Throw:\nThere is no Saving Throw"
    divLeftPage.appendChild(savingThrow);


  }


}


function damageSpells(data) {
  // let damageLevelSlots = data.damage.damage_at_slot_level;
  let hasDamage = "damage" in data;
  let hasDC = "dc" in data;
  let higherLevel = "higher_level" in data;

  if (hasDamage === true && hasDC === true) {
    let damageLevelSlots = data.damage.damage_at_slot_level;

    const damageType = document.createElement("p");   //Showing Damage Type
    damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
    divRightPage.appendChild(damageType);
    ///////////////


    // const damageSlots = document.createElement("p");
    // damageSlots = (data.damage.damage_at_slot_level)
    console.log(damageLevelSlots);
    for (const key in damageLevelSlots) {
      const damageSlots = document.createElement("p");
      damageSlots.innerText = `${key}: ${damageLevelSlots[key]}`
      divRightPage.appendChild(damageSlots);
    };



    // divRightPage.appendChild(damageSlots);
    // damageSlots.forEach((damageSlot, index) => {
    //   damageSlots.innerText = `${damageSlot}: ${damageSlots[damageSlot]}`;
    //   const damageSlots = document.createElement("p");
    //   divRightPage.appendChild(damageSlots)
    // });

    // const damage = document.createElement("p");   //Showing Damage per Spell Slot
    // damage.innerText = `Damage: \n${data.damage.damage_at_slot_level[3]}
    // \n${data.damage.damage_at_slot_level[4]}`;
    // divRightPage.appendChild(damage)

    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const damageInfo = document.createElement("p"); //Shows conditions casting at a higher level
    damageInfo.innerText = `${data.higher_level}`
    divRightPage.appendChild(damageInfo);

    // damage.innerText = `Damage: \n${damageArray.forEach(damage => divRightPage.appendChild(damage))}`

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = `Saving Throw:\n${data.dc.dc_type.name}\nDC Saving throw is calculated by 8 + proficiency bonus + spellcasting ability modifer`
    divLeftPage.appendChild(savingThrow);
  }

  else if (hasDamage === true && hasDC === false && higherLevel === true) {
    const damageType = document.createElement("p");   //Showing Damage Type
    damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
    divRightPage.appendChild(damageType);

    //   const damage = document.createElement("p");   //Showing Damage per Spell Slot
    //   damage.innerText = `Damage: \n${data.damage.damage_at_slot_level[3]}
    // \n${data.damage.damage_at_slot_level[4]}`;
    //   divRightPage.appendChild(damage)

    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const damageInfo = document.createElement("p"); //Shows conditions casting at a higher level
    damageInfo.innerText = `${data.higher_level}`
    divRightPage.appendChild(damageInfo);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = "Saving Throw:\nThere is no Saving Throw"
    divLeftPage.appendChild(savingThrow);
  }

  else if (hasDamage === true && hasDC === false && higherLevel === false) {
    const damageType = document.createElement("p");   //Showing Damage Type
    damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
    divRightPage.appendChild(damageType);

    const description = document.createElement("p");   // Showing Description of Spell
    description.innerText = `${data.desc}`;
    divRightPage.appendChild(description);

    const savingThrow = document.createElement("p") //Showing Saving Throw Info
    savingThrow.innerText = "Saving Throw:\nThere is no Saving Throw"
    divLeftPage.appendChild(savingThrow);
  }

  // else if (hasDamage === true && hasDC === false) {
  //   const damageType = document.createElement("h2");   //Showing Damage Type
  //   damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
  //   divRightPage.appendChild(damageType);

  //   const damage = document.createElement("h2");   //Showing Damage per Spell Slot
  //   damage.innerText = `Damage: \n${data.damage.damage_at_slot_level[3]}
  // \n${data.damage.damage_at_slot_level[4]}`;
  //   divRightPage.appendChild(damage)


  //   const savingThrow = document.createElement("p") //Showing Saving Throw Info
  //   savingThrow.innerText = "There is no Saving Throw"
  //   divLeftPage.appendChild(savingThrow);
  // }
}




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