const Discord = require('discord.js');

exports.run = function(client, message, args) {

  const embed = new Discord.MessageEmbed()
  .setTitle(`${client.commands.size} Komutum Var!!! `)
  .setColor("RANDOM")
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["komutlar","komut-sayısı"], 
  permLevel: 0
};
exports.help = {
  name: 'komutsayı',
  description: 'taslak', 
  usage: 'kullanıcıbilgi'
};
