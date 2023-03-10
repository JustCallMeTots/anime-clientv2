import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAnime } from '../../utils/data/animeData';
import AnimeForm from '../../components/forms/AnimeForm';

export default function EditAnime() {
  const [editAnime, setEditAnime] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleAnime(id).then(setEditAnime);
  }, [id]);

  return (<AnimeForm key={id} animeObj={editAnime} />);
}
