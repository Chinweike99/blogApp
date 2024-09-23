import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BlogCard } from './BlogCard.js';

/**
 * Get all blogs from the backend
 */
export const Blogs = () => {
 const [blogs, setBlogs] = useState(); //State to store the array of returned request from the backend
  const sendRequest = async() =>{
    const res = await axios.get("http://localhost:3005/app/blog")
    .catch(error => console.log(error));
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    sendRequest().then(data=>setBlogs(data.blogs));
  }, []);
  console.log(blogs);

  return (
    <div>
      {blogs && blogs.map((blog, index)=>
        <BlogCard key={index} title={blog.title} userName={blog.user.name} descripton={blog.descripton} imageUrl={blog.imageUrl}/>
      )}
      {/* <BlogCard /> */}
    </div>
  )
}
