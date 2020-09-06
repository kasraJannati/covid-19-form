import React, { useState } from 'react';
import styles from "./HeaderForm.css";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HeaderForm() {
  let history = useHistory();
  let user = history.location.state; // get user from login page
  if(!user){
    window.location.href = "/";
  }
  var currentDate = new Date().toLocaleDateString();  //"8/5/2019"
  var currentTime = new Date().toLocaleTimeString();  //"2:31:56 PM" a');
  const [state, setState] = React.useState({
    name: user.name,
    temp: "",
    date:currentDate,
    time:currentTime
  })

  function onChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });

  }

  return (
        <div className="headerForm">
          <Container>
            <div className="formTop">
              <div className="group">
                <div className="separate">
                  <label htmlFor="name">Name: </label>
                  <input type="text" name="name" onChange={onChange}  value={state.name} id="fullname" disabled/>
                </div>
                <div className="separate">
                  <label htmlFor="temp">Today's Temperature: </label>
                  <input type="text" name="temp" onChange={onChange} value={state.temp} id="temp"/>
                </div>
              </div>
              <br></br>
              <div className="group">
                <div className="separate">
                  <label htmlFor="date">Date: </label>
                  <input type="text" name="date" onChange={onChange} value={state.date} id="date" disabled/>
                </div>
                <div className="separate">
                  <label htmlFor="time">Time: </label>
                  <input type="text" name="time" onChange={onChange} value={state.time} id="time" disabled/>
                </div>
              </div>
            </div>
          </Container>
        </div>
  );
}

export default HeaderForm;
