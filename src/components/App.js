import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import PlanetListContainer from '../containers/PlanetListContainer';
import PlanetDetailsContainer from '../containers/PlanetDetailsContainer';
import Header from './Header';
import ErrorNotification from './ErrorNotification';

const App = () => {
    return (
        <div className="ui container">
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={PlanetListContainer} />
                        <Route path="/planet/:id" exact component={PlanetDetailsContainer} />
                        <Route component={ErrorNotification} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
