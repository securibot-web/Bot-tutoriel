const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async () => {
    console.log('Le bot est lancé.');
    bot.user.setActivity('Bot tutoriel. Bonjour!');
});

bot.on('message', async (msg) => {
    if(msg.content.startsWith(config.prefix) && !msg.author.bot){
        cmdArray = msg.content.substring(1).split()
        cmd = cmdArray[0]
        args = cmdArray.slice(1)

        msg.channel.send(cmd)
        for(let i = 0; i < args.lenght; i++){
            msg.channel.send(args[i])
        }
    }
});

bot.login(config.token);
