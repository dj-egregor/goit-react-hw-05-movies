import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../shared/services/api';

const Reviews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        setData(results);
        console.log(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  console.log(movieId, data);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <ul>
          {data.map(({ author, content, id }) => (
            <li key={id}>
              <p>{author}</p>
              {content && content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found</p>
      )}
    </>
  );
};

export default Reviews;
