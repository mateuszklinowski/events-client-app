import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
    type:'SET_STATE',
    state:{
        events:[
            {
            id:0,
            name:'eventName',
            firstName:'Ola',
            lastName:'nowak',
            email:'ela@owa.pl',
            date:'data'
        },
            {
                id:1,
                name:'eventName',
                firstName:'Ola',
                lastName:'nowak',
                email:'ela@owa.pl',
                date:'data'
            }],
        messages:['msg1', 'msg2'],
        form:{
            name:'',
            firstName:'',
            lastName:'',
            email:'',
            date:''
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
