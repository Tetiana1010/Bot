const TelegramAPI = require('node-telegram-bot-api');
const token = '1860689732:AAH5jV7D-jTiWUc-qIdfisk6Ef6AlCyha04';
const bot = new TelegramAPI(token, {polling: true});

module.exports = {bot};

const fs = require('fs');
const path = require('path');

const botEventHandler = require('./bot_EventHandler');

bot.on('message', botEventHandler.onMessage);

bot.on('callback_query', botEventHandler.onCallback_query);
