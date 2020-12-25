const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Mays v12 sürümüyle sizlerle")
.setTitle(" ➤Mays Moderasyon komutları" )
 .setTimestamp()
.setDescription(" m!ping \n m!forceban \n m!id \n m!küfür \n m!botbilgi \n m!kick \n m!sunucubilgi \n m!sil \n m!profil \n m!token \n m!yetkilerim")
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