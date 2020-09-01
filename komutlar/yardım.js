const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny Bot v12 Sürümüyle Yeniden Sizlerle.")
.setTitle("<a:hypesquad:742698007262396426> Destiny'in yardım menüsüne hoşgeldin! <a:hypesquad:742698007262396426>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **!eğlence** = Eğlence komutlarını açarsınız. <a:developeremoji:749525084586115153>  \n <a:yan:750065080741134407> **!moderasyon** = Moderasyon komutlarını açarsınız. <a:developeremoji:749525084586115153>  \n <a:yan:750065080741134407> **!kullanıcı** = Kullanıcı komutlarını açarsınız. <a:developeremoji:749525084586115153> ")
.setImage("https://media.giphy.com/media/J2URvInBQo4ZjBslPe/giphy.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}