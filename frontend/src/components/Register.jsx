import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRegisterMutation } from '../redux/apiSlice';


//import '../index.css';



const Register = () => {
   
 
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const[userInfo, setUserInfo] = useState({
    firstname : '',
    lastname : '',
    email : '',
    username : '',
    password : '',
    address : {
                city : '',
                street : '',
                number : 0,
                zipcode : '',
                geolocation: {
                              lat:'',
                              long:''
                }
              },
    phone : ''
  });
  const [registerUser] = useRegisterMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    const jsonUser = JSON.stringify(userInfo);
    const {data, error} = await registerUser(jsonUser);
    if(error) {
      setErrorMessage(error);
      console.log(error);
    } else {
      console.log('Registered!!',data);
    }
   
  //  navigate('/login');
  }
  return(
    <>
        <div className='register-container'>
          <h1>Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter First Name"
                required
                value={userInfo.firstname} 
                onChange={(e) => setUserInfo({ ...userInfo, firstname : e.target.value })}
                  />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Last Name" 
                required
                value={userInfo.lastname} 
                onChange={(e) => setUserInfo({ ...userInfo, lastname : e.target.value })}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Username" 
                required
                value={userInfo.username} 
                onChange={(e) => setUserInfo({ ...userInfo, username : e.target.value })}/>
              </Form.Group>
              

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" 
              placeholder="Enter email"  
              value={userInfo.email} 
              required
              onChange={(e) => setUserInfo({ ...userInfo, email : e.target.value })}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
              placeholder="Password" value={userInfo.password}
              required
              onChange={(e) => setUserInfo({ ...userInfo, password : e.target.value })} />
            </Form.Group>

             <Form.Group className="mb-3" >
                <Form.Label>City</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter City" 
                required
                value={userInfo.address.city} 
                onChange={(e) => 
                  setUserInfo({ ...userInfo, 
                              address: { 
                                ...userInfo.address,
                                city : e.target.value} })}/>
             </Form.Group>

             <Form.Group className="mb-3" >
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Street" 
                value={userInfo.address.street} 
                required
                onChange={(e) => 
                  setUserInfo({ ...userInfo,
                              address : {
                                ...userInfo.address,
                                 street : e.target.value}})}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Door Number</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter House Number" 
                required
                value={userInfo.address.number} 
                onChange={(e) =>
                   setUserInfo({ ...userInfo, 
                              address : { 
                                ...userInfo.address,
                                number : e.target.value} })}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Zipcode</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Zipcode" 
                required
                value={userInfo.address.zipcode} 
                onChange={(e) => 
                   setUserInfo({ ...userInfo, 
                                 address : { 
                                    ...userInfo.address,
                                    zipcode :e.target.value }})}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter Phone" 
                required
                value={userInfo.phone} 
                onChange={(e) => setUserInfo({...userInfo, phone :  e.target.value})}/>
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

export default Register