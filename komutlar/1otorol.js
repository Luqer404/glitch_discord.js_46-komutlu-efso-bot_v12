const Disord = require('discord.js')

const db = require('quick.db')

    exports.run = (client, message, args) => {

        if(args[0] === "aç"){

            // Ön Data

            db.set(`otorol_${message.guild.id}`, 'acik')

            // Let Tanımları

            let kanal = message.mentions.channels.first();

            let rol = message.mentions.roles.first();

    

            if(!kanal){

                const Pâyidar = new Disord.MessageEmbed()

                .setDescription(`**Lütfen Bir Kanal Etiketle.**`)

                .setColor('#ff0000')

                return message.channel.send(Pâyidar)

            }

            if(!rol){

                const Pâyidar = new Disord.MessageEmbed()

                .setDescription(`**Lütfen Bir Rol Etiketle.**`)

                .setColor('#ff0000')

                return message.channel.send(Pâyidar)

            }

            if(rol && kanal ){

                // Data

                db.set(`okanal_${message.guild.id}`, kanal.id)

                db.set(`orol_${message.guild.id}`, rol.id)


    

                // Mesaj

                const Pâyidar = new Disord.MessageEmbed()

                .setDescription(`

                Otorol Sistemi Başarıyla Aktif Edildi\n

                    \`Kanal\` = ${kanal}

                    \`Rol\` = ${rol}

               

                `)

                .setColor('BLACK')

                .setFooter('Pâyidar')

                message.channel.send(Pâyidar)

            }

        } else if(args[0] === "kapat"){

            // Kişi Eğer Sistemi Kapatırsa Datadaki Verileri Silelim

            db.delete(`orol_${message.guild.id}`)

            db.delete(`okanal_${message.guild.id}`)

            db.delete(`omesaj_${message.guild.id}`)           

            const Pâyidar = new Disord.MessageEmbed()

            .setDescription(`**Otorol Sistemi Başarıyla Kapatıldı.**`)

            .setColor('BLACK')

            .setFooter('Pâyidar')

            message.channel.send(Pâyidar)

        }

    }

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['Otorol-ayarla','OTOROL-AYARLA','Otorol','OTOROL','otorol'],

    permLevel: 0

}

exports.help = {

    name: 'otorol-ayarla'

}