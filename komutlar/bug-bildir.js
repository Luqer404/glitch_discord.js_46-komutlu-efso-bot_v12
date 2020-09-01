const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('Lütfen bir Bug Gırınız!')

const embed = new Discord.MessageEmbed()
.setTitle("İstek Kod")
.setColor('BLUE')
.setDescription(`**Bug Kanal** ${message.channel.name} \n **Bug Bıldırılen Sunucu** \`${message.guild.name}\` \n **Bugu Bıldıren Kullanıcı** <@${message.author.id}> \n **Bug:** \`${istek}\``)
client.channels.cache.get('744536225230094360').send(embed)
  
message.channel.send(" Bug bildiriminiz gönderildi.").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}