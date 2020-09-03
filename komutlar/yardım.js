const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny Bot v12 Sürümüyle Yeniden Sizlerle.")
.setTitle("<a:hypesquad:742698007262396426> Destiny'in yardım menüsüne hoşgeldin! <a:hypesquad:742698007262396426>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **!eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:yan:750065080741134407> **!moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:yan:750065080741134407> **!kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/735861222791971016/751077508207607847/Destiny.gif")
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