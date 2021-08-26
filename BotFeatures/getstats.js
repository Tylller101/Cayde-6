module.exports = {
    name: "getstats", 
    description: "actions when dming the bot including games",
    async execute(msg, fs, guild, jsonfile){

        var stats = {}; //make empty list for 
        if(fs.existsSync("./BotStorage/Server/stats.json")){
            stats = jsonfile.readFileSync("./BotStorage/Server/stats.json");
        }
        else{
            msg.author.send("Sorry I can not find my stats file. I may be under maintenance sorry for the inconvenience.");
            return;
        }

        const guildstats = stats[guild];

        if(msg.author.id in guildstats === false){
            msg.author.send("Sorry but it appears you have not participated on the server and therefore have no stats to view.");
            return;
        }
        else{
            const userstats = guildstats[msg.author.id];
            const xpToNextLevel = 5 * Math.pow(userstats.level, 2) + 50 * userstats.level + 100;

            msg.author.send("You are level: " + "**" + userstats.level + "**\n"
                + "You have " + "**" + userstats.xp + "**" + "XP\n"
                + "You need " + "**" + xpToNextLevel + "**" + "XP to get to level " + (userstats.level + 1) + "\n"
                + "And you have **" + userstats.playTokens + "** Tokens to use in games");
        }
    }
}