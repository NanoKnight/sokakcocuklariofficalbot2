const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**- Master -**")
        .setImage("https://cdn.discordapp.com/attachments/595228559191048192/595596137747054602/IMG_20181216_022118.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/595228559191048192/595596137747054602/IMG_20181216_022118.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "Yiğit Bal", true)
        .addField("Ben Kimim", `
        Ankarada oturan ve tayfunun eski modu olan kişi `, true)
 
   .addField("Yiitcik", "MGS fanboy'u")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yiit', 
  description: 'sokak çocukları - Master - hakkında bilgi verir',
  usage: 'yiit'
};