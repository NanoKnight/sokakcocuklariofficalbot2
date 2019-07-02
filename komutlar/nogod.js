const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**SevanNişanyan**")
        .setImage("https://cdn.discordapp.com/attachments/595228559191048192/595261243183595542/JPEG_20190701_030527.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/595228559191048192/595261243183595542/JPEG_20190701_030527.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "Ali Mert İnal", true)
        .addField("Ben Kimim", `
        Almanyada okuyan star wars fanboy'u  `, true)
 
   .addField("Nogod", "Önce burnun sesi geliy")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sevan', 
  description: 'sokak çocukları SevanNişanyan hakkında bilgi verir',
  usage: 'sevan'
};