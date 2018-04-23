import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import reducer from './reducers/index'
import {List,Map,fromJS} from 'immutable';
import {expect} from 'chai';

import { Provider } from 'react-redux'
import {createStore} from 'redux'
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

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('reducer',() => {

    const event1 = {
        id:0,
        name:'eventName',
        firstName:'Ola',
        lastName:'nowak',
        email:'ela@owa.pl',
        date:'data'
    };
    const event2 = {
        id:1,
        name:'eventName',
        firstName:'Ola',
        lastName:'nowak',
        email:'ela@owa.pl',
        date:'data'
    };
    const event3 = {
        id:3,
        name:'eventName',
        firstName:'Ola',
        lastName:'nowak',
        email:'ela@owa.pl',
        date:'data'
    }
    const msg1 = 'Msg1';
    const msg2 = 'Msg2';


    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                events:List.of(Map(event1),Map(event2)),
                messages:List.of(msg1,msg2)
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            events:[event1,event2],
            messages:[msg1,msg2]
        }));
    });

    it('handles SET_STATE with plain JS playload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                events:[event1,event2],
                messages:[msg1,msg2]
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            events:[event1,event2],
            messages:[msg1,msg2]
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                events:[event1,event2],
                messages:[msg1,msg2]
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            events:[event1,event2],
            messages:[msg1,msg2]
        }));
    });

    it('handles ADD_EVENT', () => {

        const action = {
            type: 'ADD_EVENT',
            event: event2
        }

        const initialState = Map({
            events:List.of(Map(event1)),
        })

        const nextState = reducer(initialState,action);

        expect(nextState).to.equal(Map({
            events:List.of(Map(event1),Map(event2)),
        }));

    })

});

