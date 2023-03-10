import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createAnime, updateAnime } from '../../utils/data/animeData';
import getGenre from '../../utils/data/genreData';

const initialState = {
  id: 0,
  title: '',
  description: '',
  release: '',
  recommended: false,
};

function AnimeForm({ animeObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [genre, setGenre] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getGenre().then(setGenre);

    if (animeObj?.id) setFormInput(animeObj);
  }, [animeObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animeObj?.id) {
      updateAnime(formInput, formInput.id)
        .then(() => router.push('/anime'));
    } else {
      const anime = {
        ...formInput,
      };
      createAnime(anime).then(() => {
        router.push('/anime');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{animeObj.id ? 'Update' : 'Create'} Anime</h2>
      <FloatingLabel controlId="floatingInput1" label="Anime Title" className="mb-3">
        <Form.Control type="text" placeholder="Enter Title" name="title" value={formInput.title} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control type="text" placeholder="Enter Description" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Release Day" className="mb-3">
        <Form.Control type="text" placeholder="Enter Release Day" name="release" value={formInput.release} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Race">
        <Form.Select
          aria-label="Genre"
          name="genre"
          onChange={handleChange}
          className="mb-3"
          required
        >
          <option value="">Select a Genre</option>
          {
            genre.map((Genre) => (
              <option
                key={Genre.id}
                value={Genre.id}
                selected={formInput.genre === Genre.id}
              >
                {Genre.label}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="recommended"
        name="recommended"
        label="recommended?"
        checked={formInput.recommended}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          recommended: e.target.checked,
        }))}
      />
      <Button type="submit">{animeObj.id ? 'Update' : 'Create'} Anime</Button>

    </Form>
  );
}

AnimeForm.propTypes = {
  animeObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    release: PropTypes.string,
    genre: PropTypes.string,
  }),
};

AnimeForm.defaultProps = {
  animeObj: initialState,
};

export default AnimeForm;
