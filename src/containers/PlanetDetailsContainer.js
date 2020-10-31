import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetDetails from '../components/PlanetDetails';
import ErrorNotification from '../components/ErrorNotification';

export default class PlanetDetailsContainer extends React.Component {
    state = {
        selectedPlanet: null,
        error: false
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
            .catch(this.onError)
    }

    onLoadedPlanetSuccess = (selectedPlanet) => {
        this.setState({ selectedPlanet, error: false })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }


    render() {
        const {selectedPlanet, error} = this.state;

        const errorNotification = error ? <ErrorNotification /> : null;
        const contentLoaded = !error ? <PlanetDetails planet={selectedPlanet} /> : null;

        if (!selectedPlanet) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {errorNotification}
                {contentLoaded}
            </div>
        )
    }
}