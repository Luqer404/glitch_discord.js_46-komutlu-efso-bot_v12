const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Eğlence Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-fbi** = Bot FBi Gif Atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-düello** = Düello Atarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-wasted** = Polis tarafından yakalanırsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-atatürk** = Dene ve gör... (1881-1938) <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
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