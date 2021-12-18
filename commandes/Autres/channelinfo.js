module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require("discord.js");
    const fs = require('fs');
    const moment = require('moment');
    const db = require("quick.db");

	const icon = message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 });



	if (!args[0]) {
		var channel = message.channel;
	} else {
		var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
	};


	if (!channel) {
		return message.channel.send(`Erreur ${message.author.username}, je ne trouve pas le salon!`),
			console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | détails : salon introuvable`);
	};

	if (channel.type === 'text' || channel.type === 'news' || channel.type === 'store') {


		const embed = new MessageEmbed()
			.setColor("303136")
			.setTitle(`Information sur le salon textuel : ${channel.name}`)
			.setThumbnail(icon)
			.setFooter(message.member.user.username, message.member.user.displayAvatarURL())

			.addFields(
				{
					name: `${emojis.settings} Description`,
					value: channel.topic !== null ? channel.topic : 'Aucune',
					inline: false
				},
				{
					name: `${emojis.load} Nom`,
					value: channel.name,
					inline: true
				},
				{
					name: `${emojis.id} Id`,
					value: channel.id,
					inline: true
				},
				{
					name: `${emojis.mp} NSFW`,
					value: channel.nsfw ? `oui` : `non`,
					inline: true
				},
				{
					name: `${emojis.banniere} Catégorie`,
					value: `${channel.parent !== null ? channel.parent : 'non-catégorisé'}\n${channel.parentID !== null ? `(${channel.parentID})` : ''}`,
					inline: true
				},
				{
					name: `${emojis.fleched} Position dans la catégorie`,
					value: channel.position + 1,
					inline: true
				},
				{
					name: `${emojis.regions} Date de création`,
					value: moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:mm:ss'),
					inline: false
				}
			);


		return message.channel.send(embed);
	};



	//si c'est une catégorie
	if (channel.type === 'category') {


		const embed = new MessageEmbed()
			.setColor("303136")
			.setTitle(`Information sur la catégorie : ${channel.name}`)
			.setThumbnail(icon)
			.setFooter(message.member.user.username, message.member.user.displayAvatarURL())

			.addFields(
				{
					name: `📃 Nom`,
					value: channel.name,
					inline: true
				},
				{
					name: `🆔 Id`,
					value: channel.id,
					inline: true
				},
				{
					name: `🛋 Salons`,
					value: channel.children.size,
					inline: false
				},
				{
					name: `🎚 Position`,
					value: channel.rawPosition,
					inline: true
				},
				{
					name: `📆 Date de création`,
					value: moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:MM:SS'),
					inline: true
				}
			);




		return message.channel.send(embed),
			console.log(`commande : channelinfo | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id}) | catégorie : ${channel.name}(${channel.id})`);
	};



	//si c'est un channel vocal
	if (channel.type === 'voice') {


		const embed = new MessageEmbed()
			.setThumbnail(icon)
			.setColor("303136")
			.setTitle(`Information sur le salon vocal : ${channel.name}`)
			.setFooter(message.member.user.username, message.member.user.displayAvatarURL())

			.addFields(
				{
					name: `📃 Nom`,
					value: channel.name,
					inline: true
				},
				{
					name: `🆔 Id`,
					value: channel.id,
					inline: true
				},
				{
					name: '📦 Débit binaire (bitrate)',
					value: channel.bitrate / 1000 + 'kbps',
					inline: true
				},
				{
					name: `🎤 Membres connectés`,
					value: channel.members.size,
					inline: false
				},
				{
					name: `⛔ Limite d'utilisateur connecté`,
					value: channel.userLimit === 0 ? 'aucune' : channel.userLimit,
					inline: true
				},
				{
					name: `📆 Date de création`,
					value: moment(channel.createdAt).format('[le] DD/MM/YYYY [à] HH:MM:SS'),
					inline: false
				}
			);


		return message.channel.send(embed);
	};


	return message.channel.send(`Erreur ${message.author.username}, je ne trouve pas le type du salon! Il m'est donc impossible d'affiché ses informations.`);
};

module.exports.help = {
	name: "channelinfo",
	aliases: [],
	description: "Affiche les informations sur un salon du serveur.",
	usage: "channelinfo [channel]",
	example: ["channelinfo", "channelinfo #support"],
	categories: "info"
};