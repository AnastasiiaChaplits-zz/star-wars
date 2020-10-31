import React from 'react';
import { Link } from 'react-router-dom';
import SwapiService from '../api/swapisevice';

class PlanetList extends React.Component {
    state = {
        planets: null
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.onGetPlanets();
    }

    onGetPlanets() {
        this.swapiService
            .getPlanets()
            .then(this.onLoadedPlanetsSucccess)
    }

    onLoadedPlanetsSucccess = (planets) => {
        this.setState({ planets })
    }

    renderedList = () => {
        return this.state.planets.map((planet, index) => {
            return (
                <div className="card" key={index + 1}>
                    <Link to={`/planet/${index + 1}`} className="content">
                        <div className="header">{planet.name}</div>
                        <div className="meta">
                            <span>Population {planet.population}</span>
                        </div>
                        <div className="description">
                            Climat {planet.climate}
                        </div>
                    </Link>
                </div>
            )
        })
    }

    render() {
        if (!this.state.planets) {
            return <div>Loading...</div>
        }
        return <div className="ui three cards">{this.renderedList()}</div>
    }
};

export default PlanetList;