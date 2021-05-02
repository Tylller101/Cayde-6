module.exports = {
    name: "addclasses",
    description: "sets up reaction role message for classes",
    async execute(msg, Discord, cayde){
        const channel = msg.guild.channels.cache.find(channel => channel.name === "choose-classes");
        const cse015 = msg.guild.roles.cache.find(role => role.name === "yellow team");
        const cse022 = msg.guild.roles.cache.find(role => role.name === "blue team");
        const cse024
        const 

        const yellowEmoji = "🍋";
        const blueEmoji = "🫐";

        let embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Choose your classes")
        .setDescription("Choose classes you are taking, have taken, or plan on taking "
        + "and would like to view and interact with on the server.\n\n"

        + "**Required Math classes:\n**"
            + `${yellowEmoji} for yellow team\n`
            + `${blueEmoji} for blue team\n`

            + "**Required Physics classes**\n"
            
            + "**Required Engineering classes\n**"
            
            + "**R");
        
        let msgEmbed = await msg.channel.send(embed);
        msgEmbed.react(yellowEmoji);
        msgEmbed.react(blueEmoji);

        cayde.on("messageReactionAdd", async (reaction, user) =>{
            if(reaction.message.partial){
                await reaction.message.fetch();
            }
            if(reaction.partial){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === yellowEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellow);
                }
                if(reaction.emoji.name === blueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
                }
            }
            else{
                return;
            }
        });

        cayde.on("messageReactionRemove", async (reaction, user) =>{
            if(reaction.message.partial){
                await reaction.msg.fetch();
            }
            if(reaction.partial){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === yellowEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow);
                }
                if(reaction.emoji.name === blueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
                }
            }
            else{
                return;
            }
        });
    }
}