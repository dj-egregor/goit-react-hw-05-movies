import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { searchMovie } from '../../shared/services/api';

const Movies = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const getData = async () => {
    try {
      setLoading(true);
      const { results } = await searchMovie(query);
      setData(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <h2>Movies</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          name="search"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {query ? (
          loading ? (
            'Loading...'
          ) : (
            data.map(({ title, id }) => (
              <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
              </li>
            ))
          )
        ) : (
          <p>type query</p>
        )}
      </ul>
    </>
  );
};

export default Movies;
