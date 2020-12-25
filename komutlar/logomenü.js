const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" Mays v12 sürümüyle sizlerle")
.setTitle(" ➤Mays logo menüsü komutları" )
 .setTimestamp()
.setDescription("**m!alev** \n **m!altın** \n **m!anime** \n **m!arrow** \n **m!banner**  \n **m!basit** \n **m!dinamik** \n **m!elmas** \n **m!green** \n  **m!habbo** \n **m!kalın** \n **m!kırmızı** \n **m!neonmavi** \n **m!sarı** \n ")
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
  name: 'logomenü',
  category: 'logomenü',
  description: 'Yardım Menüsü.',
   usage:'logomenü'
}