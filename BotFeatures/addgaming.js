module.exports = {
    name: "addgaming",
    description: "sets up reaction role message for gaming channels and categories",
    async execute(msg, Discord, cayde){
        const gaming = msg.guild.channels.cache.find(channel => channel.name === "choose-gaming");

        const mobile = msg.guild.roles.cache.find(role => role.name === "Mobile Gamer");
        const console = msg.guild.roles.cache.find(role => role.name === "Console Gamer");
        const VR = msg.guild.roles.cache.find(role => role.name === "VR Gamer");
        const PC = msg.guild.roles.cache.find(role => role.name === "PC Gamer");
        const flash = msg.guild.roles.cache.find(role => role.name === "Flash Gamer");
        
        const teamxbox = msg.guild.roles.cache.find(role => role.name === "Team XBOX");
        const teamplaystation = msg.guild.roles.cache.find(role => role.name === "Team PS");
        const teamnintendo = msg.guild.roles.cache.find(role => role.name === "Team Nintendo");
    
        const mobileEmoji = "📱";
        const consoleEmoji = "🎮";
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
            + `${consoleEmoji} for Console Gameing\n`
            + `${VREmoji} for VR Gaming\n`
            + `${PCEmoji} for PC Gaming\n`
            + `${flashEmoji} for Flash Gameing\n\n`

        + "**Gaming console teams:\n**"
            + `${teamxboxEmoji} to join Team XBOX\n`
            + `${teamplaystationEmoji} to join Team PlayStation(PS)\n`
            + `${teamnintendoEmoji} to join Team Nintendo`);
            

        let msgEmbed = await gaming.send(embed);
        msgEmbed.react(mobileEmoji);
        msgEmbed.react(consoleEmoji);
        msgEmbed.react(VREmoji);
        msgEmbed.react(PCEmoji);
        msgEmbed.react(flashEmoji);

        msgEmbed.react(teamxboxEmoji);
        msgEmbed.react(teamplaystationEmoji);
        msgEmbed.react(teamnintendoEmoji);
        


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
            const classAdd = await reaction.message.guild.members.cache.get(user.id).roles;
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === mobileEmoji){
                    classAdd.add(mobile);
                }
                if(reaction.emoji.name === consoleEmoji){
                    classAdd.add(console);
                }
                if(reaction.emoji.name === VREmoji){
                    classAdd.add(VR);
                }
                if(reaction.emoji.name === PCEmoji){
                    classAdd.add(PC);
                }
                if(reaction.emoji.name === flashEmoji){
                    classAdd.add(flash);
                }
                if(reaction.emoji.name === teamxboxEmoji){
                    classAdd.add(teamxbox);
                }
                if(reaction.emoji.name === teamplaystationEmoji){
                    classAdd.add(teamplaystation);
                }
                if(reaction.emoji.name === teamnintendoEmoji){
                    classAdd.add(teamnintendo);
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
                if(reaction.emoji.name === mobileEmoji){
                    classAdd.remove(mobile);
                }
                if(reaction.emoji.name === consoleEmoji){
                    classAdd.remove(console);
                }
                if(reaction.emoji.name === VREmoji){
                    classAdd.remove(VR);
                }
                if(reaction.emoji.name === PCEmoji){
                    classAdd.remove(PC);
                }
                if(reaction.emoji.name === flashEmoji){
                    classAdd.remove(flash);
                }
                if(reaction.emoji.name === teamxboxEmoji){
                    classAdd.remove(teamxbox);
                }
                if(reaction.emoji.name === teamplaystationEmoji){
                    classAdd.remove(teamplaystation);
                }
                if(reaction.emoji.name === teamnintendoEmoji){
                    classAdd.remove(teamnintendo);
                }
            }
            else{
                return;
            }
        });
    }
}