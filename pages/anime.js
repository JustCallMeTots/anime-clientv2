import React, { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { useAuth } from '../utils/context/authContext';
import { getAnime } from '../utils/data/animeData';

function Anime() {
  const [anime, setAnime] = useState([]);
  const { user, updateUser } = useAuth();

  useEffect(() => {
    getAnime().then((data) => setAnime(data));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {anime?.map((show) => (
        <AnimeCard user={user} updateUser={updateUser} key={show.id} animeObj={show} onUpdate={getAnime} />
      ))}
    </div>
  );
}

export default Anime;
