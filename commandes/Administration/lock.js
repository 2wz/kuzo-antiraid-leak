module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const ms = require('ms');
    const Discord = require('discord.js');
    fs = require("fs");


    if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.lineReply( `${emojis.wsh_ta_cru_quoi} Vous n'avez pas la permission requise \`MANAGE_CHANNELS\``);
    if (!message.mentions.channels.first()) return message.lineReply(`${emojis.wsh_ta_cru_quoi} Spécifiez le channel`)
    

    if (!message.guild.me.hasPermission){
        

        return message.channel.send(`${emojis.non} Vous n'avez pas la permsission de lock le salon`)
    }
    let time = args[1] || "30s"
    let Channel = message.mentions.channels.first()

    try {
        await Channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });

        message.channel.send(`${emojis.channel} <#${Channel.id}> à bien était lock`)
    } catch (err) {
        console.log(err);
    }

    setTimeout(() => {
        Channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        }, ms(time))
    })
}

module.exports.help = {
    name: "lock",
    aliases: ["lockchannel"],
    category: "admin",
    enabled: true,
    description: "Permet de lock un channel."
};