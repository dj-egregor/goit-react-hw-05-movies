import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../shared/services/api';

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
      <button onClick={() => navigate(-1)}>Go Back</button>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <img
            alt={data.original_title}
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
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
