const mongoose = require("mongoose")
const mongoUrl = "mongodb://localhost:27017"

const connectDB = async () => {
    try{
        await mongoose.connect(
        mongoUrl

        );
        console.log("[Mongo]: Database connected.")

    }
    catch(e){
        console.log(e.message)
        process.exit(1);
    }
    finally{
        console.log("[Mongo]: Database connected ???")
    }
};

module.exports = connectDB;
