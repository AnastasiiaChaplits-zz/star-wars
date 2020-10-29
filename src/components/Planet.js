import React from 'react';

const Planet = ({planet}) => {
    return (
        <div className="card">
            <div className="content">
                <div className="header">{planet.name}</div>
                <div className="meta">
                    <span>Population {planet.population}</span>
                </div>
                <div className="description">
                    Climat {planet.climate}
                </div>
            </div>
        </div>
    )
}

export default Planet;