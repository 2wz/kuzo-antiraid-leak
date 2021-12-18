module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const db = require("quick.db");
    const ms = require("ms");
    const { MessageEmbed } = require('discord.js');
    fs = require('ms');

    if (message.member.hasPermission("BAN_MEMBERS")) {
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) {message.channel.send(`${emojis.non} **Il n'y a aucun membre banni sur le serveur.**`); throw "**Aucun membre a unban.**"};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);                     
            })
        }).then(() => message.lineReply(`${emojis.oui} **Tous les utilisateurs bannis ont été débanni.**`)).catch(e => console.log(e))
    } else {message.channel.send(`${emojis.non} **Vous n'avez pas la permission requise.**`)}
    }
    
    module.exports.help = {
        name: "unbanall",
        aliases: ["uball"],
        category: "mod",
        enabled: true,
        description: "Permet de réouvrir un salon textuel."
    };