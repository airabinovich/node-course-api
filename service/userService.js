const User = require("../database/model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async ({email, password}) => {
    try {
        const user = await User.findOne({email});
        if (user) {
            throw new Error("duplicated email");
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({email, password});
        const result = await newUser.save();
        return result.toObject();
    } catch (error) {
        console.log("Error signing up", error);
        throw new error;
    }
}

module.exports.login = async ({email, password}) => {
    try {
        const user = await User.findOne({email});
        if (!user) {
            throw new Error("User not found");
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            throw new Error("Invalid password");
        }
        const token = await jwt.sign({id: user._id}, process.env.SECRET_KEY || "default-secret-key", {expiresIn: '1d'})
        return {token};
    } catch (error) {
        console.log("Error logging in", error);
        throw error;
    }
}
