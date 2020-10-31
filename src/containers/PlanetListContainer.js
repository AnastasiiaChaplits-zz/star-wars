import React from 'react';
import SwapiService from '../api/swapisevice';
import PlanetList from '../components/PlanetList'

export default class PlanetListContainer extends React.Component {
    state = {
        planets: null
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets() {
        this.swapiService
            .getPlanets()
            .then(this.onLoadedPlanetsSucccess)
    }

    onLoadedPlanetsSucccess = (planets) => {
        this.setState({ planets })
    }

    render() {
        if (!this.state.planets) {
            return <div>Loading...</div>
        }
        return <PlanetList planets={this.state.planets} />
    }
};
