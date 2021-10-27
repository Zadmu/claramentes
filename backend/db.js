const mongoose = require("mongoose")
const URI = "mongodb+srv://zadmu:1005342131@cluster0.wkgpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("MongoDB successfully connected!")
}

module.exports = connectDB;