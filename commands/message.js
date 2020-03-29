module.exports.run = async (bot, msg, args) => {
    if(args.length < 1) return msg.channel.send("Pas assez d'arguments.")
    var message = args.join(' ');
    msg.channel.send("message: " + message)
}

module.exports.help = {
    name: 'message'
}
