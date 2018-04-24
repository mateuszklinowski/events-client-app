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
export function submitForm() {
    return {
        type: 'SUBMIT_FORM',
    };
}
export function updateForm(input){
    return{
        type: 'UPDATE_FORM',
        input
    }
}