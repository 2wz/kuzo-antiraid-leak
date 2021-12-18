



module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    fs = require("fs");
    ms = require("ms");
    const emojis = require("../../jsons/emojis.json");

    const db = require("quick.db");
    const prefix = db.get(`prefix_${message.guild.id}`) || config.prefix;

   filter = (reaction, user) => ['1️⃣','❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id }; 

   const msgembed = new MessageEmbed()
   .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))
       .setTitle(`**Page d’aide**`)
   .setDescription(`${emojis.settings} Mon prefix sur ce serveur est: \`${prefix}\`\n\n${emojis.tools} Veuillez réagir a la réaction \`1️⃣\` pour obtenir toute les commandes du bot\n\n**${emojis.backup} Liens:**\n\n<:server:845283397920489542> [Support Serveur](https://discord.gg/Dw5rZQVakY)\n<:Ligne:845266630460440647> [Invite Moi](https://discord.com/api/oauth2/authorize?client_id=807785617274044417&permissions=8&scope=bot)`)
   .setColor("303136")
   .setTimestamp()  



    message.channel.send(msgembed)
    .then(async m => { 
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async r => { m.delete()  
if(r.emoji.name === "1️⃣") {

    const msgembedee = new MessageEmbed()
    .setTitle("Mes commandes")
    .setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setDescription(`> Voici mon prefix :\`${prefix}\`
    > J'ai un total de \`${client.commands.size}\` commandes !\n`)
    .addField(`${emojis.couronne}・Owner (9)`, `\`setprofile\`, \`setactivity\`, \`setcolor\`, \`owner-list\`, \`owner\`, \`unowner\`, \`unwhitelist\`, \`whitelist\`, \`whitelist-list\`, \`whitelist-off\`, \`whitelist-on\`, \`serverlist\``)
    .addField(`${emojis.settings}・Administration (6)`, ` \`autorole\`, \`adminlist\`, \`massiverole\`, \`membercount\`, \`panel\`, \`set-prefix\``)
    .addField(`${emojis.warn}・Modération (19)`,   `\`renew\`, \`embed\`, \`lock\`, \`unlock\`, \`lockall\`,\`unlockall\`, \`kick\`, \`ban\`, \`banlist\`, \`clear\`, \`create\`, \`mute\`, \`unmute\`, \`tempmute\`, \`ban\`, \`unban\`, \`unbanall\`, \`warn\`, \`clearsanctions\`, \`warnings\``)
    .addField(`${emojis.protect}・Anti-Raid (14)`, `\`antiban-off\`, \`antiban-on\`, \`antibot-off\`, \`antiban-on\`, \`antichanell-off\`, \`antilink-off\`, \`antilink-on\`, \`antispam-off\`, \`antispam-on\`, \`antiwebhook-off\`, \`antiwebhook-on\``)
    .addField(`${emojis.logs} Logs (3)`, `\`logs-images\`, \`logs-mentions\`, \`logs-off\`, \`logs-vocal\``)
    .addField(`${emojis.backup}・Backup (3)`, `\`backup create\`, \`backup load\`, \`backup info\``)
    .addField(`${emojis.invite}・Invitations (7)`, `\`add-invites\`, \`del-invites\`, \`invites\`, \`join-message\`,  \`leave-message\`, \`join-channel\`, \`leave-channel\``)
    //.addField(`🎁・Giveaway (2)`, `\`gstart/gcreate\`, \`greroll\``)
    .addField(`:video_game:・Watch Together (3)`, `\`betrayal\`, \`youtube\`, \`poker\``)
    //.addField(`<:DisqueMusique:849115561682272327>・Music (1)`, `\`join\` _En cours.._`)
    .addField(`${emojis.fun}・Fun (9)`, `\`avatar\`, \`ph\`, \`ascii\`, \`gaypic\`, \`gay\`, \`wasted\`, \`gif\`, \`insta\`, \`wasted\``)
    .addField(`${emojis.tools}・Utilitaires (8)`, `\`botinfo\`, \`invite\`, \`help\`, \`emojis-list\`, \`speed\`, \`userinfo\`, \`serverinfo\`, \`vc\``)
    .setFooter(client.user.username)
    .setColor("303136")
    .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
    .setTimestamp()  

          message.lineReply(msgembedee)
} else if(r.emoji.name === '❌') {
      m.delete()
    }
});
await m.react("1️⃣") 


await m.react("❌")
    });
};


module.exports.help = {
    name: "help",
    aliases: [],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration de l'autorole.",
  };