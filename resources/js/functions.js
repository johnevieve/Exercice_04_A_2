import axios from "axios";

const query = `query Query($filtre: String) {
  feed(filtre: $filtre) {
    id
    url
    description
  }
}`;

function rechercherProduits() {
  console.log('patate');
  axios.post('http://localhost:4000/graphql', {
    query: query,
    variables: { filtre: 'batman' }
  }).then(response => {
    console.log(response.data);
  })
    .catch(error => {
      console.error(error);
    });
}

export { rechercherProduits };