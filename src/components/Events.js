import React from 'react';
import Event from './Event';
import {connect} from 'react-redux'
import * as actionCreators from '../actions';

export const EventsList = ({events}) => {
    return (
            <ul className="collection Events-list">
                {events.map((event,index) =>
                    <Event key={index} event={event}/>
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

