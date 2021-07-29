const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'scheduleData.json');

module.exports.getSchedule = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, (err, data) => {
      if(err){
        reject(err);
      } else {
        resolve(data);
      };
    });
  });
};

