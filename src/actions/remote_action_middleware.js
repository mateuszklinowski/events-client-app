export default socket => store => next => action => {
    /*Only emit action with remote prop*/
    /*Only ADD_EVENT is remote action*/
    if(action.meta && action.meta.remote){
        socket.emit('action',action);
    }
    return next(action)
}