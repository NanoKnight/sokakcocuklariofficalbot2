const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**NNcreature**")
        .setImage("https://cdn.discordapp.com/attachments/595228559191048192/595261847142268930/IMG_20181221_041755.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/595228559191048192/595261847142268930/IMG_20181221_041755.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "BatuhanDağdelen", true)
        .addField("Ben Kimim", `
        Kırıkkale'de Üniversite okuyan oyuncu kişi `, true)
 
   .addField("Batu ADAM", "Nam-ı değer sonic fanboy'u")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'batu', 
  description: 'sokak çocukları NNcreature hakkında bilgi verir',
  usage: 'batu'
};