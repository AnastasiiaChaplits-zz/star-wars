import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SwapiService from '../api/swapisevice';
import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';

class App extends React.Component {
    state = {
        planets: [],
        selectedPlanet: null
    }

    swapiService = new SwapiService;

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets() {
        this.swapiService
            .getPlanets()
            .then(this.onLoadedPlanetsSucccess)
    }

    onLoadedPlanetsSucccess = (planets) => {
        this.setState({
            planets: planets
        })
    }

    onGetPlanet = (id) => {
        this.swapiService
            .getPlanet(id)
            .then(this.onLoadedPlanetSuccess)
    }

    onLoadedPlanetSuccess = (selectedPlanet) => {
        this.setState({
            selectedPlanet: selectedPlanet
        })
    }

    render() {
        return (
            <div className="ui container">
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' exact
                                render={() => (
                                    <PlanetList planets={this.state.planets}/>
                                )} />
                            <Route path="/planet/:id" exact
                                render={(props) => (
                                    <PlanetDetails planet={this.state.selectedPlanet} onGetPlanet={this.onGetPlanet} {...props} />
                                )} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;