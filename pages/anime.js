import React, { useEffect, useState } from 'react';
import SearchBar from '../components/Search';
import AnimeCard from '../components/AnimeCard';
import { useAuth } from '../utils/context/authContext';
import { getAnime } from '../utils/data/animeData';

function Anime() {
  const [anime, setAnime] = useState([]);
  const [filterAnime, setFilterAnime] = useState([]);

  const { user, updateUser } = useAuth();

  const getAllAnime = () => {
    getAnime().then((animeArray) => {
      setAnime(animeArray);
      setFilterAnime(animeArray);
    });
  };

  useEffect(() => {
    getAllAnime();
  }, []);

  useEffect(() => {
    getAnime().then((data) => setAnime(data));
  }, []);

  return (
    <div>
      <SearchBar anime={anime} setFilterAnime={setFilterAnime} />
      <div className="d-flex flex-wrap">
        {filterAnime?.map((show) => (
          <AnimeCard user={user} updateUser={updateUser} key={show.id} animeObj={show} onUpdate={getAllAnime} />
        ))}
      </div>
    </div>
  );
}

export default Anime;
