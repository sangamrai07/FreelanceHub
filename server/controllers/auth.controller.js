const User = require('../models/user.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).send("Email already registered.");
        }
        
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash
        });
        await newUser.save();
        
        // Generate JWT token
        const token = jwt.sign({
            id: newUser._id,
            isSeller: newUser.isSeller,
            email: newUser.email, // Include other user info as needed
            username: newUser.username
        }, process.env.JWT_KEY);
        
        // Set cookie with the token
        const {password, ...info} = newUser._doc
        res.cookie("authToken", token, { httpOnly: true }).status(200).send(info);
    } catch (err) {
        res.status(500).send("Error Occurred: " + err);
    }
};



const login = async (req,res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(404).send("User Not Found!!")

        const matches = bcrypt.compareSync(req.body.password, user.password)
        if (!matches)return res.status(400).send("Incorrect Password or Username.")

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY)
        const {password, ...info} = user._doc
        res.cookie("authToken", token, { httpOnly: true }).status(200).send(info);
    }
    catch (err) {
        res.status(500).send("Something Went Wrong.");
    }
};

const logout = async (req, res) => {
    res.clearCookie("authToken", {
        sameSite: "none", // to reach our coockies since server and client aren't on same site
        secure: true
    }).status(200).send('User logged out successfully.')
}; 

module.exports = { register, login, logout };

