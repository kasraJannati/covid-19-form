import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styles from "./Login.css";

function Login() {
  let history = useHistory();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateForm() {
    return password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/login', {pin: password})
    .then(response => checkStatus(response))
  }

  function checkStatus(response){
    if(response.data.status){
      history.push({
        pathname: '/form',
        search: '?query='+response.data.user[0].name,
        state: { detail: response.data.user }
      });
    }
    else{
      console.log(response.data.message)
      setError(response.data.message)
    }
  }
  
  return (
    <div className="loginPage">
      <div className="loginPageBlack">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="password">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" disabled={!validateForm()} type="submit">
              Login
            </Button>
            <div className="errorLogin">{error}</div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Login;












