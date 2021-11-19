const router = require('express').Router();
const {ZAKAZ, ZAKAZ_SERVICE, SERVICE, USER} = require('../db/models')

router.route('/')
.get((req, res) => {
  res.render('lk')
})

module.exports = router
