const Discord = require('discord.js');

const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('Seuls les administrateurs peuvent faire des sondages');

    const re = /"(.*?)"/g;
    let pollInfo = [];
    let current;
    while(current = re.exec(msg.content)){
        pollInfo.push(current.pop());
    }

    if(pollInfo.length < 2) return msg.channel.send("Pas assez d'informations.");

    let choices = '';
    for(let i = 1; i < pollInfo.length; i++) {
        choices += `Choix ${i}: ${pollInfo[i]}\n`
    }

    let pEmbed = new Discord.MessageEmbed()
    .setColor('2f56aa')
    .setTitle(pollInfo[0])
    .setDescription(`Un sondage réalisé par ${msg.author}`)
    .addField('Choix:', choices)
    .setFooter('Vous pouvez participer au sondage en réagissant en bas.')
    .setTimestamp();

    msg.channel.send(pEmbed).then(function (reply) {
        for(let i = 0; i < pollInfo.length - 1; i++){
            setTimeout(function () {
                reply.react(emojis[i]);
            }, 2000)
        }
    });
}

module.exports.help = {
    name: 'poll'
}
