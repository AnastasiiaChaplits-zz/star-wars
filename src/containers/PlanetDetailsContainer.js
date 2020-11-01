import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetDetails from '../components/PlanetDetails';
import ErrorNotification from '../components/ErrorNotification';
import Spinner from '../components/Spinner';

export default class PlanetDetailsContainer extends React.Component {
    state = {
        selectedPlanet: null,
        error: false,
        isLoading: false
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.onGetPlanet(id);
    };

    swapiService = new SwapiService();

    onGetPlanet = (id) => {
        this.setState({
            isLoading: true
        });
        this.swapiService
            .getPlanet(id)
            .then(this.onLoadedPlanetSuccess)
            .catch(this.onError);
    }

    onLoadedPlanetSuccess = (selectedPlanet) => {
        this.setState({ 
            selectedPlanet, 
            error: false,
            isLoading: false 
        });
    }


    onError = (response) => {
        this.setState({
            error: true,
            isLoading: false
        })
    }


    render() {
        const {selectedPlanet, error, isLoading} = this.state;
        const errorMsg = `There is no planet with id ${this.props.match.params.id}.`;

        const errorNotification = error ? <ErrorNotification errorMessage={errorMsg} /> : null;
        const contentLoaded = (!error && selectedPlanet) ? <PlanetDetails planet={selectedPlanet} /> : null;
        const spinner = isLoading ? <Spinner /> : null;

        return (
            <div>
                {spinner}
                {errorNotification}
                {contentLoaded}
            </div>
        )
    }
}