import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({ anime, setFilterAnime }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = anime.filter((release) => release.release.toLowerCase().includes(value.toLowerCase()));
    setFilterAnime(results);
  };

  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Search Days"
          aria-label="Search Days"
          value={searchInput}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </div>
  );
}

SearchBar.propTypes = {
  anime: PropTypes.arrayOf(PropTypes.shape({
    release: PropTypes.string,
  })).isRequired,
  setFilterAnime: PropTypes.func.isRequired,
};

export default SearchBar;
