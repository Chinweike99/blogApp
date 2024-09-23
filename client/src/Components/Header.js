import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'

export const Header = () => {
    const [value, setValue] = useState();
  return (
    <AppBar position='sticky' sx={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(201,70,252,1) 100%);"}}>
        <Toolbar>
            <Typography variant='h4'>MY BLOG</Typography>
            <Box display="flex" marginLeft="auto" marginRight="auto">
                <Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit">
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                    <Tab LinkComponent={Link} to="/userBlogs" label="My blogs" />
                </Tabs>
            </Box>

            <Box display="flex" marginLeft="auto">
                <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1, borderRadius: 10}}>Login</Button>  
                <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1, borderRadius: 10}}> Signup</Button>
                <Button variant='contained' sx={{margin: 1, borderRadius: 10}}>Logout</Button>
            </Box>

        </Toolbar>
    </AppBar>
  )
}
