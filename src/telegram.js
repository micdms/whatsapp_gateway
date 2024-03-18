const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text !== '/id') { // Perbaikan disini, harus memeriksa isi pesan bukan objek msg secara langsung
        bot.sendMessage(chatId, `Id anda ${chatId}`);
    }
});

module.exports = bot; // Meng-ekspor bot agar dapat diakses dari luar
