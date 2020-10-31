import axios from 'axios';

export const swapiservice = axios.create({
    baseURL: 'https://swapi.dev/api/'
})
