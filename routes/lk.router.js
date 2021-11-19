const router = require('express').Router();
const {ZAKAZ, ZAKAZ_SERVICE, SERVICE, USER} = require('../db/models')

router.route('/')
.get(async (req, res) => {
  const aaa = await ZAKAZ_SERVICE.create({zakaz_id:2, service_id:3})
  // const aaa = await ZAKAZ.findAll({ 
  //   where: {user_id: req.session.user.id}
  // })
  console.log(aaa);
  res.render('lk')
  
})
.post((req, res) => {
  console.log(req.body)
})

module.exports = router
