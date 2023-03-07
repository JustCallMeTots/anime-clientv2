import { clientCredentials } from '../client';

const getAnime = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/anime`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleAnime = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/anime/${id}`)
    .then((response) => (response.json()))
    .then(resolve)
    .catch(reject);
});

const createAnime = (anime) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/anime`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(anime),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

const updateAnime = (anime, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/anime/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(anime),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

const deleteAnime = (anime) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/anime/${anime}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

export {
  getAnime,
  getSingleAnime,
  createAnime,
  updateAnime,
  deleteAnime,
};
