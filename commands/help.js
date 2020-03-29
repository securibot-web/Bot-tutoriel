const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('1b65b5')
    .setTitle('Bot Tutoriel')
    .setDescription("L'aide de Bot Tutoriel")
    .addField('Commandes:',
    '- message: Répéter le message que vous avez entré.' +
    '- ping: Répond "pong".');
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
