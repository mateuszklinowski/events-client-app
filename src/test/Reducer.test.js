import {fromJS, List, Map} from "immutable";
import reducer from "../reducers";
import {expect} from "chai"

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

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
    const msg3 = 'Msg3';

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
            messages:[msg1,msg2],
            socketId:""
        }));
    });

    it('handles ADD_EVENT transfer to SET_MESSAGE', () => {

        const initialState = Map({
            events:List.of(Map(event1)),
        });

        const action = {
            type: 'ADD_EVENT',
            event: event2
        };

        const nextState = reducer(initialState,action);

        expect(nextState).to.equal(fromJS({
            events : [event1],
            messages: ["Your event has been sent!"]
        }));
    });

    it('handles SET_MESSAGES', ()=>{

        const initialState = fromJS({
            events:[event1,event2],
            messages:[msg1],
        });

        const action = {
            type: 'SET_MESSAGES',
            messages:[msg2,msg3]
        };

        const nextState = reducer(initialState,action);

        expect(nextState).to.equal(fromJS({
            events:[event1,event2],
            messages:[msg2,msg3]
        }))

    })

});