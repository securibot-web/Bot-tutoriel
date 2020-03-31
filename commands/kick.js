module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("Vous n'avez pas la permission de kick des membres");
    if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.channel.send("Je n'ai pas la permission de kick des membres");
    if(args.length > 1) return msg.channel.send("Trop d'arguments.");
    const member = msg.mentions.member.first();
    member.kick();
}

module.exports.help = {
    name: 'kick'
}
