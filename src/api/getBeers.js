import axios from 'axios';

const getBeers = async (_page, _limit) => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/beers/?page=${_page}&per_page=${_limit}`;
    const response = await axios.get(url);
    return response.data
}

export default getBeers;