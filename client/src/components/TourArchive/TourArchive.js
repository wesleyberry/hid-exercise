import React from 'react';
import './TourArchive.css';

function TourArchive(props) {
    const tours = props.tours;
    return(
        <div className="container tourContainer">
            <div className="row">
                <div className="col-12">
                    { tours.map(tour => (
                        <div className="row" key={ tour.id } style={{ borderBottom:'solid 1px #9e9e9e' }}>
                            <div className="col-6">
                                <p style={{ paddingTop:'1rem' }}>
                                    { tour.location }
                                </p>
                            </div>
                            <div className="col-6" style={{ textAlign:'right' }}>
                                <p style={{ paddingTop:'1rem' }}>
                                    { tour.date }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourArchive;