const infoOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Розклад', callback_data: 'Schedule'}],[{text: 'Новини', callback_data: 'News'}]
    ]
  })
};

const scheduleOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Понеділок', callback_data: 'Понеділок'}, {text: 'Вівторок', callback_data: 'Вівторок'}],
      [{text: 'Середа', callback_data: 'Середа'}, {text: 'Четвер', callback_data: 'Четвер'}],
      [{text: "П'ятниця", callback_data: "Пятниця"}]
    ]
  })
};

const opt = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Так', callback_data: 'Yes'}],[{text: 'Ні', callback_data: 'No'}]
    ]
  })
};

const settingOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Посилання на заняття', callback_data: 'link'}],[{text: 'Час занять', callback_data: 'time'}]
    ]
  })
};


module.exports = {
  infoOptions,
  scheduleOptions,
  opt,
  settingOptions
}


