import mongoose from "mongoose";

const blogSignupSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    blogs: [{type: mongoose.Types.ObjectId, ref: "Blog", required: true}]
});

const blogSignUp = mongoose.model("User", blogSignupSchema);
export default blogSignUp;