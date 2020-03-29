const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    var hEmbed = Discord.MessageEmbed()
        .setTitle('Bot Tutoriel')
        .setDescription("Voici l'aide de Bot Tutoriel.")
        .setColor('348e8e')
        .addField('Commandes:',
            '- message: Répéter ce que vous avez dit.\n' +
            '- ping: Répond "pong".')
        .setAuthor('Bot Tutoriel')
        .setFooter("J'espère que ça vous aidera!")
        .setTimestamp();

    msg.chanel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
