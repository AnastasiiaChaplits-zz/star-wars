import React from 'react';
import swapiservice from '../api/swapisevice';
import PlanetList from '../components/PlanetList';

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
         console.log(response.data.results);
    }

    render() {
        return (
            <div>
                <PlanetList planets={this.state.planets}/>
            </div>
        )
    }
}

export default App;