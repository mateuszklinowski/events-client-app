import React from 'react'
import Message from './Message'
import {connect} from 'react-redux';

import '../../node_modules/materialize-css/dist/js/materialize.min';
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
  return (
      <div>
          {messages.map((msg,index) =>
              <Message  key={index} message={msg}/>
          )}
          <form onSubmit={formSubmit}>
              <div className="row">
                  <div className="input-field col s6">
                      <input type="text" className="validate" name="firstName" onChange={inputChange}/>
                          <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                      <input  type="text" className="validate" name="lastName" onChange={inputChange}/>
                          <label htmlFor="last_name">Last Name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input  type="text" className="validate" name="name" onChange={inputChange}/>
                          <label htmlFor="name">Event name</label>
                  </div>
              </div>
              <div className="row">
                  <div className="input-field col s12">
                      <input type="email" className="validate" name="email" onChange={inputChange}/>
                          <label htmlFor="email">Email</label>
                  </div>
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