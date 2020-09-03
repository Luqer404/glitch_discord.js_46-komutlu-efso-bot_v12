const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Moderasyon Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **-sil** = Yazdığınız miktarda mesajı siler. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-ban** = Etiketlediğiniz kişiyi banlarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-duyuru** = Bota duyuru yaptırırsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-küfür** = Küfür engel sistemini açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-reklam** = Reklam engel sistemi açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-slowmode** = Yavaş modu ayarlarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-forceban** = Birisine id ban atarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-unban** = Birisinin banını açarsınız. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-sa-as** = Bot biri sa dedimi cevap verir. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-üyedurum** = Üyelerin durumlarını görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-çekiliş** = Çekiliş başlatırsınız. <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}