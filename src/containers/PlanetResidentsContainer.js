import React from 'react';

import SwapiService from '../api/swapisevice';
import PlanetResidents from '../components/PlanetResidents';
import Spinner from '../components/Spinner';
import ErrorNotification from '../components/ErrorNotification'

export default class PlanetResidentsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            residents: [],
            error: false
        }
    }

    swapiService = new SwapiService();

    componentDidMount() {
        const {residents} = this.props;
        residents.forEach(item => {
            this.onGetResident(item);
        })
    }

    onGetResident = url => {
        this.swapiService
            .getResident(url)
            .then(this.onResidentLoaded)
            .catch(this.onError)
    }

    onResidentLoaded = (resident) => {
        this.setState(state => {
            const residents = [...state.residents, resident];
            return {
                residents
            };
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        const {residents, error} = this.state;

        const spinner = (residents.length === 0) ? <Spinner /> : null;
        const errorNotification = error ? <ErrorNotification /> : null;
        const contentLoaded = (!error) ? <PlanetResidents residents={residents} /> : null;

        return (
            <div>
                {spinner}
                {errorNotification}
                {contentLoaded}
            </div>
        )
    }
}