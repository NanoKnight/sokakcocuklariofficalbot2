const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**umuthun**")
        .setImage("https://cdn.discordapp.com/attachments/595228559191048192/595228750145126415/IMG_20190303_035058.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/595228559191048192/595228750145126415/IMG_20190303_035058.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "Umutcan Girgin", true)
        .addField("Ben Kimim", `
        Bursada oturan oyuncu kişi  `, true)
 
   .addField("umuş", "Resident evil fanboy'u")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'umut', 
  description: 'sokak çocukları umuthun hakkında bilgi verir',
  usage: 'umut'
};