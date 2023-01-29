import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { searchMovie } from '../../shared/services/api';
import css from './movies.module.css';

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
      <div className={css.wrap}>
        <h2 className={css.title}>Search movies:</h2>

        <form onSubmit={handleSubmit} className={css.movieForm}>
          <input
            value={query}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Type here"
            className={css.movieInput}
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </form>
      </div>
      <ul className={css.list}>
        {query ? (
          loading ? (
            'Loading...'
          ) : (
            data.map(({ title, id }) => (
              <li key={id} className={css.listItem}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
              </li>
            ))
          )
        ) : (
          <p className={css.descr}>...</p>
        )}
      </ul>
    </>
  );
};

export default Movies;
