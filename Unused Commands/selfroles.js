const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

const { giveawaysPing, gamenightPing, crPing, wosPing, carryPing, bfgPing } = require("../../config.json")

const createEmbed = require("../../Modules/embed.js").new

module.exports = {
  data: new SlashCommandBuilder()
    .setName('selfroles')
    .setDescription('Creates self roles.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)

  , async execute(interaction) {

    const msg = await interaction.channel.send({
      content: '||@everyone||',
      embeds: [createEmbed({
        title: "Self Roles",
        desc: `React to the following emojis to get the roles you want.\n\nš Giveaway Ping <@&${giveawaysPing}>\nš® Gamenight Ping <@&${gamenightPing}>\nš¬ Chat Revive Ping <@&${crPing}>\nš± Wall of Shame Ping <@&${wosPing}>\nšø Carry Ping <@&${carryPing}>\nš„³ BF Giveaway Ping <@&${bfgPing}>`
      })],
      fetchReply: true
    })

    await msg.react('š')
    await msg.react('š®')
    await msg.react('š¬')
    await msg.react('š±')
    await msg.react('šø')
    await msg.react('š„³')

    interaction.reply({
      ephemeral: true,
      content: 'Successfully created self roles.'
    })
  }
}