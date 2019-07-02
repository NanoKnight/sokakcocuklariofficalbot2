const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const msgsayi = args.slice(0).join(' ');

 

 if (msgsayi.length < 1){

 	return message.reply ("**Silmem için bir miktar belirt**")
   
  } 

 else
 {
     message.channel.bulkDelete(msgsayi);
	 message.channel.send("**" +msgsayi+ " tane mesaj silindi**").then(msg =>{
	 	msg.delete("5000")
	 });

 }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirtildiği kadar mesaj siler',
  usage: 'sil <miktar>'
};
