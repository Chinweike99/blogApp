import Blog from '../Model/Blog.js';

/** req: Enables a user to make requests
 *  res: response sent back to the user from the backend
 *  next: Allows us to move to the next available middleware
*/

// GET ALL BLOG POSTS
export const getAllBlogs = async(req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
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
    const blogs = new Blog({
        title, descripton, image, user
    });
    try {
        await blogs.save();
        // return console.log(blogs)
    } catch (error) {
        return console.log(error)
    }
    return res.status(200).json({blogs})

  
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
            title,descripton
        })
    } catch (error) {
        return console.log(error)
    }
    if(!blog){
        return res.status(500).json({message: "Unable to update blog"})
    }
    return res.status(200).json({blog})
}