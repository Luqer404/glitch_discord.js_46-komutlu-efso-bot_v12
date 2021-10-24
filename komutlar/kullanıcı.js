const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar=require("../ayarlar.js");
let p = ayarlar.prefix

exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(" Kullanıcı Komutları ")
 .setTimestamp()
.setDescription(` **${p}avatar** = Avatarınıza bakarsınız.  \n  **${p}yetkilerim** = Yetkilerini görürsün. \n  **${p}profil** = Profilini görürsün.  \n **${p}sunucuresmi** = Sunucu resmini gösterir.  \n  **${p}ping** = Botun Pingine Bakarsın. \n **${p}id** = Birisinin id'sine Bakarsın. \n  **${p}botbilgi** = Bot istatistiklerini görürsünüz.  `)
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