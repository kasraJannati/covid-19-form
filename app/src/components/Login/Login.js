import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from "react-bootstrap";
import styles from "./Login.css";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () =>{
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(({user}) => {
      setUsers(user);
    })
    .catch(err => console.log(err))
  }

  function validateForm() {
    return password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function login() {
    for (let i = 0; i < users.length; i++) {
      if(users[i].password == password){
        setError('');
        history.push({
          pathname: '/form',
          search: '?name='+users[i].name,
          state: users[i]
        });
        // store.set('loggedIn', true);
        break;
      }
      else{
        setError('password is wrong!');
      }
    }
  }

  return (
    <div className="loginPage">
     
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>Name: {user.name} - Pass: {user.password}</li>
        ))}
      </ul>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" disabled={!validateForm()} type="submit" onClick={login}>
            Login
          </Button>
          {error}
        </Form>
      </Container>

    </div>
  );
}

export default Login;












