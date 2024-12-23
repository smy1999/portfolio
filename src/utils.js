import axios from "axios";

export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
}


const origin = 'https://zelj5guseh.execute-api.us-east-2.amazonaws.com/dev'

export const get = async (path) => {
  try {
    const response = await axios.get(origin + '/api' + path);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

