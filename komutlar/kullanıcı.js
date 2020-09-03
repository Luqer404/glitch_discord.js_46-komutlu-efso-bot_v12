const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Kullanıcı Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **-avatar** = Avatarınıza bakarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-yetkilerim** = Yetkilerini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-profil** = Profilini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-sunucuresmi** = Sunucu resmini gösterir. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-ping** = Botun Pingine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-id** = Birisinin id'sine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-davet** = Beni Sunucuna Ekle. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}