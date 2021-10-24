const Discord = require("discord.js");
const ayarlar=require("../ayarlar.js");
let  p = ayarlar.prefix
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
    ``)
    .addField(
      `➤ Komutlar`,
      `
 
:white_small_square: | **${p}eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **${p}moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **${p}logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız.


`)


    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
