const Discord = require('discord.js');
const client = new Discord.Client();
const help = require('./aylar.json')

var prefix = aylar.prefix;

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} adı ile giriş yaptı !`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('as!');
  }
if(!msg.content.startsWith(prefix)){
	return;
}
if(msg.content.toLowerCase() == prefix + 'help'){
	msg.channel.sendMessage('`-p müzik komutu`')

}



});
 
client.on('guildBanAdd' , (guild, user) => {
  let genel = guild.channels.find('name', 'genel');
  if (!genel) return;
  genel.send('**ŞAAAAAK BANLANDI** @'+ user.username  );
});

client.login('NTkzMTAyNDMyMzc2OTc5NTE1.XRJIFA.aEe7LQVVug3nrgDymISX3TkB7l4');