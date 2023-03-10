import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { watchShow, dropShow } from '../utils/data/watcherData';
import { deleteAnime } from '../utils/data/animeData';

function AnimeCard({
  animeObj, onUpdate, user, updateUser,
}) {
  const deleteThisAnime = () => {
    if (window.confirm(`Banish ${animeObj.title} to the Shadow Realm?`)) {
      deleteAnime(animeObj?.id).then(() => onUpdate());
    }
  };

  const payload = { anime_id: animeObj.id };

  const watchThisShow = () => {
    watchShow(user.id, payload).then(() => updateUser(user.uid));
  };

  const dropThisShow = () => {
    dropShow(user.id, payload).then(() => updateUser(user.uid));
  };
  return (
    <Card className="animeCard" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h1>{animeObj.title}</h1>
        <h3>{animeObj.release}</h3>
        <Button onClick={watchThisShow}>Watch?</Button>
        <Button onClick={dropThisShow}>Drop?</Button>
        <Link href={`/edit/${animeObj.id}`} passHref>
          <Button
            variant=""
            className="editAnime"
          > Edit Anime
          </Button>
        </Link>
        <Button
          variant=""
          onClick={deleteThisAnime}
        >
          Delete Anime
        </Button>
        <Link href={`/${animeObj.id}`} passHref>
          <Button className="viewBtn">Details</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}

AnimeCard.propTypes = {
  animeObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string,
    genre: PropTypes.string,
    recommended: PropTypes.bool,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default AnimeCard;
