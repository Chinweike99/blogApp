import User from '../Model/model.js'
import bcrypt from 'bcrypt'
// import blogSignUp from '../Model/model.js';

/** req: Enables a user to make requests
 *  res: response sent back to the user from the backend
 *  next: Allows us to move to the next available middleware
*/
export const getAllUsers = async(req, res, next) =>{

    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error)
    }
    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    return res.status(200).json({ users })
}


// SIGNUP 
export const signUp = async(req, res, next) => {
    
    const {name, email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(existingUser){
        return res.status(400).json({message: "User exists, Login instead"})
    }

    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt)
    const user = new User({
        name,
        email,
        password: hashedPassword
    })
    console.log(user);

    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(201).json({user})


/** THE METHOD BELOW WORKS SAME WAY AS THE ABOVE */

    // console.log(req.body);
    // const salt = await bcrypt.genSaltSync(10);
    // const hashedPassword = await bcrypt.hashSync(req.body.password, salt)


    // const signup = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashedPassword
    // })
    // signup.save().then(result => res.json(result))
    // .catch(err => console.log(err))
    // console.log(signup);
}


// LOGOUT FUNCTION

export const logIn = async(req, res) => {
    const {email, password} = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(!existingUser){
        return res.status(404).json({message: "User does not exist"})
    }
    else if(existingUser){
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Password Incorrect"});
        }
        return res.status(200).json({message: "Login was successful"})
    }
    console.log(existingUser);
}