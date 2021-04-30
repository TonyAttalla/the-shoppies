import axios from 'axios';
const API_ENDPOINT = 'https://www.omdbapi.com';
const client = axios.create({ baseURL: `${API_ENDPOINT}` });

export function getMovies(currentPage, query) {
  return client.get(
    `https://www.omdbapi.com/?s=${query}&apikey=8eda12ed&page=${currentPage}&type=movie`
  );
}

export function getMovieDetails(movieId) {
  return client.get(`https://www.omdbapi.com/?i=${movieId}&apikey=8eda12ed&type=movie`);
}
