import axios from 'axios';

export const imgValid = async (beerId) => {
    const response = await axios.get(`https://images.punkapi.com/v2/${beerId}.png`)
    .then(() => true)
    .catch(()=> false);
    return response;
};
