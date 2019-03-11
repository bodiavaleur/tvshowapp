const axios = require('axios');
const axs = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: '61ebd99718473b328b06d99fe53a89df' }
});

export const getTvShows = (type, cb, page = 1) =>
  /* Get a list of tv shows 
      type: airing_today | on_the_air | popular | top_rated
  */
  axs.get(`/tv/${type}?page=${page}`).then(res => cb(res.data));

export const getDetails = (tvId, cb) =>
  /* Get details of the show (name, description, rating, etc.) */
  axs.get(`/tv/${tvId}`).then(res => cb(res.data));

export const getCast = (tvId, cb) =>
  /* Get cast of the show */
  axs.get(`/tv/${tvId}/credits`).then(res => cb(res.data.cast));

export const getExternalLinks = (tvId, cb) =>
  /* Get external links (twitter, imdb, instagram, etc.) */
  axs.get(`/tv/${tvId}/external_ids`).then(res => cb(res.data));

export const getImages = (tvId, cb, size = 'w500') =>
  /* Get image data from the show and convert file path to url */
  axs.get(`/tv/${tvId}/images`).then(res => {
    const images = res.data.backdrops.map(
      imgData => `https://image.tmdb.org/t/p/${size}${imgData['file_path']}`
    );
    return cb(images);
  });

export const getKeywords = (tvId, cb) =>
  /* Get keywords (night, funny, robots, etc.) */
  axs.get(`/tv/${tvId}/keywords`).then(res => cb(res.data.results));

export const getReviews = (tvId, cb) =>
  /* Get users review */
  axs.get(`/tv/${tvId}/reviews`).then(res => cb(res.data.results));

export const getSimilarShows = (tvId, cb, page = 1) =>
  /* Get list of similar shows */
  axs.get(`/tv/${tvId}/similar?page=${page}`).then(res => cb(res.data.results));

export const getVideos = (tvId, cb) =>
  /* Get videos for a show */
  axs.get(`/tv/${tvId}/videos`).then(res => cb(res.data.results));
