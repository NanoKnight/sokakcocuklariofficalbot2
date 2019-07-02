const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**NanoKnight**")
        .setImage("https://cdn.discordapp.com/attachments/471453098175496212/556480194148564993/20190303_035841.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/471453098175496212/556480194148564993/20190303_035841.jpg")
        .setColor(0x00AE86)
        .addField("TAM AD", "AhmetLütfü", true)
        .addField("Ben Kimim", `
        Gebzede oturan oyuncu kişi,DMC fanboy'u `, true)
 
   .addField("Nanoş", "Nam-ı değer Hyde fanboy'u")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'nano', 
  description: 'sokak çocukları NanoKnight hakkında bilgi verir',
  usage: 'nano'
};