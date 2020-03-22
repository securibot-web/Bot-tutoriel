const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(msg.content)) {
        result.push(current.pop());
    }

    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }

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
