import React from 'react';

const PlanetDetails = (props) => {
    const {
        name,
        rotation_period,
        diameter,
        climat,
        gravity,
        terrain,
        population,
        residents } = props.planet;
    return (
        <div>
            <p>{name}</p>
            <p>{rotation_period}</p>
            <p>{diameter}</p>
            <p>{climat}</p>
            <p>{gravity}</p>
            <p>{terrain}</p>
            <p>{population}</p>
        </div>
    )
}


export default PlanetDetails;