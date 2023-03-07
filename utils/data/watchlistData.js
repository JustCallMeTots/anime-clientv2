import { clientCredentials } from '../client';

const getWatchlist = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watchlist`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createWatchlist = (watchlist) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watchlist`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(watchlist),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

const updateWatchlist = (watchlist, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watchlist/${id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(watchlist),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

const deleteWatchlist = (watchlist) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/watchlist/${watchlist}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

export {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
