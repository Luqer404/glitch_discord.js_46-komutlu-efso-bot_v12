const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny'in yardım menüsüne hoşgeldin! <a:Yldz:742698148329291826>")
 .setTimestamp()
.addField("<a:destinyhype:751090021859196968> **-eğlence**")
.addField("")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
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