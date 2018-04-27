import React from 'react';
import Event from './Event';
import {connect} from 'react-redux'
import * as actionCreators from '../actions';

export const EventsList = ({events}) => {
    let today = new Date(Date.now());
    today.setHours(0,0,0,0);

    return (
            <ul className="collection Events-list">
                {events.filter((event)=>event.date>today.getTime()).sort((a,b)=>a.date-b.date).map(event =>
                    <Event key={event._id} event={event}/>
                )}
            </ul>
    )
};

const mapStateToProps = state => {
    return {
        events : state.get('events').toJS()
    }
};

export const EventsListContainer = connect(
    mapStateToProps,
    actionCreators)(EventsList);

