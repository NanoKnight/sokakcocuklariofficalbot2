const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Natiq_Mamedov/14**")
        .setImage("https://cdn.discordapp.com/attachments/595228559191048192/595261244328378371/25317097_469743443420759_1129554599_o-1.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/595228559191048192/595261244328378371/25317097_469743443420759_1129554599_o-1.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "NatiqMamedov", true)
        .addField("Ben Kimim", `
        azerbaycanda oturen azeri çocuk  `, true)
 
   .addField("NatiqADAM", "Nam-ı değer COD fanboyu")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'natiq', 
  description: 'sokak çocukları Natiq_Mamedov/14 hakkında bilgi verir',
  usage: 'natiq'
};