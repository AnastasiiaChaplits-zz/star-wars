import React from 'react';

import SwapiService from '../api/swapisevice';

class PlanetDetails extends React.Component {
    state = {
        selectedPlanet: null
    }

    componentDidMount() {
        const {id} = this.props.match.params;
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
        const {
            name, 
            rotation_period, 
            diameter, 
            climat, 
            gravity, 
            terrain, 
            population, 
            residents} = this.state.selectedPlanet;
        return (
            <div>
                <p>{name}</p>
                <p>{rotation_period}</p>
                <p>{diameter}</p>
                <p>{climat}</p>
                <p>{gravity}</p>
                <p>{terrain}</p>
                <p>{population}</p>
            </div>
        )
    }
}

export default PlanetDetails;