// import { clientCredentials } from '../client';

// const getWatchlist = () => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist`)
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// const createWatchlist = (watchlist) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(watchlist),
//   })
//     .then((response) => resolve(response))
//     .catch(reject);
// });

// const updateWatchlist = (watchlist, id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist/${id}`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(watchlist),
//   })
//     .then((response) => resolve(response))
//     .catch(reject);
// });

// const deleteWatchlist = (watchlist) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist/${watchlist}`, {
//     method: 'DELETE',
//   })
//     .then(resolve)
//     .catch(reject);
// });

// const watchShow = (id, anime) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist/${id}/watch`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(anime),
//   })
//     .then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

// const dropShow = (id, animeId) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/watchlist/${id}/drop`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ animeId }),
//   })
//     .then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

// export {
//   getWatchlist,
//   createWatchlist,
//   updateWatchlist,
//   deleteWatchlist,
//   watchShow,
//   dropShow,
// };
