module.exports = {
    name: "addgaming",
    description: "sets up reaction role message for gaming channels and categories",
    async execute(msg, Discord, cayde){
        const gaming = msg.guild.channels.cache.find(channel => channel.name === "choose-gaming");

        const mobile = msg.guild.roles.cache.find(role => role.name === "Mobile Gamer");
        const consoles = msg.guild.roles.cache.find(role => role.name === "Console Gamer");
        const VR = msg.guild.roles.cache.find(role => role.name === "VR Gamer");
        const PC = msg.guild.roles.cache.find(role => role.name === "PC Gamer");
        const flash = msg.guild.roles.cache.find(role => role.name === "Flash Gamer");
        
        const teamxbox = msg.guild.roles.cache.find(role => role.name === "Team XBOX");
        const teamplaystation = msg.guild.roles.cache.find(role => role.name === "Team PS");
        const teamnintendo = msg.guild.roles.cache.find(role => role.name === "Team Nintendo");
    
        const mobileEmoji = "📱";
        const consolesEmoji = "🎮";
        const VREmoji = msg.guild.emojis.cache.find(emoji => emoji.name === "oculus");
        const PCEmoji = "🖥️";
        const flashEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === "adobe_flash");

        const teamxboxEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === "xbox");
        const teamplaystationEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === "playstation");
        const teamnintendoEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === "nintendo_64_controller");

        let embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Choose Gaming Channels")
        .setDescription("Choose the gameing channels and categories you want to be a part of \n\n"

        + "**Gaming Categories:\n**"
            + `${mobileEmoji} for Mobile gaming\n`
            + `${consolesEmoji} for Console Gameing\n`
            + `${VREmoji} for VR Gaming\n`
            + `${PCEmoji} for PC Gaming\n`
            + `${flashEmoji} for Flash Gameing\n\n`

        + "**Gaming console teams:\n**"
            + `${teamxboxEmoji} to join Team XBOX\n`
            + `${teamplaystationEmoji} to join Team PlayStation(PS)\n`
            + `${teamnintendoEmoji} to join Team Nintendo`);
            

        let msgEmbed = await gaming.send(embed);
        msgEmbed.react(mobileEmoji);
        msgEmbed.react(consolesEmoji);
        msgEmbed.react(VREmoji);
        msgEmbed.react(PCEmoji);
        msgEmbed.react(flashEmoji);

        msgEmbed.react(teamxboxEmoji);
        msgEmbed.react(teamplaystationEmoji);
        msgEmbed.react(teamnintendoEmoji);
        


        cayde.on("messageReactionAdd", async (reaction, user) =>{
            if(reaction.message.partial && reaction.message.channel.id == gaming){
                await reaction.message.fetch();
            }
            if(reaction.partial && reaction.message.channel.id == gaming){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }

            const gamingAdd = await reaction.message.guild.members.cache.get(user.id).roles;
            if(reaction.message.channel.id == gaming){
                if(reaction.emoji.name === mobileEmoji){
                    gamingAdd.add(mobile);
                    console.log("-\n" + user.username + " added mobile gaming role");
                }
                if(reaction.emoji.name === consolesEmoji){
                    gamingAdd.add(consoles);
                    console.log("-\n" + user.username + " added console gaming role");
                }
                if(reaction.emoji.name === "oculus"){
                    gamingAdd.add(VR);
                    console.log("-\n" + user.username + " added VR gaming role");
                }
                if(reaction.emoji.name === PCEmoji){
                    gamingAdd.add(PC);
                    console.log("-\n" + user.username + " added PC gaming role");
                }
                if(reaction.emoji.name === "adobe_flash"){
                    gamingAdd.add(flash);
                    console.log("-\n" + user.username + " added flash gaming role");
                }
                if(reaction.emoji.name === "xbox"){
                    gamingAdd.add(teamxbox);
                    console.log("-\n" + user.username + " added xbox team role");
                }
                if(reaction.emoji.name === "playstation"){
                    gamingAdd.add(teamplaystation);
                    console.log("-\n" + user.username + " added playstation team role");
                }
                if(reaction.emoji.name === "nintendo_64_controller"){
                    gamingAdd.add(teamnintendo);
                    console.log("-\n" + user.username + " added nintendo team role");
                }
            }
            else{
                return;
            }
        });

        cayde.on("messageReactionRemove", async (reaction, user) =>{
            if(reaction.message.partial && reaction.message.channel.id == gaming){
                await reaction.message.fetch();
            }
            if(reaction.partial && reaction.message.channel.id == gaming){
                await reaction.fetch();
            }
            if(user.bot || !reaction.message.guild){
                return;
            }

            const gamingRemove = await reaction.message.guild.members.cache.get(user.id).roles;
            if(reaction.message.channel.id == gaming){
                if(reaction.emoji.name === mobileEmoji){
                    gamingRemove.remove(mobile);
                    console.log("-\n" + user.username + " removed mobile gaming role");
                }
                if(reaction.emoji.name === consolesEmoji){
                    gamingRemove.remove(consoles);
                    console.log("-\n" + user.username + " removed console gaming role");
                }
                if(reaction.emoji.name === "oculus"){
                    gamingRemove.remove(VR);
                    console.log("-\n" + user.username + " removed VR gaming role");
                }
                if(reaction.emoji.name === PCEmoji){
                    gamingRemove.remove(PC);
                    console.log("-\n" + user.username + " removed PC gaming role");
                }
                if(reaction.emoji.name === "adobe_flash"){
                    gamingRemove.remove(flash);
                    console.log("-\n" + user.username + " removed flash gaming role");
                }
                if(reaction.emoji.name === "xbox"){
                    gamingRemove.remove(teamxbox);
                    console.log("-\n" + user.username + " removed xbox team role");
                }
                if(reaction.emoji.name === "playstation"){
                    gamingRemove.remove(teamplaystation);
                    console.log("-\n" + user.username + " removed playstation team role");
                }
                if(reaction.emoji.name === "nintendo_64_controller"){
                    gamingRemove.remove(teamnintendo);
                    console.log("-\n" + user.username + " removed nintendo team role");
                }
            }
            else{
                return;
            }
        });
    }
}