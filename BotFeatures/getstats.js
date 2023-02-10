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
        const filepath = "./BotStorage/BotLogs/DMLogs.txt";
        //var save = "";

        if(msg.author.id in guildstats === false){
            msg.author.send("Sorry but it appears you have not participated on the server and therefore have no stats to view.");
            console.log("they have no stats to show cus they haven't been participating");
            //save += "they have no stats to show cus they haven't been participating ";
            //saveToFile(fs, save, filepath);
            return;
        }
        else{
            const userstats = guildstats[msg.author.id];
            const xpToNextLevel = 5 * Math.pow(userstats.level, 2) + 50 * userstats.level + 100;

            msg.author.send("You are level: " + "**" + userstats.level + "**\n"
                + "You have " + "**" + userstats.xp + "**" + "XP\n"
                + "You need " + "**" + xpToNextLevel + "**" + "XP to get to level " + (userstats.level + 1) + "\n"
                + "And you have **" + userstats.playTokens + "** Tokens to use in games");

            console.log("they recieved there stats summary");
            //save += "they recieved their stats summary\n";
            //saveToFile(fs, save, filepath);
        }
    }
}

function saveToFile(fs, save, filepath){
    fs.open(filepath, "a", function(err){
        if(err){
            console.log("failed to open " + filepath);
        }
        else{
            fs.appendFile(filepath, save, (err) => {
                if(err){
                    console.log("failed to write to " + filepath);
                }
                else{
                    console.log("interaction saved to " + filepath);
                }
            });
        }
    });
};

function time(){
    var timestamp = Date.now();
    var dateObject = new Date(timestamp);
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;
    var year = dateObject.getFullYear();
    var hour = dateObject.getHours();
    var min = dateObject.getMinutes();
    var sec = dateObject.getSeconds();
    return (day + "/" + month + "/" + year + "  " + hour + ":" + min + ":" + sec);
}