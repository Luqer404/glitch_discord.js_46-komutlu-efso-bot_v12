const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny Bot v12 Sürümüyle Yeniden Sizlerle.")
.setTitle("Destiny'in yardım menüsüne hoşgeldin!")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **!eğlence** = Eğlence komutlarını açarsınız. \n <a:yan:750065080741134407> **!moderasyon** = komutlarını açarsınız. \n <a:yan:750065080741134407> **!kullanıcı** = Kullanıcı komutlarını açarsınız.")
.setImage("https://cdn.discordapp.com/attachments/740182427426881538/750289660693184562/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
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