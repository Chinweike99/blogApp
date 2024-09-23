import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'

export const Header = () => {
    const [value, setValue] = useState();
  return (
    <AppBar position='sticky' sx={{background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(201,70,252,1) 100%);"}}>
        <Toolbar>
            <Typography variant='h4'>MY BLOG</Typography>
            <Box display="flex">
                <Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit">
                    <Tab label="All Blogs" />
                    <Tab label="My blogs" />
                </Tabs>
            </Box>

            <Box display="flex" marginLeft="auto">
                <Link to='/login'>
                <Button variant='contained' sx={{margin: 1, borderRadius: 10}}>Login</Button>
                </Link>
                
                <Button variant='contained' sx={{margin: 1, borderRadius: 10}}> Signup</Button>
                <Button variant='contained' sx={{margin: 1, borderRadius: 10}}>Logout</Button>
            </Box>

        </Toolbar>
    </AppBar>
  )
}
