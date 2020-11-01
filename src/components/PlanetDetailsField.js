import React from 'react';

const PlanetDetailsField = ({ name, description }) => {
    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {name} {description}
                </div>
            </div>
        </div>
    )
}

export default PlanetDetailsField;