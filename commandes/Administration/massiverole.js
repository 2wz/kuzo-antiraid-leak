module.exports.run = async (client, message, args) => {

    const db = require("quick.db");
    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require('discord.js')
    const fs = require("fs");

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return   message.lineReply( `${emojis.wsh_ta_cru_quoi} Vous n'avez pas la permission requise \`MANAGE_ROLES\``);
      if (!args.length) {
        return message.lineReply("Utilisation de la Commande: `masiverole add/remove <role>`")
      }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(`${emojis.general.no} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
    if(args[0] === "add") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.lineReply(`${emojis.wsh_ta_cru_quoi} Mon rôle n'est pas assez haut pour que j'ajoute le rôle **${role.name}** !`);
      }
  
      if (message.member.roles.highest.comparePositionTo(role) < 0) {
        return message.lineReply(`${emojis.wsh_ta_cru_quoi} Votre rôle doit être supérieur à **${role.name}**`);
      }
  
      if (!role) {
        return message.lineReply(`${emojis.wsh_ta_cru_quoi} Veuillez fournir un rôle valide`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.add(role));
  
      message.channel.send(`** ${role.name} ** a bien été ajouté à tout le monde`);    
    }
    if(args[0] === "remove") {
        const role =
        message.guild.roles.cache.find(
          (role) => role.name === args.join(" ").slice(1)
        ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));
  
      if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
        return message.lineReply(`${emojis.wsh_ta_cru_quoi} Mon rôle n'est pas assez haut pour que j'enlève le rôle **${role.name}** !`);
    }

    if (message.member.roles.highest.comparePositionTo(role) < 0) {
      return message.lineReply(`${emojis.wsh_ta_cru_quoi} Votre rôle doit être supérieur à **${role.name}**`);
      }
  
      if (!role) {
        return message.lineReply(`${emojis.wsh_ta_cru_quoi} Veuillez fournir un rôle valide`);
      }
  
      message.guild.members.cache.forEach(member => member.roles.remove(role));
  
      message.channel.send(`** ${role.name} ** a bien été enlever à tout le monde`);    
    }
}

module.exports.help = {
    name: "massiverole",
    aliases: ["giveall"],
    category: "admin",
    enabled: true,
    description: "Permet de lock un channel."
};