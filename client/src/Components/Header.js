import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store';


export const Header = () => {
    const dispatch = useDispatch(); // using Dispatch for logout
    const isLoggedIn = useSelector((state)=> state.isLoggedIn);
    const [value, setValue] = useState();
  return (
    <AppBar position='sticky' sx={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(201,70,252,1) 100%);"}}>
        <Toolbar>
            <Typography variant='h4' LinkComponent={Link} to="/">MY BLOG</Typography>
            {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight="auto">
                <Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit">
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                    <Tab LinkComponent={Link} to="/userBlogs" label="My blogs" />
                </Tabs>
            </Box>}

            <Box display="flex" marginLeft="auto">

                { !isLoggedIn && 
                <>
                    <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1, borderRadius: 10}}>Login</Button>  
                    <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1, borderRadius: 10}}> Signup</Button>
                </>
                }

                {isLoggedIn && 
                <Button 
                onClick={()=>dispatch(authActions.logout())}
                LinkComponent={Link} to="/login"
                variant='contained' sx={{margin: 1, borderRadius: 10}}>
                    Logout
                    
                </Button>}
            </Box>

        </Toolbar>
    </AppBar>
  )
}
