import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetResidents from '../components/PlanetResidents';
import Spinner from '../components/Spinner';
import ErrorNotification from '../components/ErrorNotification'

export default class PlanetResidentsContainer extends React.Component {
    state = {
        residents: [],
        error: false,
        isLoading: false
    }

    componentDidMount() {
        this.getResidents(this.props.residents);
    }

    swapiService = new SwapiService();

    getResidents = urls => {
        this.setState({
            isLoading: true
        });
        const residentRequests = urls.map(url => this.swapiService.getResident(url));
        
        Promise.all(residentRequests)
            .then(this.onResidentsLoaded)
            .catch(this.onError);
    }

    onResidentsLoaded = (residents) => {
        this.setState({
            residents,
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

    render() {
        const { residents, error, isLoading } = this.state;

        const spinner = isLoading ? <Spinner /> : null;
        const errorNotification = error ? <ErrorNotification /> : null;
        const contentLoaded = (!error) ? <PlanetResidents residents={residents} /> : null;

        return (
            <div>
                {contentLoaded}
                {spinner}
                {errorNotification}
            </div>
        )
    }
}