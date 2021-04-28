const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

// Setup on port 5000
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Mongoose URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Establish a connection. Log a message on success.
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Setup routes for our models.
const movieRouter = require('./routes/api/movies');
const userRouter = require('./routes/api/users');
const actorRouter = require('./routes/api/actors');
const authRouter = require('./routes/api/auth');

// Routes to send requests through.
app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/actors', actorRouter);
app.use('/auth', authRouter);





app.listen(port, () => {
    console.log("Server is running on port:" + port)
});