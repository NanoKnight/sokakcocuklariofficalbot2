const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const mesaj = args.slice(0).join(' ')
	if (mesaj < 1 ) {message.reply("yazmam için bir şey tanımla")}

		else {
			message.delete();
			message.channel.send( mesaj )
		}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'Bota istediğiniz yazdırır ',
  usage: 'yaz <mesaj>'
};
