import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import swapiservice from '../api/swapisevice';
import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';

class App extends React.Component {
    state = {
        planets: []
    }

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets = async () => {
        const response = await swapiservice.get('/planets');
         this.setState({
             planets: response.data.results
         });
         console.log(response);
    }

    render() {
        return (
            <div className="ui container">
                <Router>
                    <div>
                        <Header />
                        <Route path='/' exact
                            render={() => (
                                <PlanetList planets={this.state.planets}/>
                            )} />
                        <Route path="/planet/:id" exact 
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