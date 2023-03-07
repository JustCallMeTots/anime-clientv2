import { clientCredentials } from '../client';

const getWatcher = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createWatcher = (genre) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(genre),
  })
    .then(resolve)
    .then(reject);
});

export default { getWatcher, createWatcher };
