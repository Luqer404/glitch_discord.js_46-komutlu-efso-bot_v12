const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar=require("../ayarlar.js");

const p=ayarlar.prefix

exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("logo menüsü komutları" )
 .setTimestamp()
.setDescription(` **${p}altın** \n **${p}anime** \n **${p}arrow** \n **${p}banner**   \n **${p}green** \n  **${p}habbo** \n **${p}kalın** \n  **${p}neonmavi** \ `)
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