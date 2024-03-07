import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Provider } from 'react-redux'
//import '../index.css';
import { useLoginMutation, useGetAllUsersQuery } from '../redux/apiSlice';


const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
)

const Login = ({setToken, setUserinfo}) => {

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
      setUserinfo(username);
      clearError()
      navigate('/');
    } else {
    
      setErrroMessage(error.data);
      
    }
   
  }

  const clearError = () => {
    setErrroMessage(null);
  }
 
  return(
    <>
      <h1>Login</h1>
     {errorMessage && <div className='danger'>{errorMessage}</div>}
      <div className="login-container">  
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" required
              placeholder="Enter username"
              value={username} name='username'
              onChange={(e) => {
              clearError();
              setUsername(e.target.value)}} />
              
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required
                placeholder="Password" value={password} 
                name='password' onChange={(e) => {
                                                  clearError();
                                                  setPassword(e.target.value)}} />
            </Form.Group>

          <Button variant="primary" 
           type="submit">
            Submit
          </Button>
        </Form>

      </div>
    </>
  )
}

export default Login;