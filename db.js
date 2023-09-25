const mongoose = require("mongoose")
const mongoUrl = "mongodb://root:example@db:27017"


const connectDB = async () => {
    try{    
        await mongoose.connect(
            mongoUrl,
             { useNewUrlParser: true },
        { useUnifiedTopology: true }

        );
        console.log("[Mongo]: Database connected.")

    }
    catch(e){

        console.log("[Mongo]: "+e.message)
        process.exit(1);
    }
    
};

module.exports = connectDB;
