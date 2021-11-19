const createContract = require('../dogovor');
const router = require('express').Router();
const { SERVICE, ZAKAZ, USER, ZAKAZ_SERVICE } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const serv = await SERVICE.findAll();
    res.render('service', { serv });
  })
  .post(async (req, res) => {
    if (res.locals.user && req.body) {
      const arr = Object.keys(req.body);
      let total_price = 0;
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let tt = await SERVICE.findOne({ where: { name: arr[i] } });
        total_price = total_price + tt.price;
      }
      console.log(total_price);
      const zakaz = await ZAKAZ.create({
        user_id: res.locals.user.id,
        total_price,
        status: 'неоплачен',
      });
      console.log('==================', zakaz);
      let orderData = await {
        name: res.locals.user.name,
        price: total_price,
        order: arr.join(', '),
      };
      console.log('21212121212121212121', orderData);
      createContract(orderData)
      res.redirect('/');
    } else if (res.locals.user) {
      res.redirect('/signin');
    }
  });

module.exports = router;
