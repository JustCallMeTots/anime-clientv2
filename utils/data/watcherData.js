import { clientCredentials } from '../client';

const getWatcher = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleWatcher = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher/${id}`)
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

const watchShow = (id, anime) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher/${id}/watch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(anime),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const dropShow = (id, animeId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watcher/${id}/drop`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(animeId),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getWatcher,
  getSingleWatcher,
  createWatcher,
  watchShow,
  dropShow,
};
