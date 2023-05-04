import axios from 'axios';

// Récupérer l'élément span par son ID
const spanElement = document.getElementById('PATATE');

// Ajouter du texte à l'élément span
spanElement.innerHTML = 'Nouveau texte à ajouter';


axios.get('http://localhost:3000/api/personnages').
then(response => console.log(response)).
catch(error => console.error(error));