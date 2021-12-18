module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const db = require("quick.db");
    const fs = require("fs");


    if (!message.guild.available) return this.client.logger.info(`Serveur "${message.guild.name}" (${message.guild.id}) est indisponible.`);
    if (!message.guild.me.hasPermission("ADMINISTRATOR"))     return message.lineReply(`${emojis.general.warning} Vous n'avez pas la permission requise \`ADMINISTRATOR\``);


    message.guild.fetchBans()
    .then(bans => {
      const obj = bans.map(c => ({
        user: `${c.user.id}: ${c.user.username},`
      }));
      const bList = Array.from(obj);
      if (bList.length < 1) return message.channel.send(`Il n'y a aucun utilisateur banni sur **${message.guild.name}**.`);
      let index = 0;

      const embed = new MessageEmbed()
          .setTitle(`Liste des \`membres ban\` de *${message.guild.name}* (**${++index}**) `)
          .setDescription(`${bList.map(bl => `\`\`\`\n${bl.user}\`\`\``).join("")}`)
          .setFooter(client.user.username, config.image)
          .setTimestamp()  
          .setColor("303136")
     
          message.channel.send(embed)
    });
  }

  module.exports.help = {
    name: "banlist",
    aliases: [],
    category: "mod",
    enabled: true,
    description: "Permet de voir la list des membres bannie du serveur."
};