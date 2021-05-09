module.exports = {
    name: "leveler", 
    description: "tracks and gives xp", 
    async execute(msg, fs, random, jsonfile){

        if(msg.channel.type === "dm"){
            return;
        }
        
        var stats = {}; //make empty list for 
        if(fs.existsSync("./BotStorage/stats.json")){
            stats = jsonfile.readFileSync("./BotStorage/stats.json");
        }

        if(msg.guild.id in stats === false){
        stats[msg.guild.id] = {};
        }
        const guildstats = stats[msg.guild.id];

        if(msg.author.id in guildstats === false){
            guildstats[msg.author.id] = {
                name: msg.author.username,
                xp: 0,
                level: 0,
                playTokens: 0,
                last_msg: 0, 
            };
        }        
        const userstats = guildstats[msg.author.id];
    
        if(Date.now() - userstats.last_msg >= 30000){
            userstats.xp += random.int(15, 25);
            userstats.playTokens += random.int(1, 5);
            userstats.last_msg = Date.now();
    

            const xpToNextLevel = 5 * Math.pow(userstats.level, 2) + 50 * userstats.level + 100;
            if(userstats.xp >= xpToNextLevel){
                userstats.level++;
                userstats.xp = userstats.xp - xpToNextLevel;
                msg.channel.send(msg.author.username + "has reached level" + userstats.level);
            }
            jsonfile.writeFileSync("./Botstorage/stats.json", stats);
        }
    }
}