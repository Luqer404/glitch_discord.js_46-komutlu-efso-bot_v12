const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Destiny v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:hypesquad:742698007262396426> Destiny Eğlence Komutları <a:hypesquad:742698007262396426>")
 .setTimestamp()
.setDescription("<a:yan:750065080741134407> **!tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!banner** = Bot yazdığınız yazıyı banner olarak atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!fbi** = Bot FBi Gif Atar. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!düello** = Düello Atarsın. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **!wasted** = Polis tarafından yakalanırsın. <a:developeremoji:749525084586115153>")
.setImage("https://media.giphy.com/media/W2Pi7elRIJ3HZmSnhm/giphy.gif")
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