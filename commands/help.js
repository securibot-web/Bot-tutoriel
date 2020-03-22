const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(msg.content)) {
        result.push(current.pop());
    }

    if(result.length > letters.length) return message.channel.send('Il y a trop de propositions!');

    let hEmbed = new Discord.RichEmbed();
    hEmbed.setColor('67b58e');
    hEmbed.setTitle(result[0]);
    hEmbed.setDescription(`Un sondage proposé par ${msg.author}.`)
    for(let i = 0; i < result.length - 1; i++){
        hEmbed.addField(`Choix :regional_indicator_${letters[i]}:`, result[i + 1]);
    }
    msg.channel.send(hEmbed)
        .then(function (message) {
            for(let i = 0; i < result.length - 1; i++) {
                message.react(`:regional_indicator_${letters[i]}:`);
            }
            message.react(`4`);
        }).catch(function (){

        });
}

module.exports.help = {
    name: 'help'
}
