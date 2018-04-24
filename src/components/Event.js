import React from 'react';
import logo from '../images/logo.svg'

const Event = ({event}) => {

    let dateString = new Date(event.get('date')).toLocaleDateString();
    return (
        <li className="collection-item avatar">
            <img className="circle" alt="react-logo" src={logo}/>
            <span className="title">Event: {event.get('name')} - {dateString}</span>
            <p>
                By {event.get('firstName')} {event.get('lastName')}
                <br/>
                Contact {event.get('email')}
            </p>
        </li>
    )
}

export default Event