import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyBJmyw-shRf04arPkK4LCaknMPvOQYIVJA",
    cx: "7791fbafe12ad45aa",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
