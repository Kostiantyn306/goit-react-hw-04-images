import axios from 'axios';
const API_KEY = '33121669-f13e2ba950735c35a1fd3ade1';

export async function getImages(query, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=${page}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
