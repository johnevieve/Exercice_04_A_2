import axios from "axios";

const query = `query Query($filtre: String) {
  feed(filtre: $filtre) {
    id
    url
    description
  }
}`;

function rechercherProduits(filtre) {
  axios.post('http://localhost:4000/graphql', {
    query: query,
    variables: { filtre: filtre }
  }).then(response => {
    const db = response.data.data.feed;
    let afficherProduit;
    
    if (db.length == 0) {
      afficherProduit = `<p>Aucun produit trouvé...</p>`;
    }
    else {
      const tableBody = db.map(produit => {
        return `
        <tr>
          <td>${produit.id}</td>
          <td>${produit.url}</td>
          <td>${produit.description}</td>
        </tr>
        `;
      }).join('');

      afficherProduit = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${tableBody}
          </tbody>
        </table>
      `;
    }

    document.getElementById('tableProduits').innerHTML = afficherProduit;
  }).
  catch(error => console.error(error));
}

export { rechercherProduits };