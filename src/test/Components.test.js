import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Message from './../components/Message'
import Event from './../components/Event'
import Events from './../components/Events'
import {AddEvent} from './../components/AddEvent'

Enzyme.configure({adapter: new Adapter()});

describe('components', () => {

    describe('Message', () => {

        const props = {message: 'test'};
        const enzymeWrapper = mount(<Message {...props}/>);

        it('Render self with prop',()=>{

            expect(enzymeWrapper.find('p').hasClass('App-msg')).toBe(true);

            expect(enzymeWrapper.find('p').text()).toBe(props.message);

        });
    })

    describe('Event', () => {

        const props = {
            event:{
                id:0,
                name:'Maraton w Gliwicach',
                firstName:'Ola',
                lastName:'nowak',
                email:'ela@owa.pl',
                date:1525039200000
            }
        };
        const enzymeWrapper = mount(<Event {...props}/>);

        it('Render self with prop',()=>{

            expect(enzymeWrapper.find('li').hasClass('collection-item')).toBe(true);
            expect(enzymeWrapper.find('.event-name').text()).toBe(props.event.name);
            expect(enzymeWrapper.find('.event-date').text()).toBe( new Date(props.event.date).toLocaleDateString());
            expect(enzymeWrapper.find('.event-email').text()).toBe("Email: "+props.event.email);
            expect(enzymeWrapper.find('.event-by').text()).toBe("By: "+props.event.firstName+" "+props.event.lastName);

        });
    })

    describe('AddEvent', () => {

        let addEventCounter = 0;

        let addEvent = ()=>{
            addEventCounter++
        };

        let messages = [];

        let setMessages = ()=>{
            messages.push("msg")
        };

        const props = {
            messages:["msg1","msg2"],
            addEvent,
            setMessages
        };

        const enzymeWrapper = mount(<AddEvent {...props}/>);

        it('Render self with prop',()=>{
            expect(enzymeWrapper.find('button').hasClass('waves-effect')).toBe(true);
            expect(enzymeWrapper.find('Message').exists()).toBe(true);
        });
    })

});

