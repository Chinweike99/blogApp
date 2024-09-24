import Blog from '../Model/Blog.js';
import mongoose from 'mongoose';
import User from '../Model/model.js'

/** req: Enables a user to make requests
 *  res: response sent back to the user from the backend
 *  next: Allows us to move to the next available middleware
*/

// GET ALL BLOG POSTS
export const getAllBlogs = async(req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find().populate("user");
    } catch (error) {
        return console.log(error)
    }
    if(!blogs){
        return res.status(404).json({message: "No blogs yet"})
    }
    return res.status(200).json({blogs})
}

//ADD POSTS TO BLOG

export const addPost = async(req, res, next) => {

    const {title,  descripton, image, user} = req.body;

    // Relationships should be done after basics are completed(like existingUser).
    // Check if a user exists before creating a blog
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (error) {
        return console.log(error)
    }
    if(!existingUser){
        return res.status(400).json({message: "User ID was not found"})
    }

    // If a new user is found, create a new blog
    const blog = new Blog({
        title, descripton, image, user
    });
    try {
        // await blog.save(); (Instead of saving the blog, add the blog to the user, this line of code is used when testing from inception)
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});
        existingUser.blogs.push(blog);
        await existingUser.save({session})
        await session.commitTransaction(); // If everythin works fine commit transaction
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error})
    }
    return res.status(200).json({blog})

  
// ALLTERNATIVE METHOD    
    // const blogPost = new Blog({
    //     title: req.body.title,
    //     descripton: req.body.descripton,
    //     image: req.body.image,
    //     user: req.body.user,
    // })
    // blogPost.save().then(result => res.json(result))
    // .catch(err => console.log(err))
    // console.log(blogPost);
}


// UPDATE BLOGPOST
export const updateBlog = async(req, res, next) =>{
    const {title, descripton} = req.body
    const blogId = req.params.id;
    let blog;
    // findByIdAndUpdate takes in two parameters, a blog id and the contents to update
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title, descripton
        })
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(500).json({message: "Unable to update blog"})
    }
    return res.status(200).json({blog})
}


// GET SPECIFIC BLOG BY ID
export const getById = async (req, res, next) =>{
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id)
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(404).json({message: "Blog does not exist"});
    }
    return res.status(200).json({blog})
}


// DELETE BLOG
export const deleteBlog = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        // blog = await Blog.findByIdAndDelete(id);
        // Delete blog from user Array: include the .populate()
        blog = await Blog.findByIdAndDelete(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
        // return res.status(500).json({ message: "Error deleting blog" });
    } catch (error) {
        console.log(error)
    }
    if(!blog){
        return res.status(400).json({message: "Cant delete blog that does not exist"});
    }
    return res.status(200).json({message: "Blog deleted Successfully"})
}


//GETTING BLOGS BY USER ID;
export const getByUserId = async(req, res, next) => {
    const userId = req.params.id;

    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blogs")
    } catch (error) {
        return console.log(error)
    }
    if(!userBlogs){
        return res.status(404).json({message: "Blogs not found"})
    }
    return res.status(200).json({blogs: userBlogs})
}