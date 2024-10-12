
import bycrpt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js';


const userSignup= async(req, res ,next) =>{
    const { username, email, password } = req.body;

    try {
        let user = await  User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            username,
            email,
            password
        });

        await user.save();

        // Create a JWT token
        const payload = { userId: user.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ user,token });
    } catch (err) {
        console.error(err.message);
       return res.status(500).send('Server error');
    }
}

const userLogin = async(req, res , next)=>{
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Compare the password with the hashed password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Generate JWT token
        const payload = { userId: user.id };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

       res.json({ user,token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const fetchUserDetailsById = async(req, res , next) =>{
    let userId = req.params.id;
    if (!userId) {
       res.send("userId not found") 
    }
    try {
        let existinguser = await User.findById(userId)
        if (!existinguser) {
            res.send("user not found")
        }
        res.send(existinguser)
    } catch (error) {
       res.send(error) 
    }
}
export {
    userLogin,
    userSignup,
    fetchUserDetailsById
}