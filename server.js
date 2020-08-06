const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

const interests = require('./models/Interests');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const interestsRouter = require('./routes/interests');
// const newPostRouter = require('./routes/newPost');
// const getPostsRouter = require('./routes/getPosts');
// const reactionsCountRouter = require('./routes/reactionsCount');

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/interests', interestsRouter);
// app.use('/newpost', newPostRouter);
// app.use('/getPosts', getPostsRouter);
// app.use('/reactionsCount', reactionsCountRouter);
