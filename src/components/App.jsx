import { lazy, Suspense } from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './app.module.css';
import { NotFound } from './NotFound/NotFound';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: #e9e9e9;
    font-size: 30px;
    margin-left: 200px;

    &:last-child {
      margin-left: 50px;
    }

    &.active {
      color: orange;
    }
  `;

  return (
    <>
      <nav className={css.navigation}>
        <StyledLink to="/" end>
          Home
        </StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<p>Load page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
