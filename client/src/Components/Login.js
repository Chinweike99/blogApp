import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store';
import { useNavigate } from 'react-router-dom';

/**
 * If Signup and Login functions successfully, then update the state in the redux.
 * useDispatch: This is what dispatches actions to the redux(performs the above)
 * @returns 
 */

export const Login = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  });

  const handleChange =(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }


  /**
 * axios.post takes in 2 parameters, (1)The url request is made to, and (2).JSON data that needs to be sent to the backend
 * sendRequest: Function to send login request to the backend
 */
  const sendRequest = async(type=("login")) =>{
    const res = await axios.post(`http://localhost:3005/app/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err))

    // If response is successful
    const data = await res.data;
    return data;
  }

/**
 * localStorage: is a built-in web API that allows you to store key-value pairs in a web browser on a user's device. The data in localStorage persists across browser sessions, meaning it remains stored even after the user closes and reopens the browser or navigates to a different page within the same site. 
 */

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isSignup){
      // .then(()=> dispath(authActions.login())).then(()=>navigate("/blogs")), should implemened after login and Signup has been tested to be working fine

      sendRequest("signup").then((data)=>localStorage.setItem("userId", data.user._id)).then(()=> dispath(authActions.login())).then(()=>navigate("/blogs")).then(data=>console.log(data));
    }else{
      sendRequest().then((data)=>localStorage.setItem("userId", data.user._id)).then(()=> dispath(authActions.login())).then(()=>navigate("/blogs")).then(data => console.log(data));
    }
    // console.log(inputs)


    // ALTERNATIVE FOR THE ABOVE sendRequest function.
    // axios.post("http://localhost:3005/app/user/signup", inputs)
    // .then(res => {
    //   console.log("Signup Successful", res.data);
    //   setInputs({
    //     name: "",
    //     email: "",
    //     password: ""
    //   });
    // }).catch(err => console.log(err))

  }

  const handleSigup = () => {
    setSignup(!isSignup);
    setInputs({
      name: "",
      email: "",
      password: ""
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems={"center" } justifyContent={"center"} boxShadow={"10px 10px 20px #ccc"} padding={3} margin={"auto"} marginTop={5} borderRight={5} maxWidth={400}>

          <Typography padding={2} variant='h4'>
            {!isSignup ? "Login" : "Signup"} 
          </Typography>
         
          { isSignup && <TextField name='name' onChange={handleChange} value={inputs.name} placeholder='Name' margin='normal'/> }

          <TextField name='email' onChange={handleChange} value={inputs.email} type={"email"} placeholder='Email' margin='normal'/>
          <TextField name='password' onChange={handleChange} value={inputs.password} type={"password"} placeholder='Password' margin='normal'/> 

          <Button type={"submit"} variant='contained' sx={{borderRadius: 2, background: "green", color: "#fff", marginTop: 3}}>Submit</Button>

          <Button onClick={handleSigup} sx={{borderRadius: 3, marginTop: 2}}>
            {!isSignup ? "Signup as a new user" : "Login"}
          </Button>
        </Box>
      </form>

    </div>
  )
}
