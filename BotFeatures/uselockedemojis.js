module.exports = {
    name: "uselockedemojis", 
    description: "lets user use emojis that require nitro",
    async execute(msg, args){

        const emoji = msg.guild.emojis.cache.find(emojis => emojis.name === args);

        msg.channel.send(`${msg.author.username}: `).then(caydemsg =>{ 

            msg.channel.send(`${emoji}`).then(error =>{ 
                if(error.content === "undefined"){
                    msg.delete(); 
                    caydemsg.delete();
                    error.delete();

                    console.log("-\nfailed to find emoji: \"" + args + "\" for " + msg.author.username + ".");

                    msg.channel.send("Could not find emoji you may have misspelled or "
                    + "typed the wrong emoji name.").then(errormsg => {
                        errormsg.delete({timeout: 10000});
                    });
                    return;
                }
                else{
                    msg.delete();
                    console.log("-\n" +msg.author.username + " posted emoji: " + "\"" + args + "\"");
                } 
            });
        });
    }
}