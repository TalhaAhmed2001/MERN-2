const mongoose = require('mongoose')
//const cors = require('cors')

require('dotenv').config()


const connectDb = async () => {
    console.log(process.env.DB_URI)
    try {
        const uri = process.env.DB_URI;
        mongoose.connect("mongodb+srv://talha:talhanator2000@cluster0.rg67mk9.mongodb.net/?retryWrites=true", { useNewUrlParser: true });
        //mongoose.connect(uri, { useNewUrlParser: true });

        const conn = mongoose.connection;
        conn.once('open', () => {
            console.log("MongoDB connection established successfully")
        })

    }
    catch (error) {
        console.log(error)
    }
}


module.exports = connectDb 

