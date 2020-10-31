import axios from 'axios';

export default class SwapiService {
    _swapiservice = axios.create({
        baseURL: 'https://swapi.dev/api/'
    });

    getPlanets = async () => {
        const response = await this._swapiservice.get('/planets');
        return response.data.results;
    }

    getPlanet = async (id) => {
        const response = await this._swapiservice.get(`/planets/${id}`);
        return response.data;
    }
}
