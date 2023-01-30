import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../shared/services/api';
import css from './movie-details.module.css';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const navigate = useNavigate();

  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      <button onClick={() => navigate(-1)} className={css.btn}>
        Go Back
      </button>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div className={css.imgWrap}>
            <img
              className={css.img}
              alt={data.original_title}
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            />
            <div className={css.descrWrap}>
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p className={css.descrTitle}>
                User Score: {~~(data.vote_average * 10)}%
              </p>
              <p className={css.descrTitle}>Overview</p>
              <p>{data.overview}</p>
              <p className={css.descrTitle}>Genres</p>
              <p>{getGenres(data.genres)}</p>
            </div>
          </div>
          <div>
            <ul className={css.btnList}>
              <li>
                <Link to={`/movies/${data.id}/cast`}>
                  <button className={css.castBtn}>Cast</button>
                </Link>
              </li>
              <li>
                <Link to={`/movies/${data.id}/reviews`}>
                  <button className={css.reviewsBtn}>Reviews</button>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.number,
};

export default MovieDetails;
