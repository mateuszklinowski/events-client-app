import {Map,fromJS} from 'immutable';

const setState = (state,newState) => state.merge(newState);

const setMessages = (state,messages) => state.set('messages',fromJS((messages)));

const addEvent = (state,event) => {
    let events = state.get('events').push(Map(event));
    return state.set('events',events);
}

const initialState = fromJS({
    events:[],
    messages:[],
})

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);

        case 'SET_MESSAGES':
            return setMessages(state, action.messages);

        case 'ADD_EVENT':
            return addEvent(state, action.event);

        default :
            return state
    }
}