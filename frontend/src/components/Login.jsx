import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css';
import { useLoginMutation } from '../redux/apiSlice';



const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const [errorMessage, setErrroMessage] = useState(null);
  const [loginUser] = useLoginMutation();
  const navigate = useNavigate();
 

  const handleSubmit  = async (e) => {
    e.preventDefault();
    const {data, error} =  await loginUser({
      username, password
    });

    if(data) {
      console.log('output', data.token);
      setToken(data.token);
      setErrroMessage(null);
      navigate('/');
      
    } else {
      setErrroMessage(error.data.message);
    }
   
  }
  
  return(
    <>
      <h1>Login</h1>
      {(errorMessage) && <div>{errorMessage}</div>}
      <div className="login-container">  
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter username"
              value={username} name='username'
              onChange={(e) => setUsername(e.target.value)} />
              
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" 
                placeholder="Password" value={password} 
                name='password' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

          <Button variant="primary" onClick={handleSubmit}
           type="submit">
            Submit
          </Button>
        </Form>

      </div>
    </>
  )
}

export default Login;