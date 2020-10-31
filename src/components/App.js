import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {swapiservice} from '../api/swapisevice';
import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';

class App extends React.Component {
    state = {
        planets: [],
        selectedPlanet: null,
        selectedPlanetIndex: null
    }

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets = async () => {
        const response = await swapiservice.get('/planets');
        this.setState({
            planets: response.data.results,
            selectedPlanet: response.data.results[0]
        });
    }

    onPlanetSelect = (planet, index) => {
        this.setState({ 
            selectedPlanet: planet,
            selectedPlanetIndex: index })
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
                                    <PlanetList planets={this.state.planets} onPlanetSelect={this.onPlanetSelect} />
                                )} />
                            <Route path="/planet/:name" exact
                                render={() => (
                                    <PlanetDetails planet={this.state.selectedPlanet} planetIndex={this.state.selectedPlanetIndex}/>
                                )} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;