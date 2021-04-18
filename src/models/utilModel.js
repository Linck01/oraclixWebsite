const db = require('./db.js');
const config = require('../const/config.js');
exports.texts = {};

exports.updateTexts = () => {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await db.fetch(null,'/api/util/texts/','get');

      let textsObj;
      if (res.error)
        return reject(res.error);
      else
        textsObj = res.results;

      for (key in textsObj)
        exports.texts[key] = textsObj[key];

      let cmd,command,tmp;

      for (cmd in exports.texts.discord.commands){
        command = exports.texts.discord.commands[cmd];
        for (tmp in command.command)
          command.command[tmp] = '??' + command.command[tmp];
        for (tmp in command.example)
          command.example[tmp] = '??' + command.example[tmp];
      }

      resolve();
    } catch (e) { return reject(e); }
  });
}

/*
exports.botStats = {};
exports.shardStats = {};

exports.updateBotStats = () => {
  return new Promise(async function (resolve, reject) {
    try {
      const stats = await backupApi.call({},'/api/getBotStats','post');
      if (stats)
        exports.botStats = stats;

      resolve();
    } catch (e) { return reject(e); }
  });
}

exports.updateShardStats = () => {
  return new Promise(async function (resolve, reject) {
    try {
      const stats = await backupApi.call({tablename: 'gl_shard',conditions: {},from: 0,to: 5000},'/api/getMulti','post');
      if (stats)
        exports.shardStats = stats;

      resolve();
    } catch (e) { return reject(e); }
  });
}
*/
