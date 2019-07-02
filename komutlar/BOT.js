const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**BOT**")
        .setImage("https://cdn.discordapp.com/attachments/556908899874373654/593957766234767369/HYDE_-_MAD_QUALIA_1.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/556908899874373654/593957766234767369/HYDE_-_MAD_QUALIA_1.jpg")
        .setColor(0x00AE86)
        .addField("Gerçek kimliği", "HYDE", true)
        .addField("Komularımı nasıl öğrenirsin?", `
        -yardım `, true)
   .addField("info", `Bu bot nano adam tarafından sokak çocukları için yazılmıştır`, true)
   .addField("Ben NanoAdam", "selam canım şııp")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'bot', 
  description: 'bot hakkında bilgi verir',
  usage: 'bot'
};