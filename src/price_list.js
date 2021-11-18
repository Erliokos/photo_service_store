const fs = require('fs');
const path = require('path');

const priceList = fs.readFileSync(path.join(__dirname, 'price_list.txt'), 'utf8').trim().split('\n').map(el => el.split(','))



module.exports = priceList
