import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Login = () => {
  const [isSignup, setSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "", email: "", password: ""
  });

  const handleChange =(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs)

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
