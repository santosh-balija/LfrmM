const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

// const interests = require('./models/Interests/interests');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const newPostRouter = require('./routes/newPost');
const getPostsRouter = require('./routes/getPosts');

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/newpost', newPostRouter);
app.use('/getPosts', getPostsRouter);
