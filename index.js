require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk').default;
const figlet = require('figlet');
const cliProgress = require('cli-progress');
const Bot = require('./src/bot/bot');
const config = require('./config');

console.log(chalk.cyan(figlet.textSync('Botanix', { horizontalLayout: 'full' })));

const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
progress.start(100, 0);

(async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    progress.update(50);

    // Initialize bot
    const bot = new Bot({
      intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildMembers']
    });
    await bot.start(process.env.TOKEN);

    progress.update(100);
    progress.stop();
    console.log(chalk.green('Bot started successfully!'));
  } catch (error) {
    progress.stop();
    console.error(chalk.red('Error while starting the bot:'), error);
  }
})();
