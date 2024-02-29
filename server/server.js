require('dotenv').config({ path: __dirname + '/configs/config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');
const userRoute = require('./routes/userRoute');


const app = express();
app.use(express.json());
app.use(cors());

// app.use(cookieParser());

// Connect to mongodb
// const URI = process.env.MONGODB_URL;
const URI = "mongodb+srv://vohoankhangw12:Khang123@cluster0.dlbfji3.mongodb.net/zigvy-exam";
const connectDB = async () => {
    await mongoose
        .connect(URI)
        .then(() => console.log('Connected to mongodb'))
        .catch((err) => {
            console.log(err);
        });
};
connectDB();

// Routes
app.use('/api/post', postRoute);
app.use('/api/user', userRoute);
app.use('/api/comment', commentRoute);

// Listening
// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
