const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `¡Hola, ${msg.from.first_name}! Soy tu nuevo bot 🤖`);
});

bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(msg.chat.id, `Dijiste: ${msg.text}`);
  }
});

app.get('/', (req, res) => {
  res.send('Bot activo en Render ✅');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
