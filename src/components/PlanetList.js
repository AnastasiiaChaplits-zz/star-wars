import React from 'react';
import { Link } from 'react-router-dom';

const PlanetList = ({ planets }) => {
    const renderedList = planets.map((planet, index) => {
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
    return <div className="ui three cards">{renderedList}</div>
}

export default PlanetList;