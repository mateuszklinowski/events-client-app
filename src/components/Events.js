import React from 'react';
import Event from './Event';
import {connect} from 'react-redux'
import * as actionCreators from '../actions';

export const EventsList = ({events}) => {
    return (
            <ul className="collection">
                {events.map(event =>
                    <Event key={event.get('id')} event={event}/>
                )}
            </ul>
    )
}

const mapStateToProps = state => {
    return {
        events : state.get('events')
    }
}

export const EventsListContainer = connect(
    mapStateToProps,
    actionCreators)(EventsList);

