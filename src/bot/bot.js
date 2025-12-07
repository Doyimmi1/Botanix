const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const ms = require('ms');
const { DateTime } = require('luxon');
const humanizeDuration = require('humanize-duration');
const config = require('../../config');

class Bot extends Client {
  constructor(options) {
    super(options);
    this.commands = new Collection();
    this.prefix = config.PREFIX_COMMANDS.DEFAULT_PREFIX;

    this.loadExamples();
  }

  async start(token) {
    // Example: fetch API usage
    const res = await fetch('https://api.github.com');
    if (res.ok) {
      console.log('GitHub API status:', await res.json());
    }

    // Example: humanize duration
    console.log('Example cooldown:', humanizeDuration(ms('2h')));

    // Example: luxon date
    console.log('Current time (Luxon):', DateTime.now().toLocaleString(DateTime.DATETIME_FULL));

    return this.login(token);
  }

  loadExamples() {
    // Placeholder for command/event loading
    console.log('Loading commands and events...');
  }
}

module.exports = Bot;
