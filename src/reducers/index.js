import {Map,fromJS} from 'immutable';

const setState = (state,newState) => state.merge(newState);

const setMessages = (state,messages) => state.set('messages',fromJS((messages)));

const addEvent = (state,event) => {
    let events = state.get('events').push(Map(event));
    return state.set('events',events);
};

const setSocketId = (state,socketId) => state.set('socketId',socketId);

const initialState = fromJS({
    events:[],
    messages:[],
    socketId:""
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);

        case 'SET_MESSAGES':
            return setMessages(state, action.messages);

        case 'ADD_EVENT':
            /*ADD_EVENT take place on server*/
            /*Check src/actions/remote_action_middleware.js*/
            //return addEvent(state, action.event);
            return setMessages(state,["Your event have been added"]);

        case 'SET_SOCKET_ID':
            return setSocketId(state,action.socketId);

        default :
            return state
    }
}