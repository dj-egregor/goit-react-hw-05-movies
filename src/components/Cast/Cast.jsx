import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../shared/services/api';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <ul>
          {data.map(({ name, profile_path, id }) => (
            <li key={id}>
              <p>{name}</p>
              {profile_path && (
                <img
                  alt={name}
                  src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};

export default Cast;
