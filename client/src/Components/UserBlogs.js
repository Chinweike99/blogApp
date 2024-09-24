import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogCard } from './BlogCard';

/**
 * Fetching the blogs of a specific user 
 */


export const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const id = localStorage.getItem("userId");
  const sendRequest = async()=>{
    const res = await axios.get(`http://localhost:3005/app/blog/user/${id}`)
    .catch(err => console.log(err));

    const data = await res.data;
    return data;
  }

  useEffect(() => {
    sendRequest().then((data) =>{
      if(data){
        setBlogs(data.blogs.blogs) //last .blogs not really neccessary
      }
    })
  }, [])
  // console.log(blogs);

  useEffect(()=>{
    if(blogs){
      console.log(blogs);
    }
  }, [blogs])

  

  return (
    <div>
      {/* {blogs.length > 0 ? (
        blogs.map((blog) => <div key={blog.id}>{blog.title}</div>)
      ) : (
        <p>Loading blogs...</p>
      )} */}

      {blogs && blogs.map((blog, index)=>
        <BlogCard key={index} title={blog.title} userName={blog.user.name} descripton={blog.descripton} imageUrl={blog.imageUrl}/>
      )}

    </div>
  )
}
