import React from 'react';
import swapiservice from '../api/swapisevice';

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
         })
         console.log(this.state.planets)
    }

    render() {
        return <div>App</div>
    }
}

export default App;