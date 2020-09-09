const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

// Setup on port 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongoose URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

// Establish a connection. Log a message on success.
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Setup routes for our models.
const movieRouter = require('./routes/movies');
const userRouter = require('./routes/users');
const actorRouter = require('./routes/actors');

// When someone goes to /movies they will be take to our movies router.
app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/actors', actorRouter);



app.listen(port, () => {
    console.log("Server is running on port:" + port)
});