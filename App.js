import express from 'express';
import bodyParser from 'body-parser';
import attedeesRoutes from './routes/attendeeRoutes.js';
import eventRouter from './routes/eventRoutes.js';
import connectDB from './db.js';

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// middleware
app.use(bodyParser.json());
app.use('/users', usersRoutes);

// get routes 
app.get("/", (req, res) => {
    res.send("Hi I am the the slash route!! LOVE ME");
});

// posts
app.post('/api/attedees', (req, res) => {
    res.send("data sent");
});

// app listener
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});