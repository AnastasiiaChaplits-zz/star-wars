import axios from 'axios';

export default class SwapiService {
    _swapiservice = axios.create({
        baseURL: 'https://swapi.dev/api/'
    });


    getPlanets = async (params = '') => {
        const response = await this._swapiservice.get(`/planets/${params}`)
            .catch(response => response);
        if (!response.data.results) {
            return response;
        }
        return response.data;
    }

    getPlanet = async (id) => {
        const response = await this._swapiservice.get(`/planets/${id}`)
            .catch(response => response);
        if (!response.data) {
            return response;
        }
        return response.data;
    }

    getResident = async (url) => {
        const response = await axios.get(url)
            .catch(response => response);
        if (!response.data) {
            return response
        }
        return response.data;
    }
}
