import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '53429701-1a3d0b5c13468a36cfdf6d483';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}