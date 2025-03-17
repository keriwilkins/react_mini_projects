import axios from 'axios'; 


const BASE_URL = 'https://simple-books-api.glitch.me'; 

export const fetchFromAPI = async (url) => {
    
    try{
        const response = await axios.get(`${BASE_URL}/${url}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching data: ', error)
        return null;
    }
}