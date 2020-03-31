const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("Vous n'avez pas le droit de kick des membres.");
    if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.channel.send("Je n'ai pas le droit de kick des membres");
    if(args.length < 2) return msg.channel.send("Pas assez d'arguments");
    const member = msg.mentions.members.first();
    let reason = '';
    for(let i = 1; i < args.length; i++){
        reason += args[i] + ' ';
    }
    if(!member) return msg.channel.send("Le membre est invalide");
    member.kick();

    let hEmbed = new Discord.MessageEmbed()
    .setColor('#00e68a')
    .setTitle('Rapport de Kick')
    .setDescription(`Un kick a été effctué par ${msg.author}`)
    .addFields(
        { name: 'Auteur:', value: msg.author },
        { name: 'Membre:', value: member },
        { name: 'Raison:', value: reason}
    )
}

module.exports.help = {
    name: 'kick'
}
