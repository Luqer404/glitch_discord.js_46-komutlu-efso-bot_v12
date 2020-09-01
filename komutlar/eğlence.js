const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Eğlence Komutları")
 .setTimestamp()
.setDescription("**!tersyazı** = Bir Yazıyı Bot Ters Yazar \n **!banner** = Bot yazdığınız yazıyı banner olarak atar. \n **!mcskin** = Yazdığınız ismin minecraft görünüşünü atar. \n **!fbi** = Bot FBi Gif Atar. \n **!token** = Tokenimi Öğrenmek İstemezmisin? \n **!düello** = Düello Atarsın.")
.setImage("https://cdn.discordapp.com/attachments/740182427426881538/750289660693184562/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}