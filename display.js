

// fetch('factions.json')
//   .then(response => response.json())
//   .then(data => {
//     let overlord = data.FACTIONS.NECRONS.UNITS.OVERLORD_AMONHOTEKH;
//     console.log(translate(overlord.NAME))
//     let statsOverlord = overlord.PROFILES;

//     // Itérer sur les clés de l'objet "statsOverlord"
//     Object.keys(statsOverlord).forEach(key => {


//       let stat = statsOverlord[key]
//       console.log(translate(stat), stat.value)
//     });
//   })
//   .catch(error => console.error('Erreur lors du fetch du fichier JSON:', error));


// console.log("Début du script");

// fetch('factions.json')
//   .then(response => response.json())
//   .then(data => {
//     // Trouver le "Overlord Amonhotekh"
//     const overlordData = data.find("OVERLORD_AMONHOTEKH");

//      createElementHtml('p', document.body, 'datasheet', 'datasheet', translate(overlordData.name))
//     // console.log(`Nom du personnage: ${overlordData.name}`);
//     // console.log(`Mots-clés: ${overlordData.keywords.join(', ')}`);

//     // // Afficher les armes du "Overlord Amonhotekh" avec leurs statistiques et règles
//     // overlordData.weapons.forEach(weapon => {
//     //   console.log(`WEAPONS : ${weapon.name}`);
//     //   console.log(`  - RANGE: ${weapon.stats.range}`);
//     //   console.log(`  - A: ${weapon.stats.a}`);
//     //   console.log(`  - BS: ${weapon.stats.bs}`);
//     //   console.log(`  - S: ${weapon.stats.s}`);
//     //   console.log(`  - AP: ${weapon.stats.ap}`);
//     //   console.log(`  - D: ${weapon.stats.d}`);
//     //   console.log(`  - [${weapon.rules.map(rule => rule).join(', ')}]: ${weapon.rules.map(rule => data.generalRules[rule].description).join(', ')}`);


//     //   console.log('---');
//     // });
//   })
//   .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));




function createElementHtml(type, parent, id, className, contenu, event) {
  let elementHtml = document.getElementById(id);

  if (!elementHtml) {
    elementHtml = document.createElement(type);
    parent.appendChild(elementHtml);
    elementHtml.id = id;
    elementHtml.className = className;

    if (type === 'button') {
      elementHtml.addEventListener('click', event);
    }
  }

  if (type === 'p' || type === 'h2') {
    elementHtml.textContent = contenu;
  }

  if (type === 'img') {
    elementHtml.src = contenu;
  }

  if (type === 'button') {
    elementHtml.textContent = contenu;
  }

  return elementHtml;
}

createElementHtml('button', document.body, "toggleButton", "translate", "Toggle Language", toggleLanguage);
createElementHtml('div', document.body, "combatPatrol", "combat-patrol");




const combatPatrol = document.getElementById("combatPatrol");

function updateContent() {
// Update the faction name using translate function
const factionNameElement = createElementHtml('h2', combatPatrol, 'necrons', 'necrons translateable');
factionNameElement.textContent = translate(necrons.FACTION_NAME);
}

let userLanguage = navigator.language;
let currentLanguage = userLanguage.startsWith("fr") ? "fr" : "en";

function translate(language) {
  return language[currentLanguage] || language.en;
}



// Toggle language function
function toggleLanguage() {
  // Inverser la langue actuelle
  currentLanguage = currentLanguage.startsWith("fr") ? "en" : "fr";
  updateContent(currentLanguage);
}

// Fetch les data

// Créer un form
// faire un for each pour Créer un champ input select par FACTIONS
// fetch dans data les FACTIONS pour remplir chaque champs input
// Crée un button submit avec comme value : "Choisir cet armée"
// Créer un évenement au clique de submit =>
//    afficher les objets contenu dans chaque faction

let fetchedData;

fetch('factions.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur HTTP, statut :' + response.status);
    }
    return response.json();
  })
  .then(data => {
    fetchedData = data;
    console.log(data)
    return fetchedData;
  })
  .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

  console.log(fetchedData.FACTIONS.NECRONS)