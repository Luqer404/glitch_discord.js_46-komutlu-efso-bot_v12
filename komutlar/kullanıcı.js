const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Kullanıcı Komutları")
 .setTimestamp()
.setDescription("!avatar = Avatarınıza bakarsınız. \n !yetkilerim = Yetkilerini görürsün. \n !profil = Profilini görürsün. \n !sunucuresmi = Sunucu resmini gösterir. \n !ping = Botun Pingine Bakarsın. \n !id = Birisinin İD Sine Bakarsın. \n !davet = Beni Sunucuna Ekle.")
.setImage("https://cdn.discordapp.com/attachments/740182427426881538/750289660693184562/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
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