const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("RANDOM")
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        .setDescription("[istediğiniz avatar]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)



}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

module.exports.help = {
    name: "pp"
  
}