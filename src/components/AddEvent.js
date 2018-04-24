import React from 'react'
import Message from './Message'
import {connect} from 'react-redux';

import M from  '../../node_modules/materialize-css/dist/js/materialize';
import * as actionCreators  from "../actions";


export const AddEvent = ({ submitForm, updateForm, messages }) => {

    const inputChange = (e)=>{
        updateForm({
            name:e.target.name,
            value:e.target.value
        })
    };

    const formSubmit = (e)=>{
        e.preventDefault();
        submitForm()
    }

    const initDatePicker = (e)=>{
        M.Datepicker.init(e.target,{
            autoClose:true,
            format:'yyyy-mm-dd',
            minDate: new Date(Date.now()),
            onSelect:(newDate)=>{updateForm({name:'date',value:new Date(newDate).getTime()})}
        });
    }

  return (
      <div>
          {messages.map((msg,index) =>
              <Message  key={index} message={msg}/>
          )}
          <form onSubmit={formSubmit}>
              <div className="row">
                  <div className="input-field col s6">
                      <input type="text" className="validate" name="firstName" onChange={inputChange} required/>
                          <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                      <input  type="text" className="validate" name="lastName" onChange={inputChange} required/>
                          <label htmlFor="last_name">Last Name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s6">
                      <input  type="text" className="validate" name="name" onChange={inputChange} required/>
                          <label htmlFor="name">Event name</label>
                  </div>
                  <div className="input-field col s6">
                      <input type="email" className="validate" name="email" onChange={inputChange} required/>
                      <label htmlFor="email">Email</label>
                  </div>
              </div>
              <div className="row">
                  <input type="text" className="datepicker" placeholder="date" name="date" onFocus={initDatePicker} required/>
              </div>
              <button className="waves-effect waves-light btn">Submit</button>
          </form>
      </div>
  )
}

const mapStateToProps = state => {
    return {
        messages : state.get('messages'),
    }
}

export const AddEventContainer = connect(mapStateToProps,actionCreators)(AddEvent);