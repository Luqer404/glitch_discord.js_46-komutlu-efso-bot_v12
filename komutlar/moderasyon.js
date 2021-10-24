const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar=require("../ayarlar.js");let  p= ayarlar.prefix

exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Moderasyon komutları" )
 .setTimestamp()
.setDescription(` **${p}ping** : Botun pingini gösterir \n **${p}id** \n **${p}küfür**  \n **${p}sa-as** \n **${p}kick** \n **${p}sunucubilgi** \n **${p}sil** \n **${p}profil** \n **${p}token** \n **${p}yetkilerim** \n **{$p}link** \n   **${p}afk** `)
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}