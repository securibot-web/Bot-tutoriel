const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', asycn () =>{
  bot.user.setActivity('Bot tutoriel. Bonjour!');
});

bot.login(process.env.BOT_TOKEN);
