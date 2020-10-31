import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetList from '../components/PlanetList'
import ErrorNotification from '../components/ErrorNotification';
import Spinner from '../components/Spinner';

export default class PlanetListContainer extends React.Component {
    state = {
        planets: null, 
        error: false
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets() {
            this.swapiService
            .getPlanets()
            .then(this.onLoadedPlanetsSucccess)
            .catch(this.onError)
    }

    onLoadedPlanetsSucccess = (planets) => {
        this.setState({ planets, error: false })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        const {planets, error} = this.state;

        const errorNotification = error ? <ErrorNotification /> : null;
        const contentLoaded = (!error && planets) ? <PlanetList planets={planets} /> : null;
        const spinner = !planets ? <Spinner /> : null;

        return (
            <div>
                {spinner}
                {errorNotification}
                {contentLoaded}
            </div>
        )
    }
};
