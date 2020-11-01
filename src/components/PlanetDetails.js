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
    const { planetImg } = props;

    const planetImageSegment = planetImg ? (
        <div class="eight wide column">
            <div className="ui inverted segment">
                <div className=" ui fluid image">
                    <img src={planetImg} alt={name}/>
                </div>
            </div>
        </div>
    ) : null;

    const columnWide = planetImageSegment ? 'eight wide column' : 'thixtheen wide column';

    const planetDetailsSegment = (
        <div className={columnWide}>
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
        </div>
    )

    const planetResidentsSegment = (
        <div className="ui inverted segment">
            <div className="ui inverted relaxed divided list">
                {(residents.length > 0)
                    ? <PlanetResidentsContainer residents={residents} />
                    : <PlanetDetailsField name="Residents: " description="No one live here :(" />
                }
            </div>
        </div>
    )

    return (
        <div>
            <div className="ui grid">
                {planetImageSegment}
                {planetDetailsSegment}
            </div>
            {planetResidentsSegment}
        </div>
    )
}


export default PlanetDetails;