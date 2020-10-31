import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetDetails from '../components/PlanetDetails'

export default class PlanetDetailsContainer extends React.Component {
    state = {
        selectedPlanet: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.onGetPlanet(id);
    };

    swapiService = new SwapiService();

    onGetPlanet = (id) => {
        this.swapiService
            .getPlanet(id)
            .then(this.onLoadedPlanetSuccess)
    }

    onLoadedPlanetSuccess = (selectedPlanet) => {
        this.setState({ selectedPlanet })
    }


    render() {
        if (!this.state.selectedPlanet) {
            return <div>Loading...</div>
        }
        return <PlanetDetails planet={this.state.selectedPlanet} />
    }
}