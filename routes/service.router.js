const router = require('express').Router();

router.route('/')
.get((req, res) => {
  res.render('service')
})

module.exports = router