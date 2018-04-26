import * as actionCreators from "../actions";
import {expect} from "chai";

describe('actions',() =>{

    it('create SET_STATE action',()=>{
        const state = {
            events:[],
            messages:['msg1','mag2']
        };
        const action = {
            type: 'SET_STATE',
            state
        };
        expect(actionCreators.setState(state)).to.deep.equal(action)
    });

    it('create ADD_EVENT action',()=>{
        const event = {
            id:0,
            name:'eventName',
            firstName:'Ola',
            lastName:'nowak',
            email:'ela@owa.pl',
            date:'data'
        };
        const expectedAction = {
            type: 'ADD_EVENT',
            meta:{remote:true},
            event
        };
        expect(actionCreators.addEvent(event)).to.deep.equal(expectedAction);
    });

    it('create SET_MESSAGES action',()=>{
        const msgs = ["testMsg"];
        const expectedAction = {
            type: 'SET_MESSAGES',
            messages:['testMsg']
        };
        expect(actionCreators.setMessages(msgs)).to.deep.equal(expectedAction);
    })

});