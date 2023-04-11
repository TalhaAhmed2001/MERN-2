const mongoose = require('mongoose')
//const cors = require('cors')

//const dotenv = require('dotenv').config()
require('dotenv').config()


const connectDb = async () => {
    console.log(process.env.DB_URI)
    try {
        const uri = process.env.DB_URI;
        console.log("uri = ",uri)
        mongoose.connect(uri);

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

