module.exports = {
    name: "leveler", 
    description: "tracks and gives xp", 
    async execute(msg, fs, random, jsonfile){
        const announcement = msg.guild.channels.cache.find(channel => channel.name === "bot-announcements"); 

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
            userstats.playTokens += 5;
            userstats.last_msg = Date.now();
    

            const xpToNextLevel = 5 * Math.pow(userstats.level, 2) + 50 * userstats.level + 100;
            if(userstats.xp >= xpToNextLevel){
                var LVmsg = 0;
                var premsg = "";
                var midmsg = " has reached";
                var postmsg = "";

                userstats.level++;
                userstats.xp = userstats.xp - xpToNextLevel;

                LVmsg = random.int(0, 4);
                if(LVmsg === 0){
                   postmsg = " Good Job!";
                }
                if(LVmsg === 1){
                    premsg = "Radical ";
                }
                if(LVmsg === 2){
                    premsg = "Congratulations!!! ";
                }
                if(LVmsg === 3){
                    midmsg = " has ascended to";
                }
                if(LVmsg === 4){
                    midmsg = " advanced to"
                }
                announcement.send(premsg + `<@${msg.author.id}>` + midmsg + " level " 
                    + "**" + userstats.level + "**" + postmsg);
            }
            jsonfile.writeFileSync("./Botstorage/stats.json", stats);
            console.log(msg.author.username + " gained some xp & tokens");
        }
    }
}