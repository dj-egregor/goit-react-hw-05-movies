import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ListMovies, MovieItem } from './home.styled';
import { getTrendingMovies } from '../../shared/services/api';

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
      <ListMovies>
        {loading
          ? 'Loading...'
          : data.map(({ title, id }) => (
              <MovieItem key={id}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
              </MovieItem>
            ))}
      </ListMovies>
    </>
  );
};

export default Home;
