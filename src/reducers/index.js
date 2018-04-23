import {List,Map,fromJS} from 'immutable';

const setState = (state,newState) => state.merge(newState);

const setMessages = (state,messages) => state.set('messages',messages);

const addEvent = (state,event) => {
    let events = state.get('events').push(Map(event));
    return state.set('events',events);
}

const submitForm = (state) =>{

    console.log(state.get('form').get('name'));

    let event = {
        name:state.getIn(['form','name']),
        firstName:state.getIn(['form','firstName']),
        lastName:state.getIn(['form','lastName']),
        email:state.getIn(['form','email']),
        date:state.getIn(['form','date']),
    }

    return addEvent(state,event)
};

const updateForm = (state,action) => {
    console.log(action);
    return state.setIn(['form',action.name],action.value);
}

export default (state = Map(), action) => {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);

        case 'SET_MESSAGES':
            return setMessages(state, action.messages);

        case 'ADD_EVENT':
            return addEvent(state, action.event);

        case 'SUBMIT_FORM':
            return submitForm(state);

        case 'UPDATE_FORM':
            return updateForm(state, action.input);

    }
    return state;
}