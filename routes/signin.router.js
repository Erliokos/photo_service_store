const router = require('express').Router();
const {USER} = require('../db/models')

router.route('/')
.get((req, res) => {
  res.render('signin')
})
.post( async (req, res) => {
  try {
    console.log(req.body);
    const {email, pass } = req.body
    if (email.trim()) {
    const userFromDB = await USER.findOne({where: {email}})
    console.log(email, pass );
    if(userFromDB.pass === pass.trim() && userFromDB.email === email.trim()){
      req.session.user = { id: userFromDB.id, name: userFromDB.name };

      // console.log(req.session);
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  }
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router
