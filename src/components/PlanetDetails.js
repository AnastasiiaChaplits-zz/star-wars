import React from 'react';

import PlanetDetailsField from './PlanetDetailsField';
import PlanetResidentsContainer from '../containers/PlanetResidentsContainer';

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
            <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                    <PlanetDetailsField name="Name: " description={name} />
                    <PlanetDetailsField name="RotationPeriod: " description={rotation_period} />
                    <PlanetDetailsField name="Diamert: " description={diameter} />
                    <PlanetDetailsField name="Climat: " description={climat} />
                    <PlanetDetailsField name="Gravity: " description={gravity} />
                    <PlanetDetailsField name="Terrain: " description={terrain} />
                    <PlanetDetailsField name="Population: " description={population} />
                </div>
            </div>
            <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                    {(residents.length > 0)
                        ? <PlanetResidentsContainer residents={residents} />
                        : <PlanetDetailsField name="Residents: " description="No one live here :("/>
                    }
                </div>
            </div>
        </div>
    )
}


export default PlanetDetails;