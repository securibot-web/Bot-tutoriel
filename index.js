const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config');

bot.on('ready', async () => {
    console.log('Le bot est lancé.');
    bot.user.setActivity('Bot tutoriel. Bonjour!');
});

bot.on('message', async (msg) => {
    if(msg.startswith(config.prefix) && !msg.author.bot){
        cmdArray = msg.split();
        cmd = cmdArray[0];
        args = cmdArray.slice(1)

        message.channel.send(cmd)
    }
})

bot.login(config.token);
