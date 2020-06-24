const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args,params) {
    var uzunluk = args.slice(0).join(' ');
  const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \` !şifre [0/10]\``)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 10) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Çok Fazla Sayı Girdin").setColor("RANDOM"));
}
  if (isNaN(uzunluk)) return message.reply("Geçersiz! Lütfen Örneğe Bakınız; ``!şifre 10`` Hata sebebi: ``Geçersiz Sayı``")
  
    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCodes('message',password);
  if (message.channel.type !== 'dm') {
    message.channel.send('Şifreniz Özel Olarak Size İletildi!') }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
        message.author.sendCode('message',password);
    }
  }





};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
    kategori: 'eğlence',
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};