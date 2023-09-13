import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_API_URL;
const fetchLimit = import.meta.env.VITE_APP_API_FETCH_LIMIT;
const emptyObj = [
    {
        "id": '',
        "name": '',
        "tagline": "",
        "first_brewed": "",
        "description": "",
        "image_url": "../src/assets/beerBg.svg",
        "abv": '',
        "ibu": '',
        "target_fg": '',
        "target_og": '',
        "ebc": '',
        "srm": '',
        "ph": '',
        "attenuation_level": '',
        "volume": {
            "value": '',
            "unit": ""
        },
        "boil_volume": {
            "value": '',
            "unit": ""
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": '',
                        "unit": ""
                    },
                    "duration": ''
                }
            ],
            "fermentation": {
                "temp": {
                    "value": '',
                    "unit": ""
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    }
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    }
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    }
                }
            ],
            "hops": [
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    },
                    "add": "",
                    "attribute": ""
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    },
                    "add": "",
                    "attribute": ""
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    },
                    "add": "",
                    "attribute": ""
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    },
                    "add": "",
                    "attribute": ""
                },
                {
                    "name": "",
                    "amount": {
                        "value": '',
                        "unit": ""
                    },
                    "add": "",
                    "attribute": ""
                }
            ],
            "yeast": ""
        },
        "food_pairing": [
            ""
        ],
        "brewers_tips": "",
        "contributed_by": ""
    }
];

export const getBeers = async (_page) => {
    try{
        const url = `${baseUrl}/beers/?page=${_page}&per_page=${fetchLimit}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return emptyObj;
    }
};

export const getBeer = async (id) => {
    try {
        const url = `${baseUrl}/beers/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return emptyObj;
    };
};