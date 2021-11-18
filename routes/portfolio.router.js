const router = require('express').Router();

router.route('/')
.get((req, res) => {
  res.render('portfolio')
})

module.exports = router
