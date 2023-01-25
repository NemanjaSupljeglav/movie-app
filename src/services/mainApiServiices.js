//Axios
import axios from "axios";

//API
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=66f95eed?t=batman";

export const postFunc = async url => {
  return axios
    .get("http://www.omdbapi.com/?i=tt3896198&apikey=66f95eed")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return console.log(error.message);
    });
};
