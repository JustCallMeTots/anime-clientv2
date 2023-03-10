import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAnime } from '../utils/data/animeData';

export default function ViewAnime() {
  const [animeDeets, setAnimeDeets] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleAnime(id).then(setAnimeDeets);
  }, [id]);

  return (
    <div className="detailCard">
      <div
        className=""
        style={{
          margin: '20px', width: '200px', justifyContent: 'space-between', color: 'wheat',
        }}
      >
        <h1>
          {animeDeets.title}
          {animeDeets.recomended ? '' : '🥵'}
        </h1>
        <p>
          {animeDeets.description}
        </p>
        <p>
          {animeDeets.genre?.label}
          {animeDeets.release}
        </p>
      </div>
    </div>
  );
}
