import React from 'react';
import { Link } from 'react-router-dom';

const PlanetList = ({ planets }) => {
    const renderedList = planets.map((planet, index) => {
        return ( 
            <div className="column" key={index + 1}>
                <div className="ui fluid card" style={{height: "100%"}}>
                    <Link to={`/planet/${index + 1}`} className="content" style={{textDecoration: "none"}}>
                        <div className="center aligned header">{planet.name}</div>
                        <div className="center aligned meta">
                            <span>Population {planet.population}</span>
                        </div>
                        <div className="center aligned description">
                            Climat {planet.climate}
                        </div>
                    </Link>
                </div>
            </div>
        )
    })
    return (
        <div className="ui three column grid link cards">
            {renderedList}
        </div>
    )
}

export default PlanetList;