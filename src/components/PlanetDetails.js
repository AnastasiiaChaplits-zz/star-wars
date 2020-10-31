import React from 'react';

class PlanetDetails extends React.Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.onGetPlanet(id);
    };

    render() {
        if (!this.props.planet) {
            return <div>Loading...</div>
        }
        const {
            name, 
            rotation_period, 
            diameter, 
            climat, 
            gravity, 
            terrain, 
            population, 
            residents} = this.props.planet;
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
}

export default PlanetDetails;