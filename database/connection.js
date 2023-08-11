const mongoose = require('mongoose');


module.exports = async () => {
    try{
        const connection = await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
        console.log("DB connected");
        return connection
    } catch (error) {
        console.log("Error connecting to DB", error);
        throw new Error(error);
    }
}