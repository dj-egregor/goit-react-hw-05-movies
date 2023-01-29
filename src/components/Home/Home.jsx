import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';

const Home = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ul className={css.list}>
        <h2 className={css.title}>Trending movies:</h2>
        {loading
          ? 'Loading...'
          : data.map(({ title, id }) => (
              <li className={css.listItem} key={id}>
                <NavLink to={`/movies/${id}`} className={css.movieItem}>
                  {title}
                </NavLink>
              </li>
            ))}
      </ul>
    </>
    // <>
    //   <ListMovies>
    //     {loading
    //       ? 'Loading...'
    //       : data.map(({ title, id }) => (
    //           <MovieItem key={id}>
    //             <NavLink to={`/movies/${id}`}>{title}</NavLink>
    //           </MovieItem>
    //         ))}
    //   </ListMovies>
    // </>
  );
};

export default Home;
