const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.RichEmbed();
    hEmbed.setColor('67b58e');
    hEmbed.setTitle('Hey test');
    hEmbed.addField('Just testing');
    hEmbed.addField('No more');
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
