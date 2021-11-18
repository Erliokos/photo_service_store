const router = require('express').Router();

router.route('/')
.get((req, res) => {
  res.render('signup')
})
.post( async (req, res) => {
const newUser = await USER.create(req.body)
})

module.exports = router
