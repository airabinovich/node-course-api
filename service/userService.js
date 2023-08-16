const User = require("../database/model/user");
const bcrypt = require ("bcrypt");

module.exports.signup = async ({email, password}) => {
    try {
        const user = await User.findOne({email})
        if (user) {
            throw new Error("duplicated email")
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({email, password})
        const result = await newUser.save();
        return result.toObject();
    } catch (error) {
        console.log("Error signing up", error)
        throw new Error(error);
    }
}