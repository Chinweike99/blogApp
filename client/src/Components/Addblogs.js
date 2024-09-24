import React from 'react'
import {Box, InputLabel, TextField, Typography} from '@mui/material'

export const Addblogs = () => {
  return (
    <div>
      <form>
        <Box>
          <Typography>Create a blog</Typography>
          <InputLabel>Title</InputLabel>
          <TextField />
          <InputLabel>Description</InputLabel>
          <TextField />
          <InputLabel>ImageURL</InputLabel>
          <TextField />
        </Box>
      </form>
    </div>
  )
}
