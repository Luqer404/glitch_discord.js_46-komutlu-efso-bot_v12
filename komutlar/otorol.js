const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));


exports.run = async (bot, message, args) =>
{
      let profil = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("Ayarlamam İçin Bir Rol Etiketlemelisin. \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : x+otorol @rol #kanal \nÖnemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = m!otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));
      

    if(!profil[message.guild.id]){
    
        profil[message.guild.id] = {
      
            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }
    
    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("./autorole.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.RichEmbed()
        .setDescription(`:evett:  Otorol başarıyla ${args[0]} olarak ayarlandı! \n:evett:  Otorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}