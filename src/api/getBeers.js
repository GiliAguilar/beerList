import axios from 'axios';

const getBeers = async () => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/beers/`;
    const response = await axios.get(url);
    return response.data
}

export default getBeers;