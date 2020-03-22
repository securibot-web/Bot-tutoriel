const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const letters = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']

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
        hEmbed.addField(`Choix ${letters[i]}:`, result[i + 1]);
    }
    msg.channel.send(hEmbed)
        .then(function (message) {
            for(let i = 0; i < result.length - 1; i++) {
                message.react(letters[i]);
            }
        }).catch(function (){

        });
}

module.exports.help = {
    name: 'help'
}
