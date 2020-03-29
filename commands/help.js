const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('2f42af')
    .setTitle('Neptunium Help')
    .setDescription('Everything you need to know about Neptunium')
    .addField('Prefix:', 'To type a Neptunium command, type "n!" before the command name.')

    .addField('Commands:',
    ' - help: Do I really need to tell you how that command works?\n' +
    ' - say: Send a message to a channel from another one!\n' +
    ' - clear: Automatically remove a certain amount of messages!')

    .addField('Commands syntax:',
    ' - `<>`: Arguments between `<` and `>` are not optional.\n' +
    ' - `[]`: Arguments between `[` and `]` are optional.');
    msg.channel.send(hEmbed);
}

module.exports.help = {
    name: 'help'
}
