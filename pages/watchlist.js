import React, { useEffect, useState } from 'react';
import WatchlistCard from '../components/WatchlistCard';
import { getWatchlist } from '../utils/data/watchlistData';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    getWatchlist().then((data) => setWatchlist(data));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {watchlist?.map((show) => (
        <WatchlistCard key={show.id} animeObj={show} onUpdate={setWatchlist} />
      ))}
    </div>
  );
}

export default Watchlist;
