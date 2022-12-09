const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription(`This is a help command`),

    async execute (interaction, client){

        const embed = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Help Center')
        .setDescription(`Help Command Guide:`)
        .addFields({ name: 'Page 1', value: 'Help and Resources (button 1)'})
        .addFields({ name: 'Page 2', value: 'Community Commands (button 2)'})
        .addFields({ name: 'Page 3', value: 'Moderation Commands (button 3)'})



        const embed2 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Community Commands')
        .addFields({ name: '/help', value: 'Do /help for the command list & support'})
        .addFields({ name: '/test', value: 'Check is bot is working'})
        .addFields({ name: '/steal', value: 'Steal an emoji from another server'})
        .addFields({ name: '/alphabot', value: 'Speak with Alphabot'})
        .addFields({ name: '/image', value: 'Generate an AI image'})
        .addFields({ name: '/8ball', value: 'Classic 8ball command'})
        .addFields({ name: '/enka', value: 'Enter Genshin UID to recieve enka network url'})

    
        .setTimestamp()

        const embed3 = new EmbedBuilder()
        .setColor('Blue')
        .setTitle('Moderation Commands')
        .addFields({ name: '/clearwarn', value: 'Do /help for the command list & support'})
        .addFields({ name: '/clear', value: 'Clears the channel with given amount)'})
        .addFields({ name: '/warn', value: 'Gives a member a warning'})
        .addFields({ name: '/warnings', value: 'Shows the amount of warning from a member'})
        .addFields({ name: '/reactrole', value: 'This send s a reaction role message'})
        .addFields({ name: '/verify', value: 'This verifies a member'})
        .addFields({ name: '/ticket', value: 'Creates a ticket'})
        .addFields({ name: '/addrole', value: 'Add a role to a specific member'})
        .addFields({ name: '/ban', value: 'Ban a member'})
        .addFields({ name: '/unban', value: 'Unban a member'})
        .addFields({ name: '/timeout', value: 'Timeout a member'})
        .addFields({ name: '/untimeout', value: 'Untimeout a member'})
        .addFields({ name: '/kick', value: 'Kick a member'})
        .addFields({ name: '/setwelchannel', value: 'Sets the welcome channel to specified channel'})
        .addFields({ name: '/removewelchannel', value: 'Removes the welcome channel'})
        .addFields({ name: '/mute', value: 'Mutes a specified member'})











        .setTimestamp()







        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`page1`)
            .setLabel(`Page 1`)
            .setStyle(ButtonStyle.Success),


            new ButtonBuilder()
            .setCustomId(`page2`)
            .setLabel(`Page 2`)
            .setStyle(ButtonStyle.Success),


            new ButtonBuilder()
            .setCustomId(`page3`)
            .setLabel(`Page 3`)
            .setStyle(ButtonStyle.Success)



            
        )
        const message = await interaction.reply({ embeds: [ embed] , components: [ button ]});

        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i =>{

            if(i.customId === 'page1'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [ embed], component: [button]})
            }
            if(i.customId === 'page2'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [ embed2], component: [button]})
            }
            if(i.customId === 'page3'){
                if(i.user.id !== interaction.user.id){
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [ embed3], component: [button]})
            }

            })

    }    

}