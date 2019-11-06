import React, { Component } from 'react';
import './Table.css';

export class Table extends Component {
    render() {
        const upcomingTours = this.props.events;
        return(
            <React.Fragment>
                <div className="container">
                    <h2 className="subHeaders">Upcoming Tour Dates</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Event</th>
                                <th scope="col">Date</th>
                                <th scope="col">Location</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { upcomingTours.map(upcomingTour => (
                                <tr key={ upcomingTour.id }>
                                    <td>{ upcomingTour.name }</td>
                                    <td>{ upcomingTour.date }</td>
                                    <td>{ upcomingTour.location }</td>
                                    <td><button id={ upcomingTour.id } className="btn ticketButton">Tickets</button></td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Table;