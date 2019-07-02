const Discord = require('discord.js');

exports.run = function(client, message) {
  message.channel.send("pingim **" +client.ping + "**ms!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
