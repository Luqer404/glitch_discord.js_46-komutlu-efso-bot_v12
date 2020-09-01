const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Moderasyon Komutları")
 .setTimestamp()
.setDescription("!ban = Birisine ban atarsınız \n !kick = Birisine kick atarsınız. \n !duyuru = Duyuru Yaparsınız \n !küfür = Küfür engel \n !reklam = Reklam engel.\n !slowmode = Yavaş Modu Ayarlarsınız. \n !forceban = Birisine İD Ban Atarsınız. \n !unban = Birisinin Banını Açarsınız. \n !sa-as = Bot Biri Sa Dedimi Cevap Verir. \n !sunucubilgi = Sunucu Bilgilerini Görürsün. \n !üyedurum = Üyelerin Durumlarını Görürsün.")
.setImage("https://media.giphy.com/media/J2URvInBQo4ZjBslPe/giphy.gif")
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