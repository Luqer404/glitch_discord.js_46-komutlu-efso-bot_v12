const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Destiny Yardım Menüsü")
 .setTimestamp()
.setDescription("!eğlence = Eğlence komutlarını açarsınız. \n !moderasyon = komutlarını açarsınız. \n !kullanıcı = Kullanıcı komutlarını açarsınız.")
.setImage("")
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