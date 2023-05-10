import axios from 'axios';
import { rechercherProduits } from './functions.js';

window.rechercherProduits = rechercherProduits;

axios.get('http://localhost:3000/api/personnages').
  then(response => {
    const db = response.data.db;

    const tableBody = db.map(personnage => {
      return `
        <tr onclick='window.rechercherProduits("${personnage.name}")'>
          <td>${personnage.id}</td>
          <td>${personnage.name}</td>
          <td>${personnage.realname}</td>
        </tr>
      `;
    }).join('');
    
    const table = `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Nom réel</th>
          </tr>
        </thead>
        <tbody>
          ${tableBody}
        </tbody>
      </table>
    `;

    document.getElementById('tablePersonnages').innerHTML = table;

  }).
  catch(error => console.error(error));

