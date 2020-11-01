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
            error: false,
            isLoading: false
        }
    }

    componentDidMount() {
        const {residents} = this.props;
        residents.forEach(item => {
            this.onGetResident(item);
        })
    }

    swapiService = new SwapiService();

    onGetResident = url => {
        console.log(url)
        this.setState({
            isLoading: true
        })
        this.swapiService
            .getResident(url)
            .then(this.onResidentLoaded)
            .catch(this.onError)
    }

    onResidentLoaded = (resident) => {
        this.setState(state => {
            const residents = [...state.residents, resident];
            return {
                residents,
                error: false,
                isLoading: false
            };
        })
    }

    onError = () => {
        this.setState({
            error: true,
            isLoading: false
        })
    }

    render() {
        const {residents, error, isLoading} = this.state;

        const spinner = isLoading ? <Spinner /> : null;
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