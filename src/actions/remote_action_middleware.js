export default socket => store => next => action => {

    /*Only emit action with remote prop*/
    if(action.meta && action.meta.remote){
        socket.emit('action',action);
    }
    return next(action)
}