const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let embed = new Discord.MessageEmbed();
    embed.setTitle('Suicide');
    embed.setDescription('Oui oui');
    embed.addField('Suicide?', 'oh oui!');

    msg.channel.send(embed);
}

module.exports.help = {
    name: 'help'
}
