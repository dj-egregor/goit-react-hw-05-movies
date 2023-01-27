import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../shared/services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
        console.log(data);
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
      <Link to={backLinkHref}>Back to movies</Link>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
          <h1>
            {data.original_title} ({getYear(data.release_date)})
          </h1>
          <p>User Score: {~~(data.vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{data.overview}</p>
          <p>Genres</p>
          <p>{getGenres(data.genres)}</p>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${data.id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${data.id}/reviews`}>Reviews </Link>
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

export default MovieDetails;
