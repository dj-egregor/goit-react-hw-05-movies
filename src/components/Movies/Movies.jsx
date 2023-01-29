import { useState, useEffect } from 'react';
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { searchMovie } from '../../shared/services/api';
import css from './movies.module.css';

const Movies = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const searchMovieQuery = searchParams.get('query');

  console.log(searchMovieQuery);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setQuery(searchMovieQuery);
  }, [searchMovieQuery]);

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
    navigate(`/movies?query=${query}`);
    // searchMovieQuery;
    getData();
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setLoading(true);
  //       const { results } = await searchMovie(query);
  //       setData(results);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   // if (searchMovieQuery) {
  //   //   // setQuery(searchMovieQuery);
  //   getData();
  //   // }
  // }, [query]);

  return (
    // <>
    //   <h2>Movies</h2>

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       value={query}
    //       onChange={handleChange}
    //       name="search"
    //       type="text"
    //     />
    //     <button type="submit">Search</button>
    //   </form>
    //   <ul>
    //     {query ? (
    //       loading ? (
    //         'Loading...'
    //       ) : (
    //         data.map(({ title, id }) => (
    //           <li key={id}>
    //             <NavLink to={`/movies/${id}`}>{title}</NavLink>
    //           </li>
    //         ))
    //       )
    //     ) : (
    //       <p>type query</p>
    //     )}
    //   </ul>
    // </>

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

// import React, { useState, useEffect } from 'react';
// import {
//   NavLink,
//   useLocation,
//   useNavigate,
//   useSearchParams,
// } from 'react-router-dom';
// import { searchMovie } from '../../shared/services/api';

// const Movies = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [query, setQuery] = useState('');

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     if (searchParams) {
//       if (searchParams.get('query')) {
//         setQuery(searchParams.get('query'));
//         console.log(query);
//       }
//     }
//   }, [query, searchParams]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         const { results } = await searchMovie(query);
//         setData(results);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, [searchParams]);

//   const handleChange = e => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     navigate(`/movies?query=${query}`);
//     // getData();
//   };

//   return (
//     <>
//       <h2>Movies</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={query}
//           onChange={handleChange}
//           name="search"
//           type="text"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {query ? (
//           loading ? (
//             'Loading...'
//           ) : (
//             data.map(({ title, id }) => (
//               <li key={id}>
//                 <NavLink to={`/movies/${id}`}>{title}</NavLink>
//               </li>
//             ))
//           )
//         ) : (
//           <p>type query</p>
//         )}
//       </ul>
//     </>
//   );
// };

// export default Movies;

// import React, { useState, useEffect } from 'react';
// import {
//   NavLink,
//   useLocation,
//   useNavigate,
//   useSearchParams,
// } from 'react-router-dom';
// import { searchMovie } from '../../shared/services/api';

// const Movies = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [query, setQuery] = useState('');

//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   const handleChange = e => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setQuery(e.target.value);
//     navigate(`/movies?query=${query}`);
//     try {
//       setLoading(true);
//       const { results } = await searchMovie(query);
//       setData(results);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h2>Movies</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={query}
//           onChange={handleChange}
//           name="search"
//           type="text"
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {query ? (
//           loading ? (
//             'Loading...'
//           ) : (
//             data.map(({ title, id }) => (
//               <li key={id}>
//                 <NavLink to={`/movies/${id}`}>{title}</NavLink>
//               </li>
//             ))
//           )
//         ) : (
//           <p>type query</p>
//         )}
//       </ul>
//     </>
//   );
// };

// export default Movies;
