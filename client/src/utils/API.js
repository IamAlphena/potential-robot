import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const API = {
  // getBoth: async (title) => {
  //   const url = `https://api.themoviedb.org/3/search/multi/?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;

  //   let movieData = await axios.get(url);
  //   // console.log(movieData);
  //   // return movieData;
  // },

  // getTv: async (title) => {
  //   const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${title}&include_adult=false`;

  //   let movieData = await axios.get(url);
  // },

  getMovie: async (title) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;

    let movieData = await axios.get(url);
    return movieData;
  },

  getDetails: async (id) => {
    const url = `
    https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

    let getDetails = await axios.get(url);
    return getDetails
  },

  providers: async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`;

    let providerData = await axios.get(url);
    return providerData
  },
};

export default API;
