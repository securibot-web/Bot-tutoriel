const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config');

bot.on('ready', async () => {
    console.log('Le bot est lancé.');
    bot.user.setActivity('Bot tutoriel. Bonjour!');
});

bot.on('message', async (msg) => {
    if(msg.content == 'bonjour'){
        msg.channel.send('bonjour!')
    }
})

bot.login(config.token);
