module.exports = {
    name: "dming", 
    description: "actions when dming the bot including games",
    async execute(msg, fs, guild, random, jsonfile, caydeBotFeatures){
        const greeting = msg.content.toLowerCase();
        const reply = msg.author;

        if(msg.channel.type === "dm" ){
            if(greeting === "hi" || greeting === "hello"){
                reply.send("Hello! Im Cayde-6 the Official bot of the CSE & Gaming server.");
                return;
            }
            if(greeting === "ping" || greeting === "ping!"){
                reply.send("Pong!");
                return;
            }
            if(greeting === "pong" || greeting === "pong!"){
                reply.send("Ping!");
                return;
            }

            if(greeting === "server"){
                reply.send("**I am currently programed to asist in the following on the CSE & Gameing server:**\n"
                    + "Embeding class and gaming role choice messages.\n" 
                    + "Tracking and awarding XP, Levels and Game Tokens for participating on the server.\n"
                    + "Sending animated emojis for users that dont have nitro.\n\n"
                    
                    + "**I am also programmed to conduct the following in DMs:**\n" 
                    + "Facilitate PvP, PvE or PvPvE games(if you dont know what those mean just type it in the chat)\n"
                    + "Inform users of there server stats or game stats(if applicable)");
                    return;
            }
            if(greeting === "games"){
                reply.send("**I am currently programed to play or facilitate the following games:**\n"
                    + "**Dice Games:**\n"

                    + "**Card Games:**\n"
                    
                    + "**Text RPG Games:**\n");
                return;
            }
            if(greeting === "stats"){
                caydeBotFeatures.get("getstats").execute(msg, guild, fs, random, jsonfile, caydeBotFeatures);
                return;
            }
            if(greeting === "help"){
                reply.send("If you want to know what I contribute to the server just type \"server\"\n" 
                    + "If you want to play a game just type \"games\"\n" 
                    + "If you would like to view your stats for the CSE & Gaming server type \"stats\"");
                    return;
            }
            else{
                msg.author.send("Sorry i do not know that command check your spelling or try using \"help\" ");
            }
        }
    }
}