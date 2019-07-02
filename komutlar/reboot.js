const Discord = require('discord.js');

exports.run = function(client, message) {

 message.channel.send("**Bot yeniden başlatılıyor :repeat:  **").then(msg => {
 	console.log("[BOT] yeniden başlatılıyor");
 	process.exit(0);
 });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır not bunu sadece modlar kullanabilir',
  usage: 'reboot'
};
