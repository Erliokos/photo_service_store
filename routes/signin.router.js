const router = require('express').Router();
const {USER} = require('../db/models')

router.route('/')
.get((req, res) => {
  res.render('signin')
})
.post( async (req, res) => {
  try {
    const {email, pass } = req.body
    if (email.trim()) {
    const userFromDB = await USER.findOne({where: {email}})
    res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router
