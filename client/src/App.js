import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Blogs } from './Components/Blogs';
import { UserBlogs} from './Components/UserBlogs';
import { BlogDetails} from './Components/BlogDetails';
import { Addblogs} from './Components/Addblogs';
import { useSelector } from 'react-redux';

/**
 * useSelector: to grab the state of the redux from the store
 * 
 */

function App() {

  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  console.log(isLoggedIn)

  return (
    <div className="App">
      <React.Fragment>
          <header><Header /></header>

          <main>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/userBlogs' element={<UserBlogs />} />
                <Route path='/userBlogs/:id' element={<BlogDetails />} />
                <Route path='/blogs/add' element={<Addblogs />} />
              </Routes>
          </main>

      </React.Fragment>
      
    </div>
  );
}

export default App;
