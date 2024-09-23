import React from 'react'
import { Card, CardHeader, Avatar, CardMedia,CardContent,Typography } from '@mui/material'

export const BlogCard = ({title, descripton, imageUrl, userName}) => {
  return (
    <div>
    <Card sx={{ width: "50%", margin: 'auto', mt:2, padding: 2,
    boxShadow: "5px 5px 10px #ccc", ":hover":{
        boxShadow: "10px 10px 10px #ccc"
    }}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            {userName}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {descripton}
        </Typography>
      </CardContent>
    </Card>

    </div>
  )
}
