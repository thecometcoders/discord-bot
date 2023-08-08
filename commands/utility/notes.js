const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('notes')
    .setDescription('Dropdown menu'),

  async execute(interaction) {

    const options = [
      {
        label: 'Option 1',
        description: 'This is option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        description: 'This is option 2',
        value: 'option2',
      },
    ];

    console.log("hey man!!")
    interaction.guild.members.fetch().then(
      (value) => {
        console.log(value)
      }, (error) => {
        console.log(error)
      }
    );

    const menu = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('select')
          .setPlaceholder('Select an option')
          .addOptions(options)
      );

    interaction.reply({components: [menu]});
  },
};