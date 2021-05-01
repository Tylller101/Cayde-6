module.exports = {
    name: "addroles",
    description: "sets up reaction role message for classes",
    async execute(message, args, Discord, client){
        const channel = "836103332757504010"; //836103332757504010
        const yellow = message.guild.roles.cache.find(role => role.name === "yellow team");
        const blue = message.guild.roles.cache.find(role => role.name === "blue team");

        const yellowEmoji = "🍋";
        const blueEmoji = "🫐";

        let embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("choose a team to play on")
        .setDescription("choosing a team will allow you to interact with your teammates\n\n"
            + `${yellowEmoji} for yellow team\n`
            + `${blueEmoji} for blue team`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(blueEmoji);

        client.on("messageReactionAdd", async (reaction, user) =>{
            if(reaction.message.partial){
                await reaction.message.fetch();
            }
            if(reaction.partial){
                await reaction.fetch();
            }
            if(user.bot){
                return;
            }
            if(!reaction.message.guild){
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

        client.on("messageReactionRemove", async (reaction, user) =>{
            if(reaction.message.partial){
                await reaction.message.fetch();
            }
            if(reaction.partial){
                await reaction.fetch();
            }
            if(user.bot){
                return;
            }
            if(!reaction.message.guild){
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