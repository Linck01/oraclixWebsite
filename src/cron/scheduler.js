const cron = require('node-cron');
const utilModel = require('../models/utilModel.js');

exports.start = (manager) => {
  return new Promise(async function (resolve, reject) {
    try {
      await utilModel.updateTexts();

      cron.schedule('0 0 * * * *', async function() {
        try {
          await utilModel.updateTexts();
        } catch (e) { console.log(e); }
      });

      // await textModel.updateBotStats();
      // await textModel.updateShardStats();
      // cron.schedule('0 5 0 * * *', async function() {
      //   try {
      //     await texts.updateBotStats();
      //   } catch (e) { console.log(e); }
      // });
      //
      // cron.schedule('45 */7 * * * *', async function() {
      //   try {
      //     await texts.updateShardStats();
      //   } catch (e) { console.log(e); }
      // });

      resolve();
    } catch (e) { reject(e); }
  });
}
