const {bot} = require('./index.js');

const fs = require('fs');
const path = require('path');

const {botCommands} = require('./bot_Commands');

const {infoOptions, scheduleOptions, opt, settingOptions} = require('./bot_Options');
const {getSchedule} = require('./transferData');

bot.setMyCommands(botCommands);

module.exports.onMessage = async msg => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const userName =  msg.from.first_name;

  if(text === '/start'){
    return bot.sendSticker(chatId,'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
      .then(bot.sendMessage(chatId, `Привіт, ${userName} 😄`));
  };

  if(text === '/options'){
    return bot.sendMessage(chatId, `Що тебе цікавить?`, infoOptions);
  };

  if(text === '/schedule'){
    return bot.sendMessage(chatId, `На котрий день тебе цікавить розклад?`, scheduleOptions);
  }

  return bot.sendMessage(chatId, `Вибач, я не розумію тебе😓`);
};

let dataFromFile = '';

getSchedule()
  .then(parsedData => JSON.parse(parsedData))
  .then(data => dataFromFile = data);


module.exports.onCallback_query = async msg => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  if(data === 'Schedule'){
    await bot.sendMessage(chatId, `На котрий день тебе цікавить розклад?`, scheduleOptions)
  };

  if(data === 'News'){
    await bot.sendMessage(chatId, `<b>Новини поки не доступні</b>`, {parse_mode : "HTML"});
  };

  if(data === 'Yes'){
    await bot.sendMessage(chatId, 'Що ти хочеш налаштувати?', settingOptions);
  };

  if(data === 'link'){
    bot.sendMessage(chatId, 'Обери предмет').then(bot.sendMessage(chatId, `bjnkm \n fcgvh \n ghbj`));
  };

  if(data === 'No'){
    return;
  };

  if(data in dataFromFile){
    let arr = [];

    for(let key in dataFromFile[data]){
      arr.push(`🕒 ${dataFromFile[data][key].time} ${dataFromFile[data][key].name} \n <a href=\"http://www.example.com/\"> посилання на заняття ⤴️</a> \n`);
    }
    
    response = `<b>Poзклад на ${data.toLowerCase()}</b>: \n${arr.join('')}`;

    await bot.sendMessage(chatId, response, {parse_mode : "HTML"});
  };

}