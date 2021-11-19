process.env.NTBA_FIX_319 = 1;
const TelegramApi = require('node-telegram-bot-api')
const fs = require('fs');
const token = '2121661024:AAF01Bk027fVUzGMle2iAxbncitNCUV2S1E'
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const bot = new TelegramApi(token, { polling: true })

async function createContract (orderData) {
// let orderData = {name: 'dsdsdsds', order: 'фото на снилс', price: '5400 рублей'}
let lorem = `

Я, ${orderData.name}, совершил заказ  ${orderData.order} у ООО "СуперФотоВидеоЭкшнСтудияПродакшен" на общую сумму  ${orderData.price} рублей`
doc.pipe(fs.createWriteStream(`./contracts/${orderData.name}.pdf`)); // write to PDF
doc.font(`./arial.ttf`)
doc.fontSize(25).text('Договор')
.fontSize(14).text(lorem, {
  width: 410,
  align: 'justify'
})
doc.end();

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  console.log(chatId);
await bot.sendDocument(chatId, `./contracts/${orderData.name}.pdf`);
})



// 161902087
}


module.exports = createContract
