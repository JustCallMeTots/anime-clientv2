import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AnimeCard from '../components/AnimeCard';
import { useAuth } from '../utils/context/authContext';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const { user, updateUser } = useAuth();

  const getData = () => {
    setWatchlist(user?.myAnime);
    console.warn(user);
  };

  useEffect(() => {
    getData();
  }, [user]);

  return (
    <div>
      <div className="btn-group">
        <Button>Monday</Button>
        <Button>Tuesday</Button>
        <Button>Wednesday</Button>
        <Button>Thursday</Button>
        <Button>Friday</Button>
        <Button>Saturday</Button>
        <Button>Sunday</Button>
      </div>
      <div className="d-flex flex-wrap">
        {watchlist?.map((show) => (
          <AnimeCard user={user} updateUser={updateUser} key={show.id} animeObj={show.anime} onUpdate={setWatchlist} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
