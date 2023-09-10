import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_API_URL;
const fetchLimit = import.meta.env.VITE_APP_API_FETCH_LIMIT;
const getBeers = async (_page) => {
    const url = `${baseUrl}/beers/?page=${_page}&per_page=${fetchLimit}`;
    const response = await axios.get(url);
    return response.data
}

export default getBeers;