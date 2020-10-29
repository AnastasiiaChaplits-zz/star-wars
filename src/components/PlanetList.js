import React from 'react';
import Planet from '../components/Planet'


const PlanetList = ({planets}) => {
    const renderedList = planets.map(planet => {
        return <Planet planet={planet} key={planet.name} />
    })
    
    return <div className="ui link five cards">{renderedList}</div>
};

export default PlanetList;