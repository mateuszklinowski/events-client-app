export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function addEvent(event) {
    return {
        type: 'ADD_EVENT',
        meta:{remote:true},
        event
    };
}

export function setMessages(messages) {
    return {
        type: 'SET_MESSAGES',
        messages
    };
}

