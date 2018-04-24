export default socket => store => next => action => {

    console.log(action);
    if(action.meta && action.meta.remote){
        console.log('emitting');
        socket.emit('action',action);
    }
    return next(action)
}