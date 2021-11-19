const router = require('express').Router();
const {USER} = require('../db/models')
const bcrypt = require("bcrypt");

router.route('/')
.get((req, res) => {
  res.render('signup')
})
.post( async (req, res) => {
  try {
    const { email, name , pass, phone } = req.body
    console.log(email,name,pass,phone);

    if(email && name && pass && phone){
      const cryptPas = await bcrypt.hash(pass, 10);
      const newUser = await USER.create({
        name: name,
        email: email,
        pass: cryptPas,
        phone: phone
      });
      req.session.user = { id: newUser.id, name: newUser.name };
      res.sendStatus(200)
    }else{
      res.sendStatus(400)
    }
  } catch (error) {
    console.log("this");
    res.sendStatus(500)
  }
})

module.exports = router
