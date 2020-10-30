import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import swapiservice from '../api/swapisevice';
import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';

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
             selectedPlanet: response.data.results[0]
         });
    }

    onPlanetSelect = planet => {
        this.setState({selectedPlanet: planet})
        console.log(this.state.selectedPlanet)
    }

    render() {
        return (
            <div className="ui container">
                <Router>
                    <div>
                        <Header />
                        <Route path='/' exact
                            render={() => (
                                <PlanetList planets={this.state.planets} onPlanetSelect={this.onPlanetSelect} />
                            )} />
                        <Route path="/planet/:name" exact 
                            render={() => (
                                <PlanetDetails planets={this.state.planets} />
                            )}/>
                    </div>
                </Router>            
            </div>
        )
    }
}

export default App;