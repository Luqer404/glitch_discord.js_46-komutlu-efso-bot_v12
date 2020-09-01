const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('<a:hypesquad:742698007262396426> İstatistik;')
    .addField('<a:hypesquad:742698007262396426> Gecikme: ', client.ws.ping + 'ms')
    .addField('<a:hypesquad:742698007262396426> Çalışma Süresi: ', `${duration}`)
    .addField('<a:hypesquad:742698007262396426> Kullanıcılar:', client.users.cache.size)
    .addField('<a:hypesquad:742698007262396426> Kanallar:', client.channels.cache.size)
    .addField('<a:hypesquad:742698007262396426> Sunucular:', client.guilds.cache.size)
    .addField('<a:hypesquad:742698007262396426> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('<a:hypesquad:742698007262396426> Kütüphanesi;', `Discord.js`)
    .addField(`<a:hypesquad:742698007262396426> Discord.js sürümü:`, Discord.version)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};