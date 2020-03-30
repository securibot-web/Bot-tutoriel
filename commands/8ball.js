module.exports.run = async (bot, msg, args) => {
    const awnser = ["Oui, c'est sûr!", "Hmmmm je ne sais pas...", "Non, je suis sûr que non!"];
    msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
}

module.exports.help = {
    name: '8ball'
}
