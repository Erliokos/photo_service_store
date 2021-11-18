const router = require('express').Router();
const {USER} = require('../db/models')

router.route('/')
.get((req, res) => {
  res.render('signup')
})
.post( async (req, res) => {
  try {
    const {email, name , pass, phone} = req.body
    if(email.trim(), name.trim() , pass.trim(), phone.trim()){
      const newUser = await USER.create(req.body)
      res.sendStatus(200)
    }else{
      res.sendStatus(400)
    }
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router
