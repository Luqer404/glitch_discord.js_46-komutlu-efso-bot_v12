const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Moderasyon Komutları")
 .setTimestamp()
.setDescription("!ban = Birisine ban atarsınız \n !kick = Birisine kick atarsınız \n !forceban = Birisine id ban atarsınız \n !duyuru = Duyuru Yaparsınız \n !küfür = Küfür engel \n !reklam = Reklam engel")
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