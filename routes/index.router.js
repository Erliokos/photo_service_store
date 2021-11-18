const router = require('express').Router();

router.route('/')
.get((req, res) => {
  res.render('index')
})
.post((req, res) => {
  console.log(req.body)
})

module.exports = router
