var Jimp = require('jimp');
const Discord = require('discord.js');
 
module.exports.run = async (bot, message, args) => {
 
  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
 
        Jimp.read(user.avatarURL(), (err, image) => {

            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/715229214227300429/718904882354192554/asasassas.png", (err, avatar) => {
                avatar.avatarURL({ format: 'png', dynamic: true, size: 295 });
                image.composite(avatar, 0, 0).write(`./img/gta/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/gta/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'gta',
  description: 'wasted.',
  usage: 'wasted'
};