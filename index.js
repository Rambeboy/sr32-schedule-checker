require('dotenv').config();
const cron = require('cron');
const colors = require('colors');
const { checkScheduleAndNotify } = require('./src/scheduleChecker');

const job = new cron.CronJob(
  '0 0 * * *',
  checkScheduleAndNotify,
  null,
  true,
  'Asia/Jakarta'
);

job.start();

console.log(colors.cyan('Schedule checker is running...'));
