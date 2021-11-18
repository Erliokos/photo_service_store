const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
require('dotenv').config();
const indexRouter = require('./routes/index.router');
const signupRouter = require('./routes/signup.router');
const signinRouter = require('./routes/signin.router');
const session = ('express-session')

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Vsyo horosho na porty ${PORT}`));
