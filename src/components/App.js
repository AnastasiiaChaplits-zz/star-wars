import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import PlanetList from '../components/PlanetList';
import PlanetDetails from '../components/PlanetDetails';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' exact component={PlanetList} />
                            <Route path="/planet/:id" exact component={PlanetDetails} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;