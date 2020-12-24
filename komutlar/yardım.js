const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/750999058864406608/755645272335450182/a_dd75e2cbe5ebfc02273a11d055c77431.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `m!botbilgi` **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `m!davet` **Yazarak Botun Davet Linkini Alırsınız.**"
    )
    .addField(
      `➤ Komutlar`,
      `
 
:white_small_square: | **m!eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **m!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **m!moderasyon2:** Botun 2. Moderasyon Komutlarına Bakarsınız.
:white_small_square: | **m!logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız. 

`)


    .addField(
      "➤ Yardım & Hata & Bug  \n",
      ":white_small_square: | **m!hatabildir:** "
    )

    .addField(
      `   ¯\_(ツ)_/¯  Bilgilendirme`,
      `
:white_small_square: | **mays Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/74MZyfZ24d) \n >  » > » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=791609110658547782&permissions=8&scope=bot)`
    )
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
