import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

//// middlewear
app.use(bodyParser.json());

/// get routes 
app.get("/",(req,res)=>{
    res.send("Hi I am the the slash route!! LOVE ME")
});

/// app listener
app.listen(PORT,()=>{
    console.log(`I am running on port:http://localhost:${PORT}`);
});