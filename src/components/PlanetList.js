import React from 'react';
import { Link } from 'react-router-dom';

const PlanetList = ({ planets, onPlanetSelect }) => {
    const renderedList = planets.map((planet, index) => {
        return (
            <div className="card" key={index} onClick={() => onPlanetSelect(planet)}>
                <Link to={`/planet/${index}`} className="content">
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

    return <div className="ui link five cards">{renderedList}</div>
};

export default PlanetList;