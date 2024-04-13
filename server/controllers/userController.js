import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    try {
        let user = new User({
            firstname,
            lastname,
            email,
            password: hashPassword,
        })

        await user.save();

        res.status(201).json({
            success: true,
            user,
            message: "User created sucessfully"
        });
    }
    catch (err) {
        res.status(500).json(err.message);
    }

}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        const validUser = await User.findOne({ email });
        if (!validUser) return res.status(400).json("Invalid Email or Password");

        const vaildPassword = bcryptjs.compareSync(password, validUser.password);
        if (!vaildPassword) return res.status(400).json('Invalid Email or Password');

        const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest)

    } catch (error) {
        next(error)
    }
}


export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

            const { password: pass, ...rest } = user._doc;
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest)

        } else {
            const genratePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashPassword = bcryptjs.hashSync(genratePassword, 10);
            const newUser = new User({ firstname: req.body.firstname, lastname:req.body.lastname,  email: req.body.email, password: hashPassword, avatar: req.body.photo })

            await newUser.save();

            const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

            const { password: pass, ...rest } = newUser._doc;
            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest)
        }

    } catch (error) {
        next(error);
    }
}


export const signout = async(req, res, next) =>{
   try {
    res.clearCookie('access_token');
    res.status(200).json('Logged out')
   } catch (error) {
     next(error)
   }
}