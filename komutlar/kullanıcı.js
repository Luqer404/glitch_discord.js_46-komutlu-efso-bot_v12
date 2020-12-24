const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("mays bot v12 sürümüyle yeniden sizlerle.")
.setTitle(" Destiny Kullanıcı Komutları <")
 .setTimestamp()
.setDescription(" **m!avatar** = Avatarınıza bakarsınız.  \n  **m!yetkilerim** = Yetkilerini görürsün. \n  **m!profil** = Profilini görürsün.  \n **m!sunucuresmi** = Sunucu resmini gösterir.  \n  **m!ping** = Botun Pingine Bakarsın. \n **m!id** = Birisinin id'sine Bakarsın. \n  **m!davet** = Beni Sunucuna Ekle.  \n  **m!botbilgi** = Bot istatistiklerini görürsünüz. \n  **m!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
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