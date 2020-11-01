import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetDetails from '../components/PlanetDetails';
import ErrorNotification from '../components/ErrorNotification';
import Spinner from '../components/Spinner';

export default class PlanetDetailsContainer extends React.Component {
    state = {
        selectedPlanet: null,
        error: false,
        isLoading: false,
        img: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.getPlanet(id);
        this.getImage(id);
    };

    swapiService = new SwapiService();

    getPlanet = (id) => {
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


    onError = () => {
        this.setState({
            error: true,
            isLoading: false
        });
    }

    getImage = (id) => {
        this.setState({
            isLoading: true
        });
        
        this.swapiService
            .getPlanetImage(id)
            .then(this.onLoadedImageSuccess)
            .catch(this.onImageError);
    }

    onLoadedImageSuccess = (img) => {
        this.setState({
            img,
            error: false,
            isLoading: false
        });
    }


    onImageError = () => {
        this.setState({
            img: null
        });
    }

    render() {
        const {selectedPlanet, error, isLoading, img} = this.state;
        const errorMsg = `There is no planet with id ${this.props.match.params.id}.`;

        const errorNotification = error ? <ErrorNotification errorMessage={errorMsg} /> : null;
        const contentLoaded = (!error && selectedPlanet) ? <PlanetDetails planet={selectedPlanet} planetImg={img}/> : null;
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