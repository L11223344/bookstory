const dotenv = require('dotenv');
dotenv.config()


module.exports = {
    "AtlasDB": process.env.MONGODB_URL,
    "Localhost": 'Localhost'
}