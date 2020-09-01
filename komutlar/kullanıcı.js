const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:hypesquad:742698007262396426> Destiny Kullanıcı Komutları <a:hypesquad:742698007262396426>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **!avatar** = Avatarınıza bakarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!yetkilerim** = Yetkilerini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!profil** = Profilini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!sunucuresmi** = Sunucu resmini gösterir. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!ping** = Botun Pingine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!id** = Birisinin id'sine Bakarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!davet** = Beni Sunucuna Ekle. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!botbilgi** = Bot istatistiklerini görürsünüz. <a:developeremoji:749525084586115153>")
.setImage("https://media.giphy.com/media/W2Pi7elRIJ3HZmSnhm/giphy.gif")
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