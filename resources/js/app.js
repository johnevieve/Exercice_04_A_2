import axios from 'axios';

axios.get('http://localhost:3000/api/').
then(response => console.log(response)).
catch(error => console.error(error));
