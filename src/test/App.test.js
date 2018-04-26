import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import reducer from '../reducers/index'
import {expect} from 'chai';

import { Provider } from 'react-redux'
import {createStore} from 'redux'

describe('app',()=>{
    it('renders without crashing', () => {
        const store = createStore(reducer);
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
                messages:['msg1','msg2']
            }
        });
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><App /></Provider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

