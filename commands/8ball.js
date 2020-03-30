module.exports.run = async (bot, msg, args) => {
    const awnser = ["Oui, c'est sûr!", 'Peut-être, je sais pas moi!', 'Non, je ne pense pas du tout!'];
    msg.channel.send(awnser[Math.floor(Math.random() * awnser.length]));
}

module.exports.help = {
    name: '8ball'
}
