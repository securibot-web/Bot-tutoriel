module.exports.run = async (bot, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send("Vous n'avez pas la permission de gérer les messages.");
    if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.channel.send("Je n'ai pas la permission de gérer les messages.");
    if(args.length > 1) return msg.channel.send("Trop d'arguments.");
    if(args.length < 1) return msg.channel.send("Pas assez d'arguments.");
    if(isNaN(args[0])) return msg.channel.send("Argument invalide.");
    let deleteCount = parseInt(args[0]);
    if(deleteCount > 99) deleteCount = 99;
    msg.channel.bulkDelete(deleteCount + 1, true);
    msg.channel.send(`**${args[0]}** messages supprimés.`).then(reply => {reply.delete({ timeout: 5000 });});
}

module.exports.help = {
    name: 'clear'
}
