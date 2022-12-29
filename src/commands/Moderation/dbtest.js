const { SlashCommandBuilder } = require('discord.js');
const testSchema = require('../../schemas/test')

module.exports ={

    data: new SlashCommandBuilder()
    .setName('testdb')
    .setDescription(" db Test"),

    async execute(interaction){

        testSchema.findOne({ GuildId: interaction.guild.id, UserId: interaction.user.id}, async(err, data) =>{
            if (err) throw err;
            if(!data){
                testSchema.create({
                    GuildId: interaction.guild.id,
                    UserId: interaction.user.id
                })
            }

            if (data){
                console.log(data);


                const user = data.UserId;
                const guild = data.GuildId;

                console.log({ user, guild})
            }
        })

       // testSchema.deleteMany({ GuildId: interaction.guild.id, UserId: interaction.user.id})

    }
}