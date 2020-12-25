const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const moment = require('moment');
require('moment-duration-format');
exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_GUILD")){
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RED')
    .setDescription(`<:xx:660416379165343745> Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisi gerekmektedir!`)
    .setFooter(`${client.user.tag} | ${prefix}yardım`)
    .setTimestamp()
        
    message.channel.send(embed)
  } else {
  
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    let region = {
        "us-central": "Amerika :flag_us:",
        "us-east": "Doğu Amerika :flag_us:",
        "us-south": "Güney Amerika :flag_us:",
        "us-west": "Batı Amerika :flag_us:",
        "eu-west": "Batı Avrupa :flag_eu:",
        "eu-central": "Orta Avrupa :flag_eu:",
        "europe": "Avrupa :flag_eu:",
        "singapore": "Singapur :flag_sg:",
        "london": "Londra :flag_gb:",
        "japan": "Japonya :flag_jp:",
        "russia": "Rusya :flag_ru:",
        "hongkong": "Hong Kong :flag_hk:",
        "brazil": "Brezilya :flag_br:",
        "singapore": "Singapur :flag_sg:",
        "sydney": "Sidney :flag_au:",
        "india": "Hindistan :flag_in:",
        "dubai": "Dubai :flag_ae:",
        "amsterdam": "Amsterdam :flag_nl:",
        "frankfurt": "Frankfurt :flag_de:",
        "southafrica": "Güney Afrika :flag_za:"
    }
    let dogru = {
      "0": "Sunucu Doğrulaması Yok.",
      "1": "Düşük (E-posta Doğrulaması)",
      "2": "Orta (5 Dk Üyelik)",
      "3": "Yüksek (10 Dk Üyelik)",
      "4": "Çok Yüksek (Telefon Doğrulamalı)"
    }
    
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
    
    
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    
     
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
    
    
    
        var embed = new Discord.RichEmbed()
            .setColor('AQUA')
            .setAuthor('Sunucu Bilgi')
            .setThumbnail(message.guild.iconURL)
            .addField('Genel Bilgiler', `**Sunucu Sahibi**: ${message.guild.owner} <:tac:660800019061800990>\n**Sunucu Sahibi ID**: ${message.guild.ownerID}\n**Sunucu ID:** ${message.guild.id}\n**Bölgesi:** ${region[message.guild.region]}\n**Doğrulama Seviyesi: ** ${dogru[message.guild.verificationLevel]}\n**Varsayılan Rol: ** ${message.guild.defaultRole}` )
            .addField('Diğer Bilgiler', `**Sunucu Oluşturulma Tarihi: ** ${moment(message.guild.createdAt).format('DD')} ${aylar[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY')}\n**Sunucuya Katılım Tarihi: ** ${moment(message.guild.joinedAt).format('DD')} ${aylar[moment(message.guild.joinedAt).format('MM')]} ${moment(message.guild.joinedAt).format('YYYY')}\n**Kısaltması: ** ${message.guild.nameAcronym}\n**Varsayılan Kanal: ** ${message.guild.defaultChannel ? message.guild.defaultChannel : 'Varsayılan Kanal Yok'}`)
            .addField('Üye Bilgileri', `**250'den Fazla Üyesi var mı? ** ${message.guild.large ? ':white_check_mark:' : ':negative_squared_cross_mark:'}\n**Toplam Üye:** ${üyesayi}\n**Kullanıcılar: ** ${kullanıcılar} \n**Bot Sayısı:** ${botlar}\n**Banlı Sayısı:** ${await message.guild.fetchBans().then(b => b.size)}`)      
            .addField('Emojiler', `**Emoji Sayısı: **${message.guild.emojis.size}`)
            .addField('Roller', `**Rol Sayısı: ** ${message.guild.roles.map(a => a.name), message.guild.roles.size}`)
            .addField('Kanallar', `**Kanal Sayısı: ** ${message.guild.channels.map(a => a.name), message.guild.channels.size}\n**AFK Kanalı: ** ${message.guild.afkChannel ? message.guild.afkChannel : 'AFK Kanalı Yok'}\n**AFK Zaman Aşımı:** ${message.guild.afkTimeout ? message.guild.afkTimeout : 'AFK Kanalı Yok'}`)
            .setFooter(`${client.user.tag} | ${prefix}yardım`)
            .setTimestamp()
        
             message.channel.send(embed);
      
    
    
  }
 };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu", "sunucu-bilgi", "sbilgi", "sb"],
  permLevel: 0,
}
exports.help = {
  name: 'sunucubilgi',
  description: 'Etiketlediğiniz rol hakkında bilgi alırsınız.',
  usage: 'rol-bilgi [rol]'
};
