const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Logo Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **-dinamik** = Dinamik logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-altın** = Altın logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-banner** = Banner logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-basit** = Basit logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-elmas** = Elmas logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-sarı** = Sarı logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-neonmavi** = Neon mavi logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-kalın** = Kalın logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-anime** = Anime yazı tipinde logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-arrow** = Ok işaretli logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-green** = Yeşil logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-alev** = Alevli logo oluşturur. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-red** = Kırmızı logo oluşturur. <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}