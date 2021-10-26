const mongoose = require('mongoose');

const { AtlasDB } = require('./db');
const { Localhost } = require('./db')

const connectDB = async () => {
    const conn = await mongoose.connect(AtlasDB, {
        useNewUrlParser: true
    })

    console.log(`MongoDB is connected sucessfully : ${Localhost}`)
}

module.exports = connectDB;