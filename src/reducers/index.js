import {List,Map,fromJS} from 'immutable';

const setState = (state,newState) => state.merge(newState);

const setMessages = (state,messages) => state.set('messages',messages);

const addEvent = (state,event) => {
    let events = state.get('events').push(Map(event));
    return state.set('events',events);
}

const validator = (event) => {
    let result = {valid:true,errors:[]};

    if(!event){
        result.valid = false;
        result.errors.push("Application error")
    }
    if(!event.name || !event.firstName || !event.lastName || !event.email || !event.date){
        result.valid = false;
        result.errors.push("Missing fields")
    }
    if(Date.now() > event.date){
        result.valid = false;
        result.errors.push("Incorrect date")
    }
    for(let key in event){
        if(event.hasOwnProperty(key)){
            if(key.length > 30 ){
                result.valid = false;
                result.errors.push("Too long data (max 30)");
            }
        }
    }
    return result;
}

const submitForm = (state) =>{

    let event = {
        name:state.getIn(['form','name']),
        firstName:state.getIn(['form','firstName']),
        lastName:state.getIn(['form','lastName']),
        email:state.getIn(['form','email']),
        date:state.getIn(['form','date']),
    };

    let validation = validator(event);

    if(!validation.valid){
        return setMessages(state,validation.errors);
    }

    return addEvent(state,event)
};

const updateForm = (state,action) => {
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