const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.js");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const eğlence = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Eğlence komutları")
    .setTimestamp()
    .setDescription(
      `**${prefix}tersyazı** = Bir Yazıyı Bot Ters Yazar. < \n  **${prefix}mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **${prefix}fbi** = Bot FBi Gif Atar. \n **${prefix}token** = Tokenimi Öğrenmek İstemezmisin?  \n  **${prefix}düello** = Düello Atarsın.  \n  **${prefix}wasted** = Polis tarafından yakalanırsın.  \n  **${prefix}atatürk** = Dene ve gör... (1881-1938) \n **${prefix}ara155** = Polisi Arar \n **${prefix}zar-at** = zar atar \n **${prefix}yazı-tura** = yazı yada tura atar hangisi tutarsan kazanırsın \n **${prefix}1v1** = Arkadaşınla 1v1 at \n **${prefix}mcskin** = ismini yazdığınız skini gösterir`
    )
   
  message.channel.send(eğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "eğlence",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "!eğlence"
};
