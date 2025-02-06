const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log('Welcome, MongoDB is now connected!!');
    } catch (e) {
        console.error('Oh no! The database connection failed:', e.message);
    }
}
module.exports = connectDB;