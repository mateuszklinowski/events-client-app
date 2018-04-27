import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import io from 'socket.io-client'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import {setState, setSocketId} from './actions';
import remoteActionMiddleware from './actions/remote_action_middleware'
import socketConfig from './socket.io.config'

const socket = io(socketConfig.connectionUrl);
socket.on('state',state=>{
    store.dispatch(setState(state))
});
socket.on('connect',()=>{
    store.dispatch(setSocketId(socket.io.engine.id));

});


const createStoreWithMiddleware = applyMiddleware(remoteActionMiddleware(socket))(createStore);
const store = createStoreWithMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
