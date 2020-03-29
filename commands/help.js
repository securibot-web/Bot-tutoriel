const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const hEmbed = new Discord.MessageEmbed()
    .setColor('1b65b5')
    .setTitle('Bot Tutoriel')
    .setDescription("L'aide de Bot Tutoriel")
    .addField('Commandes:',
    '- message: Répéter le message que vous avez entré.' +
    '- ping: Répond par "pong".')
    .setAuthor('Bot Tutoriel')
    .setFooter("J'espère que cette commande vous a aidé!")
    .setTimestamp();

    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
