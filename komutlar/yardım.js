const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Yardım Menüsü")
 .setTimestamp()
.setDescription("!eğlence = Eğlence Komutlarını Gösterir \n !moderasyon = Moderasyon Komutlarını Gösterir \n !kullanıcı = Oyun Komutlarını Gösterir.")
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