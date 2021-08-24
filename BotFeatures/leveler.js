module.exports = {
    name: "leveler", 
    description: "tracks and gives xp", 
    execute(msg, fs, random, jsonfile){
        const announcement = msg.guild.channels.cache.find(channel => channel.name === "bot-announcements"); 

        if(msg.channel.type === "dm"){
            return;
        }
        
        var stats = {}; //make empty list for 
        if(fs.existsSync("./BotStorage/Server/stats.json")){
            stats = jsonfile.readFileSync("./BotStorage/Server/stats.json");
        }

        if(msg.guild.id in stats === false){
        stats[msg.guild.id] = {};
        }
        const guildstats = stats[msg.guild.id];

        if(msg.author.id in guildstats === false){
            guildstats[msg.author.id] = {
                name: msg.author.username,
                xp: null,
                level: 0,
                playTokens: null,
                last_msg: null, 
            };
        }        
        const userstats = guildstats[msg.author.id];
    
        if(Date.now() - userstats.last_msg >= 60000){
            userstats.xp += random.int(15, 25);
            userstats.playTokens += 5;
            userstats.last_msg = Date.now();

            console.log("-\n" + msg.author.username + " gained some xp & tokens.");

            if(msg.channel.name.endsWith("-help")){
                userstats.xp += random.int(10, 15);
                console.log(msg.author.username + " help channel bonus.");
            }
            if(msg.attachments.size > 0){
                userstats.xp += random.int(5, 10);
                console.log(msg.author.username + " file upload bonus.");
            }

            const xpToNextLevel = 5 * Math.pow(userstats.level, 2) + 50 * userstats.level + 100;
            if(userstats.xp >= xpToNextLevel){
                console.log("-\n" + msg.author.username + " has gained a level.")
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
                const peon = msg.guild.roles.cache.find(role => role.name === "Peon");
                const apprentice = msg.guild.roles.cache.find(role => role.name === "Apprentice");
                const journeyman = msg.guild.roles.cache.find(role => role.name === "Journeyman");
                const master = msg.guild.roles.cache.find(role => role.name === "Master");
                const grandmaster = msg.guild.roles.cache.find(role => role.name === "GrandMaster");

                if(userstats.level >= 5 && userstats.level < 25){
                    msg.member.roles.remove(peon);
                    msg.member.roles.add(apprentice);
                    postmsg = " and is now a server Apprentice";

                    console.log(msg.author.username + " is now an apprentice.");
                }
                if(userstats.level >= 25 && userstats.level < 50){
                    msg.member.roles.remove(apprentice);
                    msg.member.roles.add(journeyman);
                    postmsg = " and is now a server Journeyman";

                    console.log(msg.author.username + " is now a journeyman.");
                }
                if(userstats.level >= 50 && userstats.level < 100){
                    msg.member.roles.remove(journeyman);
                    msg.member.roles.add(master);
                    postmsg = " and is now a server Master";

                    console.log(msg.author.username + " is now a master.");
                }
                if(userstats.level >= 100){
                    msg.member.roles.remove(master);
                    msg.member.roles.add(grandmaster);
                    postmsg = " and is now a server GrandMaster";
                    
                    console.log(msg.author.username + " is now a grandmaster.");
                }

                announcement.send(premsg + `<@${msg.author.id}>` + midmsg + " level " 
                    + "**" + userstats.level + "**" + postmsg);
            }
        }
        jsonfile.writeFileSync("./Botstorage/Server/stats.json", stats);
    }
}