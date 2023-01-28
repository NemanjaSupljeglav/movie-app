//Axios
import axios from "axios";

//API
const API = "http://www.omdbapi.com";
const KEY = "66f95eed";

export const getFunc = async url => {
  return axios
    .get(`${API}/${url}&apikey=${KEY}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return console.log(error.message);
    });
};
