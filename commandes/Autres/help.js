module.exports.run = async (client, message, args) => {

    const config = require("../../jsons/config.json");
    const emojis = require("../../jsons/emojis.json");
    const { MessageEmbed } = require("discord.js");
    const Discord = require("discord.js");

    if (!args.length) {
    const db = require("quick.db");
    const prefix = db.get(`prefix_${message.guild.id}`) || config.prefix;

    let ownerss = client.commands.filter(a => a.help.category === "ownerss").map(cmd => `${cmd.help.name}`).join(", ")
    let admin = client.commands.filter(a => a.help.category === "admin").map(cmd => `${cmd.help.name}`).join(", ")
    let antiraid = client.commands.filter(a => a.help.category === "antiraid").map(cmd => `${cmd.help.name}`).join(", ")
    let mod = client.commands.filter(a => a.help.category === "mod").map(cmd => `${cmd.help.name}`).join(", ")
    let logs = client.commands.filter(a => a.help.category === "logs").map(cmd => `${cmd.help.name}`).join(", ")
    let utils = client.commands.filter(a => a.help.category === "utils").map(cmd => `${cmd.help.name}`).join(", ")
    let fun = client.commands.filter(a => a.help.category === "fun").map(cmd => `${cmd.help.name}`).join(", ")
    let devs = client.commands.filter(a => a.help.category === "dev").map(cmd => `${cmd.help.name}`).join(", ")
    let gw = client.commands.filter(a => a.help.category === "gw").map(cmd => `${cmd.help.name}`).join(", ")
    let backup = client.commands.filter(a => a.help.category === "backup").map(cmd => `${cmd.help.name}`).join(", ")
    let invite = client.commands.filter(a => a.help.category === "invite").map(cmd => `${cmd.help.name}`).join(", ")
    let watch = client.commands.filter(a => a.help.category === "watch").map(cmd => `${cmd.help.name}`).join(", ")

    let embed = new MessageEmbed()
    .setTitle(`${emojis.fleched} Liste des commandes`)
    .setDescription(`Préfix : **${prefix}**`)
    .addField(`${emojis.owner} Développeur :`,  `\`\`\`${devs}\`\`\``)
    .addField(`${emojis.proprio} Propriétaire du serveur :`, `\`\`\`${ownerss}\`\`\``)
    .addField(`${emojis.settings} Administrations :`, `\`\`\`${admin}\`\`\``)
    .addField(`${emojis.protect} Anti Raid :`, `\`\`\`${antiraid}\`\`\``)
    .addField(`${emojis.logs} Logs :`, `\`\`\`${logs}\`\`\``)
    .addField(`${emojis.warn} Modération :`, `\`\`\`${mod}\`\`\``)
    .addField(`${emojis.backup} Backup :`,  `\`\`\`${backup}\`\`\``)
    .addField(`${emojis.invite} Invitation :`, `\`\`\`${invite}\`\`\``)
    .addField(`${emojis.tools} Utilitaire :`, `\`\`\`${utils}\`\`\``)
    .addField(`${emojis.fun} Fun :`,  `\`\`\`${fun}, ph\`\`\``)
    .addField(`${emojis.together} Watch Together :`,  `\`\`\`youtube, betrayal, poker\`\`\``)
    .addField(`${emojis.giveaway} Giveaway :`,  `\`\`\`gstart, greroll (maintenance..)\`\`\``)
    .setColor("303136")
    .setFooter(client.user.username, client.user.avatarURL())
    message.channel.send(embed)
    const help= new Discord.MessageEmbed()
    }

};

module.exports.help = {
    name: "help2",
    aliases: [],
    category: "utilitaire",
    enabled: true,
    description: "Montre la liste des commandes."
};

