module.exports = {
    name: "addgaming",
    description: "sets up reaction role message for gaming channels and categories",
    async execute(msg, Discord, cayde){
        const channel = msg.guild.channels.cache.find(channel => channel.name === "choose-gaming");

        const mobile = msg.guild.roles.cache.find(role => role.name === "Mobile Gamer");
        const console = msg.guild.roles.cache.find(role => role.name === "Console Gamer");
        const VR = msg.guild.roles.cache.find(role => role.name === "VR Gamer");
        const PC = msg.guild.roles.cache.find(role => role.name === "PC Gamer");
        const flash = msg.guild.roles.cache.find(role => role.name === "Flash Gamer");
        
        const teamxbox = msg.guild.roles.cache.find(role => role.name === "Team XBOX");
        const teamplaystation = msg.guild.roles.cache.find(role => role.name === "Team PS");
        const teamnintendo = msg.guild.roles.cache.find(role => role.name === "Team Nintendo");
    
        const mobileEmoji = "";
        const consoleEmoji = "";
        const VREmoji = "";
        const PCEmoji = "";
        const flashEmoji = "";

        const teamxboxEmoji = "";
        const teamplaystationEmoji = "";
        const teamnintendoEmoji = "";

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

        + "**Gaming console teams:**"
            + `${teamxboxEmoji} to join Team XBOX\n`
            + `${teamplaystationEmoji} to join Team PlayStation(PS)\n\n`
            + `${teamnintendoEmoji} to join Team Nintendo`);
            

        let msgEmbed = await msg.channel.send(embed);
        msgEmbed.react(mobileEmoji);
        msgEmbed.react(consoleEmoji);
        msgEmbed.react(VREmoji);
        msgEmbed.react(PCEmoji);
        msgEmbed.react(flashEmoji);

        msgEmbed.react(phys008Emoji);
        msgEmbed.react(phys009Emoji);
        msgEmbed.react(engr065Emoji);
        


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
                if(reaction.emoji.name === math021Emoji){
                    classAdd.add(math021);
                }
                if(reaction.emoji.name === math022Emoji){
                    classAdd.add(math022);
                }
                if(reaction.emoji.name === math023Emoji){
                    classAdd.add(math023);
                }
                if(reaction.emoji.name === math024Emoji){
                    classAdd.add(math024);
                }
                if(reaction.emoji.name === math032Emoji){
                    classAdd.add(math032);
                }
                if(reaction.emoji.name === phys008Emoji){
                    classAdd.add(phys008);
                }
                if(reaction.emoji.name === phys009Emoji){
                    classAdd.add(phys009);
                }
                if(reaction.emoji.name === engr065Emoji){
                    classAdd.add(engr065);
                }
                if(reaction.emoji.name === engr191Emoji){
                    classAdd.add(engr191);
                }
                if(reaction.emoji.name === cse015Emoji){
                    classAdd.add(cse015);
                }
                if(reaction.emoji.name === cse022Emoji){
                    classAdd.add(cse022);
                }
                if(reaction.emoji.name === cse024Emoji){
                    classAdd.add(cse024);
                }
                if(reaction.emoji.name === cse30Emoji){
                    classAdd.add(cse030);
                }
                if(reaction.emoji.name === cse031Emoji){
                    classAdd.add(cse031);
                }
                if(reaction.emoji.name === cse100Emoji){
                    classAdd.add(cse100);
                }
                if(reaction.emoji.name === cse120Emoji){
                    classAdd.add(cse120);
                }
                if(reaction.emoji.name === cse106Emoji){
                    classAdd.add(cse106);
                }
                if(reaction.emoji.name === cse111Emoji){
                    classAdd.add(cse111);
                }
                if(reaction.emoji.name === cse140Emoji){
                    classAdd.add(cse140);
                }
                if(reaction.emoji.name === cse150Emoji){
                    classAdd.add(cse150);
                }
                if(reaction.emoji.name === cse160Emoji){
                    classAdd.add(cse160);
                }
                if(reaction.emoji.name === cse165Emoji){
                    classAdd.add(cse165);
                }
                if(reaction.emoji.name === cse175Emoji){
                    classAdd.add(cse175);
                }
                if(reaction.emoji.name === cse178Emoji){
                    classAdd.add(cse178);
                }
                if(reaction.emoji.name === cse185Emoji){
                    classAdd.add(cse185);
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
                if(reaction.emoji.name === math021Emoji){
                    classAdd.remove(math021);
                }
                if(reaction.emoji.name === math022Emoji){
                    classAdd.remove(math022);
                }
                if(reaction.emoji.name === math023Emoji){
                    classAdd.remove(math023);
                }
                if(reaction.emoji.name === math024Emoji){
                    classAdd.remove(math024);
                }
                if(reaction.emoji.name === math032Emoji){
                    classAdd.remove(math032);
                }
                if(reaction.emoji.name === phys008Emoji){
                    classAdd.remove(phys008);
                }
                if(reaction.emoji.name === phys009Emoji){
                    classAdd.remove(phys009);
                }
                if(reaction.emoji.name === engr065Emoji){
                    classAdd.remove(engr065);
                }
                if(reaction.emoji.name === engr191Emoji){
                    classAdd.remove(engr191);
                }
                if(reaction.emoji.name === cse015Emoji){
                    classAdd.remove(cse015);
                }
                if(reaction.emoji.name === cse022Emoji){
                    classAdd.remove(cse022);
                }
                if(reaction.emoji.name === cse024Emoji){
                    classAdd.remove(cse024);
                }
                if(reaction.emoji.name === cse30Emoji){
                    classAdd.remove(cse030);
                }
                if(reaction.emoji.name === cse031Emoji){
                    classAdd.remove(cse031);
                }
                if(reaction.emoji.name === cse100Emoji){
                    classAdd.remove(cse100);
                }
                if(reaction.emoji.name === cse120Emoji){
                    classAdd.remove(cse120);
                }
                if(reaction.emoji.name === cse106Emoji){
                    classAdd.remove(cse106);
                }
                if(reaction.emoji.name === cse111Emoji){
                    classAdd.remove(cse111);
                }
                if(reaction.emoji.name === cse140Emoji){
                    classAdd.remove(cse140);
                }
                if(reaction.emoji.name === cse150Emoji){
                    classAdd.remove(cse150);
                }
                if(reaction.emoji.name === cse160Emoji){
                    classAdd.remove(cse160);
                }
                if(reaction.emoji.name === cse165Emoji){
                    classAdd.remove(cse165);
                }
                if(reaction.emoji.name === cse175Emoji){
                    classAdd.remove(cse175);
                }
                if(reaction.emoji.name === cse178Emoji){
                    classAdd.remove(cse178);
                }
                if(reaction.emoji.name === cse185Emoji){
                    classAdd.remove(cse185);
                }
            }
            else{
                return;
            }
        });
    }
}