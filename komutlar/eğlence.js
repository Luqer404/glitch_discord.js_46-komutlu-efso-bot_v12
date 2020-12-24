const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Mays v12 sürümüyle sizlerle")
.setTitle(" ➤Mays Eğlence komutları" )
 .setTimestamp()
.setDescription(" **m!tersyazı** = Bir Yazıyı Bot Ters Yazar. < \n  **m!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **m!fbi** = Bot FBi Gif Atar. \n **m!token** = Tokenimi Öğrenmek İstemezmisin?  \n  **m!düello** = Düello Atarsın.  \n  **m!wasted** = Polis tarafından yakalanırsın.  \n  **m!atatürk** = Dene ve gör... (1881-1938) ")
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