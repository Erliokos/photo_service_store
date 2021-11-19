const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
require('dotenv').config();
const indexRouter = require('./routes/index.router');
const signupRouter = require('./routes/signup.router');
const signinRouter = require('./routes/signin.router');
const serviceRouter = require('./routes/service.router');
const portfolioRouter = require('./routes/portfolio.router')
const lkRouter = require('./routes/lk.router')
const session = require('express-session')
const FileStore = require('session-file-store')(session)


const app = express();




app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(
   session( {
    store: new FileStore(), // хранилище сессий
    key: 'sid', // ключ куки
    secret: 'gchjtghjkl;bjkll', // шифрование id сессии
    resave: false, // пересохранение сессии (когда что-то поменяли - false)
    saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
    httpOnly: true, // нельзя изменить куки с фронта
    cookie: { expires: 24 * 60 * 60e3 },
  })
  ) 
  app.use((req, res, next) => {
    res.locals.user= req.session.user
    next()
  })

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/service', serviceRouter)
app.use('/porfolio', portfolioRouter);
app.use('/lk', lkRouter);

app.get('/logout', (req,res)=>{
  req.session.destroy();
  res.clearCookie("sid");
  res.redirect("/");
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Vsyo horosho na porty ${PORT}`));
