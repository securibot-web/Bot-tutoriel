const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('009999')
    .setTitle('Aide de Bot Tutoriel')
    .setDescription('Tout ce que vous avez besoin de savoir sur Bot Tutoriel')
    .addField('Commandes:',
    '- message: Répéter un message choisi.' +
    '- say: Répondre "pong".')
    .addField('Préfixe:', 'Utilisez le préfixe ! avant chaque commande de Bot Tutoriel')
    .setFooter("J'espère que ça vous sera utile!");
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
