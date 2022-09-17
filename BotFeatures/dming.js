module.exports = {
    name: "dming", 
    description: "actions when dming the bot including games",
    async execute(msg, guild, fs, jsonfile, features, games, save){
        const greeting = msg.content.toLowerCase();
        const reply = msg.author;
        const filepath = "./BotStorage/BotLogs/DMLogs.txt";
        var save = "";
        console.log("-\n" + msg.author.username + " messaged me at " + time());
        save += ("-\n" + msg.author.username + " messaged me at " + time() + "\n");
           
        if(greeting === "hi" || greeting === "hello"){
            reply.send("Hello! Im Cayde-6 the Official bot of the CSE & Gaming server.");
            console.log("they said hi so i introduced myself");
            save += "they said hi so i introduced myselft\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "ping" || greeting === "ping!"){
            reply.send("Pong!");
            console.log("they pinged me so i ponged them");
            save += "they pinged me so i ponged them\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "pong" || greeting === "pong!"){
            reply.send("Ping!");
            console.log("they ponged me so i pinged them");
            save += "they ponged me so i pinged them\n";
            saveToFile(fs, save, filepath);
            return;
        }

        if(greeting === "server"){
            reply.send("**I am currently programed to asist in the following on the CSE & Gameing server:**\n"
                + "Embeding class and gaming role choice messages.\n" 
                + "Tracking and awarding XP, Levels, Game Tokens and exclusive roles for participating on the server.\n"
                + "Sending animated emojis for users that dont have nitro.\n\n"
                
                + "**I am also programmed to conduct the following in DMs:**\n" 
                + "Facilitate PvP, PvE or PvPvE games(if you dont know what those mean just type it in the chat)\n"
                + "I can \"Draw a card\" or \"Roll a die\"\n"
                + "Inform users of there server stats or game stats(if applicable)");
                console.log("asking me about the server");
                save += "asking me about the server\n";
                saveToFile(fs, save, filepath);
                return;
        }
        if(greeting === "pvp"){
            reply.send("PvP stands for Player Vs. Player.");
            console.log("asking me what pvp stands for");
            save += "asking me what pvp stands for\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "pve"){
            reply.send("PvE stands for Player Vs. Environment(aka me Cayde-6)");
            console.log("asking me what pve stands for");
            save += "asking me what pve stands for\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "pvpve"){
            reply.send("PvPvE stands for Player Vs. Player Vs. Environment(aka me Cayde-6)");
            console.log("asking me what pvpve stands for");
            save += "asking me what pvpve stands for\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "draw a card"){
            features.get("drawcard").execute(msg, guild, fs, jsonfile);
            console.log("asking me to draw a card");
            save += "asking me to draw a card\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "roll a die"){
            features.get("roledice").execute(msg, guild, fs, jsonfile);
            console.log("asking me to roll a die");
            save += "asking me to roll a die\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "games"){
            reply.send("I am currently programed to play or facilitate the following games:\n"
                + "**Card Games:**\n"
                + "sorry no card games are coded at the moment\n"
                //+ "21\n"
                //+ "Durak\n"
                //+ "Egyptian War\n"
                //+ "Go Fish\n"
                //+ "Old Maid\n"
                //+ "Slap Jack\n"
                //+ "UNO\n"
                //+ "War\n\n"

                + "**Dice Games:**\n"
                + "sorry no dice games are coded at the moment\n"
                //+ "Bar Dice(Ship, Captain, Crew)\n"
                //+ "Farkle\n"
                //+ "Yacht\n"
                //+ "Yahtzee\n\n"
                
                + "**Text RPG Games:**\n"
                + "sorry no RPG games are coded at the moment\n"
                //+ "Dungeon delve\n"
                //+ "Castle climb\n"
                //+ ""
                );
                console.log("asking me about games");
                save += "asking me about games\n";
                saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "war"){
            games.get("war").execute(msg, fs, random, jsonfile);
            console.log("asking to play war");
            save += "asking me about games\n";
            saveToFile(fs, save, filepath);
            return;
        }
        if(greeting === "stats"){
            console.log("they asked to see there server stats");
            save += "they asked to see there server stats\n";
            saveToFile(fs, save, filepath);
            features.get("getstats").execute(msg, fs, guild, jsonfile);
            return;
        }
        if(greeting === "help"){
            reply.send("If you want to know what I contribute to the server just type \"server\"\n" 
                + "If you want to play a game just type \"games\"\n" 
                + "If you would like to view your stats for the CSE & Gaming server type \"stats\"");
                console.log("asking me for help");
                save += "asking me for help\n";
                saveToFile(fs, save, filepath);
                return;
        }
        else{
            msg.author.send("Sorry i do not know that command check your spelling or try using \"help\" ");
            console.log("they said \"" + greeting + "\" and i dont know what that is");
            save += ("they said \"" + greeting + "\" and i dont know what that is\n");
            saveToFile(fs, save, filepath);
            return;
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