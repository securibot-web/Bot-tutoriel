const Discord = require('discord.js');
const Canvas = require('canvas');

const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
const time = 60000
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

    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const colors = ['ff4d4d', 'ff9933', 'ffd11a', '39e600', '00e68a', '00e6e6', '33ccff', '6699ff', '9966ff', 'ff66ff'];
    const dataLength = pollInfo.length - 1;

    msg.channel.send(pEmbed).then(function (reply) {
        for(let i = 0; i < pollInfo.length - 1; i++){
            setTimeout(function () {
                reply.react(emojis[i]);
            }, 2000);
        }
        const filter = (reaction) => {
            return emojis.includes(reaction.emoji.name);
        }
        const collector = new Discord.ReactionCollector(reply, filter, { time: time });
        collector.on('collect', (reaction, reactionCollector) => {
            for(let i = 0; i <= emojis.length; i++) {
                if(emojis[i] === reaction.emoji.name) data[i] = reaction.count;
            }
        });
    });

    setTimeout(function() {
        for(let i = 0; i <= data.length; i++){
            data[i] -= 1;
        }

        const canvas = Canvas.createCanvas(1200, 1000);
        const ctx = canvas.getContext('2d');

        const multiplier = 1000 / Math.max(...data);

        ctx.beginPath();
        ctx.fillStyle = '666666';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = '404040';
        ctx.fillRect(0, 0, 100, canvas.height);

        for(let i = 0; i < dataLength; i++){
            ctx.beginPath();
            ctx.fillStyle = colors[i];
            ctx.fillRect(100, i * 100 + 100, data[i] * multiplier / 1.1, 50);
        }

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `${pollInfo[0].toLowerCase().split(' ').join('-')}-poll-graph.png`);

        msg.channel.send(`Voici le graphique de ${pollInfo[0]}!`, attachment)
    }, time);
}

module.exports.help = {
    name: 'poll'
}
