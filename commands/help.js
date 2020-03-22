const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.RichEmbed()
    .setColor('67b58e')
    .setTitle('Hey test')
    .addTitle('Just testing')
    .addTitle('No more');
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
