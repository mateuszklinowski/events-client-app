import React from 'react';

const Event = ({event}) => {

    let dateString = new Date(event.date).toLocaleDateString();
    return (
        <li className="collection-item">
            <span className="event-info event-name"><b>{event.name}</b></span>
            <span className="event-info info-small event-date">{dateString}</span>
            <span className="event-info event-email"><b>Email:</b> {event.email}</span>
            <span className="event-info info-small event-by">By: {event.firstName} {event.lastName}</span>
        </li>
    )
};

export default Event