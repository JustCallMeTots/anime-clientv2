import React, { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { getAnime } from '../utils/data/animeData';

function Anime() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    getAnime().then((data) => setAnime(data));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {anime?.map((show) => (
        <AnimeCard key={show.id} animeObj={show} onUpdate={getAnime} />
      ))}
    </div>
  );
}

export default Anime;
