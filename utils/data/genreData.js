import { clientCredentials } from '../client';

const getGenre = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/genre`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getGenre;
