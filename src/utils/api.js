import axios from 'axios';
import {  } from 'axios';

const BASE_URL = 'https://coingecko.p.rapidapi.com';
const options = {
  params: {hl:"en", gl:'US'},
  headers: {
    'x-rapidapi-key': process.env.R,
    'x-rapidapi-host': 'coingecko.p.rapidapi.com'
  },
};

const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}

export default fetchDataFromApi;

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }