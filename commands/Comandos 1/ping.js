const Discord = require("discord.js")
const { markAsUntransferable } = require("worker_threads")

module.exports = {
    name: "ping", // Coloque o nome do seu comando
    aliases: [""], //Sinonimos

    run: async(client, message, args) => {
        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setDescription(`Olá ${message.author}, seu ping esta carregando....`)


        let embed2 = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setDescription(`Olá ${message.author}, seu ping esta em: /${client.ws.ping}ms.`)

        message.reply({ embeds: [embed]}).then(msg =>{
            setTimeout( ()=>{
                msg.edit({ embeds: [embed2]})
            }, 3000)
        })
    }
}