const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("YELLOW")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/750999058864406608/755645272335450182/a_dd75e2cbe5ebfc02273a11d055c77431.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `p?botbilgi` **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `p?davet` **Yazarak Botun Davet Linkini Alırsınız.**"
    )
    .addField(
      `➤ Komutlar`,
      `
 
:white_small_square: | **p?eğlence:** Eğlence Menüsüne Bakarsınız.
:white_small_square: | **p?moderasyon:** Botun Moderasyon Komutlarına Bakarsınız
:white_small_square: | **p?moderasyon2:** Botun 2. Moderasyon Komutlarına Bakarsınız.
:white_small_square: | **p?logomenü:** Botun Logo YAPMA Komutlarına Bakarsınız. 

`)


    .addField(
      "➤ Yardım & Hata & Bug  \n",
      ":white_small_square: | **p?hatabildir:** "
    )

    .addField(
      `   ¯\_(ツ)_/¯  Bilgilendirme`,
      `
:white_small_square: | **Phoneix Bot Her Gün Güncelleniyor!**.
:white_small_square: | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `**➤ Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/eCJ27tG) \n >  » [Web Site](https://phoneixwebpanel.glitch.me/) \n > » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=754272207907323944&scope=bot&permissions=2080767167)`
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
