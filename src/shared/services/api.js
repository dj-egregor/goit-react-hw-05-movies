import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '31449444226ba6345698313fe055564a',
    language: 'en-US',
  },
});

const API_KEY = '31449444226ba6345698313fe055564a';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  const query = `/trending/movie/week`;
  console.log(query);
  try {
    const { data } = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetails(id) {
  const query = `/movie/${id}`;
  console.log(query);
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCast(id) {
  const query = `/movie/${id}/credits`;
  console.log(query);
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieReviews(id) {
  const query = `/movie/${id}/reviews`;
  console.log(query);
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie(queryString) {
  const query = `/search/movie/?query=${queryString}`;
  console.log(query);
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}
