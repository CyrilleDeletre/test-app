let currentLanguage = "fr";

// Fonction pour obtenir la traduction en fonction de la langue actuelle
function translate(obj) {
  return obj[currentLanguage] || obj.en;
}

fetch('factions.json')
  .then(response => response.json())
  .then(data => {
    let overlord = data.FACTIONS.NECRONS.UNITS.OVERLORD_AMONHOTEKH;
    console.log(translate(overlord.NAME))
    let statsOverlord = overlord.PROFILES;

    // Itérer sur les clés de l'objet "statsOverlord"
    Object.keys(statsOverlord).forEach(key => {

      
      let stat = statsOverlord[key]
      console.log(translate(stat), stat.value)
    });
  })
  .catch(error => console.error('Erreur lors du fetch du fichier JSON:', error));