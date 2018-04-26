import React from 'react'
import Message from './Message'
import {connect} from 'react-redux';

import {validateEvent} from "../utils/validator";

import M from  '../../node_modules/materialize-css/dist/js/materialize';
import * as actionCreators  from "../actions";

export const AddEvent = ({  setMessages, addEvent, messages }) => {

    let nameInput;
    let firstNameInput;
    let lastNameInput;
    let emailInput;
    let dateInput;

    const formSubmit = (e)=>{
        e.preventDefault();
        let event = {
            name:nameInput.value.trim(),
            firstName:firstNameInput.value.trim(),
            lastName:lastNameInput.value.trim(),
            email:emailInput.value.trim(),
            date: new Date(dateInput.value.trim()).getTime()
        };
        let validation = validateEvent(event);
        setMessages(validation.errors);
        if(!validation.valid){
            return;
        }
        e.target.reset();
        addEvent(event);
    };

    const initDatePicker = (e)=>{
        M.Datepicker.init(e.target,{
            autoClose:true,
            format:'yyyy-mm-dd',
            minDate: new Date(Date.now()),
        });
    };

  return (
      <div>
          {messages.map((msg,index) =>
              <Message  key={index} message={msg}/>
          )}
          <form onSubmit={formSubmit}>
              <div className="row">
                  <div className="input-field col s6">
                      <input type="text" className="validate" name="firstName" ref={node => nameInput = node} required/>
                          <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                      <input  type="text" className="validate" name="lastName"  required ref={node => firstNameInput = node}/>
                          <label htmlFor="last_name">Last Name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s6">
                      <input  type="text" className="validate" name="name"  required ref={node => lastNameInput = node}/>
                          <label htmlFor="name">Event name</label>
                  </div>
                  <div className="input-field col s6">
                      <input type="email" className="validate" name="email"  required ref={node => emailInput = node}/>
                      <label htmlFor="email">Email</label>
                  </div>
              </div>
              <div className="row">
                  <input type="text" className="datepicker" placeholder="date" name="date" onFocus={initDatePicker} required ref={node => dateInput = node}/>
              </div>
              <button className="waves-effect waves-light btn">Submit</button>
          </form>
      </div>
  )
};

const mapStateToProps = state => {
    return {
        messages : state.get('messages'),
    }
};

export const AddEventContainer = connect(mapStateToProps,actionCreators)(AddEvent);