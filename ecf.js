let factionsSelect = document.querySelector('#factionSelect');
let factionDetailsDiv = document.querySelector('#factionDetails');
let factionForm = document.querySelector('#factionForm');
let fetchedData;

fetch('testgpt.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur HTTP, statut : ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    fetchedData = data;

    data.factions.forEach(faction => {
      let option = document.createElement('option');
      option.value = faction.name;
      option.textContent = faction.name;
      factionsSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON :', error);
  });



function showFactionDetails() {
  // Récupérer la faction sélectionnée
  let selectedFaction = factionsSelect.value;

  // Trouver les détails de la faction dans les données fetchées
  let selectedFactionDetails = fetchedData.factions.find(faction => faction.name === selectedFaction);

  // Afficher les détails de la faction
  if (selectedFactionDetails) {
    factionDetailsDiv.textContent = `Description de la faction ${selectedFactionDetails.name}: ${selectedFactionDetails.description}`;
    // Ajoutez d'autres informations de la faction au besoin
  } else {
    factionDetailsDiv.textContent = 'Aucune information disponible pour cette faction.';
  }
}

function submitForm(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
      showFactionDetails();
  }