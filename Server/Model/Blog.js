import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

const blogschem = mongoose.model('Blog', blogSchema);
export default blogschem;