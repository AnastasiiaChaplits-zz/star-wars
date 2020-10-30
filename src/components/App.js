import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import swapiservice from '../api/swapisevice';
import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';
import history from '../history';

class App extends React.Component {
    state = {
        planets: [],
        selectedPlanet: null
    }

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets = async () => {
        const response = await swapiservice.get('/planets');
        this.setState({
            planets: response.data.results,
            selectedVideo: response.data.results[0]
        });
    }

    onPlanetSelect = planet => {
        this.setState({ selectedPlanet: planet })
    }

    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' exact
                                render={() => (
                                    <PlanetList planets={this.state.planets} onPlanetSelect={this.onPlanetSelect} />
                                )} />
                            <Route path="/planet/:name" exact
                                render={() => (
                                    <PlanetDetails planet={this.state.selectedPlanet} />
                                )} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;