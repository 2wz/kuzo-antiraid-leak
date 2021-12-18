module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const db = require("quick.db");
    const ms = require("ms");
    const { MessageEmbed } = require('discord.js');
    fs = require('ms');

    if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(`${emojis.warn} **Vous n'avez pas la permission requise** `);

        if (!args[0]) return message.channel.send(`${emojis.non} **Veuillez entrer un identifiant d'utilisateur.**`)

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send(`${emojis.non} **Utilisateur valide!**`)
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'Aucune Raison';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Unbannissement réussie ${user.user.tag}`)
                    .setColor("303136")
                    .addField('ID de l\'utilisateur', user.user.id, true)
                    .addField('Tag de l\'utilisateur', user.user.tag, true)
                    .addField('Raison du Bannissement', user.reason != null ? user.reason : 'Aucune raison')
                    .addField('Raison de l\'Unbanissement, raison')
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`${emojis.non} ${member.tag} n'est pas ban !`)
                    .setColor(db.color)
                message.lineReply(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send(`${emojis.warn} **Une erreur s\'est produite!*`)
        });

    }

    module.exports.help = {
        name: "unban",
        aliases: [],
        category: "mod",
        enabled: true,
        description: "Permet de unban un membre du serveur."
    };