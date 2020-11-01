import React from 'react';

const PlanetResidents = ({ residents }) => {
    const renderedList = residents.map((resident, index) => {
        return (
            <div className="ui card" key={index}>
                <div className="content">
                    <div className="header">{resident.name}</div>
                </div>
                <div className="content">
                    <h4 className="ui sub header">About</h4>
                    <div className="ui small feed">
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    Birth Year: {resident.birth_year}
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    Gender: {resident.gender}
                                </div>
                            </div>
                        </div>
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    Skin Color: {resident.skin_color}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui huge center aligned header"
                style={{ color: "white" }}>
                Residents
            </div>
            <div className="ui two cards">{renderedList}</div>
        </div>
    )
}

export default PlanetResidents;