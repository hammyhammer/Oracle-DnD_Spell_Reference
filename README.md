# Project Overview

## Project Name

Oracle: 
Dungeons and Dragons Quick Spell Reference 

## Project Description

Allows DM and players to quickly reference and find spells. Displays damage(by spell slot), damage type, if it needs concentration, and casting time. The ambition is to make combat go faster and more smoothly.

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality. -->

## API and Data Sample
[Gives the list of spells](https://www.dnd5eapi.co/api/spells)

```
{
    "count": 319,
    "results": [
        {
            "index": "acid-arrow",
            "name": "Acid Arrow",
            "url": "/api/spells/acid-arrow"
        },
        {
            "index": "acid-splash",
            "name": "Acid Splash",
            "url": "/api/spells/acid-splash"
        },
        {
            "index": "aid",
            "name": "Aid",
            "url": "/api/spells/aid"
        },
        {
            "index": "alarm",
            "name": "Alarm",
            "url": "/api/spells/alarm"
        },
        {
            "index": "alter-self",
            "name": "Alter Self",
            "url": "/api/spells/alter-self"
        },
```

[Gives a specific spell](https://www.dnd5eapi.co/api/spells/acid-arrow)

``` 
{
    "index": "acid-arrow",
    "name": "Acid Arrow",
    "desc": [
        "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
    ],
    "higher_level": [
        "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
    ],
    "range": "90 feet",
    "components": [
        "V",
        "S",
        "M"
    ],
    "material": "Powdered rhubarb leaf and an adder's stomach.",
    "ritual": false,
    "duration": "Instantaneous",
    "concentration": false,
    "casting_time": "1 action",
    "level": 2,
    "attack_type": "ranged",
    "damage": {
        "damage_type": {
            "index": "acid",
            "name": "Acid",
            "url": "/api/damage-types/acid"
        },
        "damage_at_slot_level": {
            "2": "4d4",
            "3": "5d4",
            "4": "6d4",
            "5": "7d4",
            "6": "8d4",
            "7": "9d4",
            "8": "10d4",
            "9": "11d4"
        }
    },
    "school": {
        "index": "evocation",
        "name": "Evocation",
        "url": "/api/magic-schools/evocation"
    },
    "classes": [
        {
            "index": "wizard",
            "name": "Wizard",
            "url": "/api/classes/wizard"
        }
    ],
    "subclasses": [
        {
            "index": "lore",
            "name": "Lore",
            "url": "/api/subclasses/lore"
        },
        {
            "index": "land",
            "name": "Land",
            "url": "/api/subclasses/land"
        }
    ],
    "url": "/api/spells/acid-arrow"
}
```


<!-- Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need -->

## Wireframes
[Browser Display](https://whimsical.com/dnd-spell-referencer-D3dfYeTTvjpGzoz7B6wdh7)

[Mobile Display](https://whimsical.com/mobile-spell-reference-Aey8ZVM2Y3tcsuodFf2Dqc)
<!-- Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe. -->

<!-- ### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP 
<!-- *These are examples only. Replace with your own MVP features.* -->

- Find and use external api  
- Allow user to type in a spell or cantrip. Press button to search
- User recieves information regarding spell/cantrip
- Render the data on the page that can be read and interrepted easily. 
- Allow a reset button to search different spells
- Make it compartible on desktop and mobile.
- Commit daily

#### PostMVP  
<!-- *These are examples only. Replace with your own Post-MVP features.* -->

- Add second API. Adding a classes option.
- Use local storage to save user favorites
- Create a button to "flip" the page. (Animation)
- Add more style to the page. 

## Project Schedule
<!-- 
This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`. -->

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Dec 13| Project Approval | Complete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 14| Pseudocode / actual code | Complete
|Dec 15| Initial Clickable Model  | Complete
|Dec 16| MVP | Complete
|Dec 17| Presentations | Incomplete

## Priority Matrix
[Priority Matrix Graph](https://whimsical.com/priority-matrix-6kzFUAKyDBqQe9NXnvMpi3")
<!-- Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes -->

## Timeframes

<!-- Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly. -->

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|HTML, CSS, JS setup|M| 0.5hr|0.5|
|Setting API|M| 2.5hr|1.5hr|
|User Input Functionality| H| 2hrs|4hrs|
|Creating a remove function|H|3hrs|1.5hrs|
|Positioning data properly|H|3hrs|4hrs|
|Creating a reset button|H|2.5hrs|1.5
|Creating searching functionality|H|3hrs|2hrs|
|Styling CSS|H|3.5hrs|4hrs|
|Add media query|H|3hrs|2.5hrs|
|Fetching and utilizing API data|H|3hrs|4hrs|
|Creating a header| H| 2hrs|1.5hrs|
|Creating a footer|H| 2hrs|1.5hrs|
|Creating functionality for damage|H|3hrs|4hrs|
|Creating functionality for healing|H|3hrs|4hrs|
|Creating functionality for utility|H|3hrs|2hrs|
|Adding local storage|L| 3hrs|
| Total | NA| 37hrs| NA | NA |


## Code Snippet

 let hasDamage = "damage" in data;
  let hasDC = "dc" in data;
  let higherLevel = "higher_level" in data;

  if (hasDamage === true && hasDC === true) {
    let damageLevelSlots = data.damage.damage_at_slot_level;

    const damageType = document.createElement("p");   //Showing Damage Type
    damageType.innerText = `Damage Type: \n${data.damage.damage_type.name}`
    divRightPage.appendChild(damageType);

    for (const key in damageLevelSlots) { //Showing Damage per Spell Slot
      const damageSlots = document.createElement("p");
      damageSlots.innerText = `Level ${key}: ${damageLevelSlots[key]}`
      divRightPage.appendChild(damageSlots);
    };

Above I was about to individually select and display the varying spell slot levels for a spell. 

## Change Log
Originally I was planning on just doing damage related spells. But thought I ought to add healing and utility spells to make my app more versatile.
I added the healing, utility and damage spells to my timeframe 